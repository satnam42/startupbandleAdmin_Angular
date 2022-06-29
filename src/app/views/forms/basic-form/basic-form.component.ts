import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { DataService } from 'app/shared/services/dataservice.service';
import { TablesService } from 'app/views/tables/tables.service';
import { CustomValidators } from 'ngx-custom-validators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  formData = {};
  rows: any = [];
  columns: any = [];
  temp: any = [];
  roleForm: FormGroup;
  role: any = {
    type: '',
    permissions: {}
   
   };
   permissions : {}
   
  
  rolesList: any =[];
  FormData: any;
  submitted: boolean;
  usersData: any = {};
  responseData: any;
  res: any[];
  show: boolean = true;
  isLoading: boolean;
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 4000;
  userResponse: any;
  formName:string 


  constructor(private service: TablesService,
    public dataRoute: ActivatedRoute,
    private dataservice: DataService,
    private apiservice: ApiService,
    private route: Router,
    private toast: ToastrService,
    private loader: AppLoaderService) {
    
    this.permissions  =  {view: false,
      add: false,
      edit: false,
      all: false}
    }

  

  back() {
    this.route.navigate(['tables/roles']);
  }
  
 

  ngOnInit() {
    this.roleForm = new FormGroup({
      type: new FormControl('', Validators.required),
      permissions: new FormControl(''),
     
    });
  }

  onChange(value){
    let permissions = Object.keys(this.permissions); 
    // this.permissions[value] = true
    for(let permission of permissions){
      if(permission == value){
        this.permissions[permission] = true
      }else{
        this.permissions[permission] = false
      }

    }
  }
  

  addRoles() {

    this.role.permissions = this.permissions;
      this.apiservice.addRoles(this.role).subscribe((res: any) => {
        console.log('resssssss', res)
         });
    }

 
  onSubmit() {
    this.submitted = true;
    console.log(this.roleForm.value)
     this.addRoles();
    } 
  }


