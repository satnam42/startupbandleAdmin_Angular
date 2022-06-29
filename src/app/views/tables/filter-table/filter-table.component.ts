import { Component, OnInit } from '@angular/core';

import { TablesService } from '../tables.service';
import { Router } from '@angular/router';
import { DataService } from 'app/shared/services/dataservice.service';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { ApiService } from 'app/shared/services/api.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnalyticsComponent } from 'app/views/dashboard/analytics/analytics.component';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'app/shared/services/auth.service';
import { User } from 'app/shared/models/user.model';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css'],
  providers: [TablesService]
})
export class FilterTableComponent implements OnInit {
  rows: any = [];
  columns: any = [];
  temp: any = [];

  isLoading: boolean;
  usersData: any = {};
  user= new User
  pageSize: number;
  pageNo = 1;
  submitted: any;
  userResponse: any;
  message: string = 'User Deleted Successfully!';
  list: any = [];
  adminList: any = [];
  admin: User;
  role: any;


  constructor(
    public route: Router,
    private dataservice: DataService,
    private confirmService: AppConfirmService,
    private apiservice: ApiService,
    private auth : AuthService,
    private toast: ToastrService

  ) { 

    this.admin = this.auth.currentUser()
    this.role = this.admin.role

  }

  ngOnInit() {
    sessionStorage.clear();
    // this.getUsers();
    this.getAdmins();
  }

  getAdmins() {
    this.apiservice.getAdmins().subscribe((res: any) => {
      this.list = res.data
      this.temp = this.list
      this.temp.forEach(element => {
        if (element.status === '1') {
          element.status = 'active'
        }
      })
      this.rows = this.temp;
      
    });
  }

  
  changeStatus(user) {
    if(this.role.permissions.edit === true || this.role.permissions.all === true){
      if (user.status === 'active') {
        user.status = 'inactive'
        this.toast.warning('Status Deactivated')
      } else{
        user.status = 'active'
        this.toast.success('Status Activated')
         }
         this.apiservice.updateAdmin(user._id, user).subscribe((res: any) => {
    })
    } 
       else {
      this.toast.error('you are not authorized for this operation')
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


  deleteAdmin(data) {
    this.confirmService.confirm({ message: `Delete ${data.firstName}?` }).subscribe(res => {
      if (res) {
       this.apiservice.deleteUser(data._id).subscribe(res => {
          this.userResponse = res;
          if (this.userResponse.isSuccess === true) {
            this.route.navigateByUrl('/tables', { skipLocationChange: true }).then(() => {
              this.route.navigate(['tables/filter']);
            })
           }
         
        })
      }
    })
  }

  userProfile(data) {
    data.isSelect = false;
    this.dataservice.setOption(data);
    this.route.navigate(['profile/admin',data._id]);
  }

  add() {
    let data: any = {};
    data.isSelect = true;
    this.dataservice.setOption(data);
    this.route.navigate(['forms/user']);
  }

  edit(data) {
    data.isSelect = false;
    this.dataservice.setOption(data);
    this.route.navigate(['forms/user']);
  }
}
