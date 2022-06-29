import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { ApiService } from 'app/shared/services/api.service';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AuthService } from 'app/shared/services/auth.service';
import { DataService } from 'app/shared/services/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  roles: any=[];
  rows: any = [];
  columns: any = [];
  temp: any = [];
  isLoading: boolean;
  usersData: any = {};
  pageSize: number;
  pageNo = 1;
  submitted: any;
  userResponse: any;
  user = new User;
  admin: User;
  role: any
  
  list: any = [];


  constructor(  private service: TablesService,
    public route: Router,
    private toast: ToastrService,
    private dataservice: DataService,
    private confirmService: AppConfirmService,
    private apiservice: ApiService,
    private loader: AppLoaderService,
      private auth : AuthService
    ) {
      // this.activatedRoute.params.subscribe(params => {
      //   this.user._id = params['id'];
      // });
  
      this.admin = this.auth.currentUser()
      this.role = this.admin.role
    }
  ngOnInit(): void {
    this.getRoles()
  }

  getRoles() {
    this.isLoading = true;
    this.loader.open();
    if(this.role.permissions.view == true || this.role.permissions.all == true){
    this.apiservice.getRoles().subscribe((res:any) => {
      this.list= res
      this.toast.success('Roles get sucessfully')
      this.loader.close();
      console.log('roles list', this.rows);
      this.isLoading = false;
      this.temp = this.list
      this.temp.forEach(element => {
        if (element.status === '1') {
          element.status = 'active'
        }
      })
      this.rows = this.temp;
    });
  }else{
    this.toast.error('you are not authorized for this operation')
    this.loader.close();
  }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    var columns = Object.keys(this.temp[0]);
    columns.splice(columns.length - 1);

    if (!columns.length)
      return;

    const rows = this.temp.filter(function (d) {
      for (let i = 0; i <= columns.length; i++) {
        let column = columns[i];
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.rows = rows;
  }
  
  add() {
    let a: any = {}
    this.dataservice.setOption(a);
    this.route.navigate(['forms/basic']);
  } 


}

