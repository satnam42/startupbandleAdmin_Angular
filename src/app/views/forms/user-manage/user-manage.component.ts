import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TablesService } from 'app/views/tables/tables.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'app/shared/services/dataservice.service';
import { ApiService } from 'app/shared/services/api.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  formData = {};
  adminForm: FormGroup;
  admin: any = {
    name: '',
    email: '',
    password: '',
    status: '',
    sex: '',
    roleId: '5ff5a043c51e0042898fe15e',
  };

  genders: any[] = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Other', value: 'other' }
  ];
  rolesList: any =[];

  FormData: any;
  submitted: boolean;
  usersData: any = {};
  responseData: any;
  res: any[];
  show: boolean = true;

  message: string = 'User Added Successfully!';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 4000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  userResponse: any;
  isLoading: boolean;

  constructor(private service: TablesService,
    public dataRoute: ActivatedRoute,
    private dataservice: DataService,
    private apiservice: ApiService,
    private snack: MatSnackBar,
    private toast : ToastrService,
    private route: Router,
    private loader: AppLoaderService) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
  }

  back() {
    this.route.navigate(['tables/filter']);
  }
  
  ngOnInit() {
    // this.getRoles();
    this.adminForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl(''),
     
      sex: new FormControl('', Validators.required),
      roleId: new FormControl('')
     
    });
  }

  addAdmins() {
    let email = this.admin.email.toLowerCase();
    this.admin.email = email;
    this.apiservice.addAdmins(this.admin).subscribe((res: any) => {
      console.log('resssssss', res)
       
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.admin._id) {
      return this.addAdmins();
    } else if (this.admin._id) {
     
    }
  }
}

