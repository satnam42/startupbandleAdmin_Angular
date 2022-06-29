import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  routeName: string
  dashboard: string = "";
  program: string = "";
  setting: string = "";
  profile: string = "";
  associates: string = "";

  hideNav: Boolean = true;
  constructor(private router: Router,) {
    // this.router.events.filter((event: any) => event instanceof NavigationEnd).subscribe(event => {
    //   this.routeName = event.url;
    // });
  }

  ngOnInit() {

    if (this.routeName === '/program/home') {
      this.dashboard = 'active'
    }
    if (this.routeName === '/program/list') {
      this.program = 'active'
      this.dashboard = ''
    }
    if (this.routeName === '/program/detail') {
      this.program = 'active'
      this.dashboard = ''
    }
    if (this.routeName === '/program/add') {
      this.program = 'active'
      this.dashboard = ''
    }
    if (this.routeName === 'profile') {
      this.profile = 'active';
      this.dashboard = ''


    }
    if (this.routeName === '/program/setting') {
      this.setting = 'active'
      this.dashboard = ''
    }

  }

}
