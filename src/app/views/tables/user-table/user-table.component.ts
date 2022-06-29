import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { ApiService } from 'app/shared/services/api.service';
import { AppConfirmService } from 'app/shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AuthService } from 'app/shared/services/auth.service';
import { DataService } from 'app/shared/services/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input()
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
  list: any = [];
  admin: User;
  role: any;

  constructor(
    private service: TablesService,
    public route: Router,
    private snack: MatSnackBar,
    private toast: ToastrService,
    private dataservice: DataService,
    private confirmService: AppConfirmService,
    private apiservice: ApiService,
    private loader: AppLoaderService,
    private activatedRoute: ActivatedRoute,
    private auth : AuthService
  ) {
    // this.activatedRoute.params.subscribe(params => {
    //   this.user._id = params['id'];
    // });

    this.admin = this.auth.currentUser()
    this.role = this.admin.role
  }

  ngOnInit() {
    sessionStorage.clear();
    this.getUsers();
  }


  getUsers() {
    this.apiservice.getUsers().subscribe((res: any) => {
      this.list = res.data
      console.log("data",this.list)
      this.temp = this.list
      this.temp.forEach(element => {
        if (element.status === '1') {
          element.status = 'active'
        }
      })
      this.rows = this.temp;
      
    });
  }

  changeStaus(user) {
     if(this.role.permissions.edit === true || this.role.permissions.all === true){
      if (user.status === 'active') {
        user.status = 'inactive'
        this.toast.warning('Status Deactivated')
      } else{
        user.status = 'active'
        this.toast.success('Status Activated')
         }
         this.apiservice.updateUser(user.id, user).subscribe((res: any) => {
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


  deleteUser(data) {
    localStorage.setItem('userToken', data.token)
  this.confirmService.confirm({ message: `Delete ${data.firstName}?` }).subscribe(res => {
      if (res) {
        this.apiservice.deleteUser(data.id ).subscribe(res => {
          this.userResponse = res;
     })
      }
    })
  }


  userProfile(data) {
    // data.isSelect = false;
    this.dataservice.setOption(data);
    this.route.navigate(['profile/settings', data.id]);
  }
  add() {
    let a: any = {}
    this.dataservice.setOption(a);
    this.route.navigate(['forms/update']);    
  }
  edit(data: any) {
    this.dataservice.setOption(data);
    this.route.navigate(['forms/update']);
  }
}


