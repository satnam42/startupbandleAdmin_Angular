import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/shared/services/dataservice.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'app/shared/services/api.service';
import { User } from 'app/shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
// import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
// import { UserTableComponent } from 'app/views/tables/user-table/user-table.component';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
  public hasBaseDropZoneOver: boolean = false;
  user = new User;
  userResponse: any;
  closeResult: string;
  show: boolean = true;
  hide: boolean = true;
  formData = new FormData();
  userPass: any = {};
  selectedImg: any
  imgId: any

  genders: any[] = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' }
  ];

  status: any[] = [
    { name: 'Active', value: 'active' },
    { name: 'Inactive', value: 'inactive' },

  ];

  imgResponse: any;
  images: File = null
  fileData: File = null;
  msg: string;
  imagePath;
  imgURL: any;
  isGalleryModal = false; gallery = '';
  imgURLS: any = [];
  imagesPath;
  list: any = [];
  temp: any = [];

  isLoading: boolean = false;
  data: any = new User;

  constructor(
    private dataservice: DataService,
    private route: Router,
    private apiservice: ApiService,
    private activatedRoute: ActivatedRoute,
    private toast: ToastrService,
    private modalService: NgbModal,
    private confirmService: AppConfirmService,
  ) {

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.apiservice.getCurrentUser(id).subscribe(user => {
        console.log('cuurentuser', user)
        this.user = user
      }
      )
      console.log("id", id)
    });
  }

  ngOnInit() {

  }

  resetPassword(data) {
    let model = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword
    }
    this.apiservice.resetUserPassword(this.user.id, model).subscribe(res => {
      this.userResponse = res;
    });
  }

  updateUser(data) {
    this.apiservice.updateUser(this.user.id, this.user).subscribe((res: any) => {
      if (res.isSuccess === true) {
        this.userResponse = res;
        this.toast.success('User updated successfully')
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.route.navigate(['profile/settings', this.user.id]);
        })
      } else {
        this.toast.error(res.error);
      }
    })
  }

  uploadProfile(data) {
    this.apiservice.uploadUserImage(this.formData).subscribe(res => {
      this.data = res;
      if (res.isSuccess === true) {
        console.log('responses', this.data)
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.route.navigate(['profile/settings', this.user.id]);
        })
      }
    });

  };


  singleSelect(event) {
    console.log('userID', this.user.id)

    this.fileData = event.target.files[0];
    this.formData.append('file', this.fileData);
    this.formData.append('id', this.user.id);
    this.formData.append('imageFor', 'user');
    // this.uploadProfile(this.formData)
    if (event.target.files.length === 0)
      return;
    var reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.msg = " only images are supported";
      return;
    }

  }

  uploadMultipleImages() {

    let formData = new FormData();
    console.log('images', this.images)
    for (let i in this.images) {
      console.log(i)
      formData.append('file', this.images[i]);
    }
    formData.append('id', this.user.id);
    formData.append('imageFor', 'user');
    this.apiservice.uploadMultipleImages(formData).subscribe(res => {
      this.data = res;
      if (res.isSuccess === true) {
        console.log('responses', this.data)
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.route.navigate(['profile/settings', this.user.id]);
        })
      }
    });

  };

  multiImgSelect = async (event) => {

    this.images = event.target.files
    if (event.target.files.length === 0)
      return;
    var reader = new FileReader();
    let images = event.target.files;
    for (let image of images) {
      let imageUrl = await this.handleUpload(image)
      this.imgURLS.push(imageUrl)

    }

  }

  readUploadedFile = (inputFile) => {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        console.log("Problem parsing input file.")
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
  };

  handleUpload = async (file) => {
    let fileContents = await this.readUploadedFile(file)
    return fileContents
  }


  deleteImage(id, imgId, image) {

    var imageName = image.split("/").pop();
    console.log('name', imageName)
    this.confirmService.confirm({ message: `Delete ${imageName}?` }).subscribe(res => {
      if (res) {
        this.apiservice.removeImage(id, imgId, imageName).subscribe(res => {
          this.userResponse = res;
          if (this.userResponse.isSuccess === true) {
            console.log(this.userResponse)
          }

        })
      }
    })
  }



  open(imgId, image) {
    this.selectedImg = image
    this.modalService.open(imgId, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  back() {
    this.route.navigate(['tables/user']);
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

}
