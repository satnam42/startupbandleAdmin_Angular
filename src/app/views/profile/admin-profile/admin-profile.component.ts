import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { ApiService } from 'app/shared/services/api.service';
import { AuthService } from 'app/shared/services/auth.service';
import { DataService } from 'app/shared/services/dataservice.service';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
  public hasBaseDropZoneOver: boolean = false;
  admin = new User;
  userResponse: any;

  show: boolean = true;
  hide: boolean = true;
  formData = new FormData();
  userPass: any = {};

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

  fileData: File = null;
  msg: string;
  imagePath;
  imgURL: any;
  list: any = [];
  temp: any = [];
  
  isLoading: boolean = false;
  data: any = new User;
  user = new User;
  //  data: any = {
  //   id: '',
  //   imageFor: 'User',
  // }
  constructor(
    private dataservice: DataService,
    private route: Router,
    private apiservice: ApiService,
    private auth: AuthService,
    private snack: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private toast : ToastrService,

  ) {
    this.user = dataservice.getOption();
     
     // this.admin = this.auth.currentUser()
      
  
    // this.user.id = localStorage.getItem('id');
  }

  ngOnInit() {

  }

  resetPassword(data) {
    let model = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword
    }
    this.apiservice.adminResetPassword(this.user._id, model).subscribe(res => {
      this.userResponse = res;
    });
  }

  updateProfile(data) {
    this.apiservice.updateAdmin(this.user._id, this.user).subscribe((res:any) => {
      if(res.isSuccess=== true){
      this.userResponse = res;
      this.toast.success('Admin updated successfully')
      this.route.navigate(['tables/filter']);
      }else{
        this.toast.error(res.error);
        }
      })
  }
 
  uploadProfile(data) {
    this.apiservice.uploadUserImage(data ).subscribe(res => {
      this.data = res;
    });

  };


  fileSelect(event) {
    console.log('userID',this.admin.id)
    this.fileData = event.target.files[0];
    this.formData.append('file', this.fileData);
    this.formData.append('id', this.admin.id);
    this.formData.append('imageFor', 'user');
    this.uploadProfile(this.formData)
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


  back() {
    this.route.navigate(['tables/filter']);
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

}
