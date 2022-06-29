import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { DataService } from 'app/shared/services/dataservice.service';
import { TablesService } from 'app/views/tables/tables.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  formData = {};
  rows: any = [];
  columns: any = [];
  temp: any = [];
  userForm: FormGroup;
  user: any = {
    
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: '5ff5a043c51e0042898fe15e',
    phoneNumber: '',
    sex: '',
    
  };

  // roles: any[] = [
  //   { name: 'SuperAdmin', value: 'SA' },
  //   { name: 'Admin', value: 'A' },
  //   { name: 'User', value: 'U' }
  // ];

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
  isLoading: boolean;
  message: string = 'User Added Successfully!';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 4000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  userResponse: any;
  formName:string 


  constructor(private service: TablesService,
    public dataRoute: ActivatedRoute,
    private dataservice: DataService,
    private apiservice: ApiService,
    private snack: MatSnackBar,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toast: ToastrService,
    private loader: AppLoaderService) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;

    let data =dataservice.getOption()
    
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      this.formName = "Add user"
      this.user.email = null
      this.user.password = null
    }
    else{
      this.user = data 
      this.formName = "Edit User"
    }
  }

  back() {
    this.route.navigate(['tables/filter']);
  }
  // getRoles() {
  //   this.isLoading = true;
  //   this.loader.open();
  //   this.apiservice.getRoles().subscribe((res) => {
  //     this.rolesList = res
  //     this.loader.close();

  //     console.log('role list', this.rolesList);
  //     this.isLoading = false;
  //   });
  // }
  ngOnInit() {
    // this.getRoles();
    // this.user = this.dataservice.getOption();

    this.userForm = new FormGroup({

      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
      roleId: new FormControl('',),
      city: new FormControl(''),
      country: new FormControl(''),
      zipCode: new FormControl(''),
      // lat: new FormControl(''),
      // long: new FormControl(''),
      // stripeToken: new FormControl(''),
      // stripeKey: new FormControl(''),
      // ssn: new FormControl('',),
      // deviceToken: new FormControl(''),

    });
  }

  addUsers() {
    
      let email = this.user.email.toLowerCase();
      this.user.email = email;
      this.apiservice.addUsers(this.user).subscribe((res: any) => {
        console.log('resssssss', res)
         
         });
    }
  
  onSubmit() {
    this.submitted = true;
    if (!this.user.id) {
      return this.addUsers();
    }
    
  }
}

