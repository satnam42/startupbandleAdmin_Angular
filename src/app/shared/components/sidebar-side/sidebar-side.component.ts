import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { NavigationService } from "../../../shared/services/navigation.service";
import { ThemeService } from "../../services/theme.service";
import { Subscription } from "rxjs";
import { ILayoutConf, LayoutService } from "app/shared/services/layout.service";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { Router, ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ApiService } from "app/shared/services/api.service";
import { User } from "app/shared/models/user.model";
import { AuthService } from "app/shared/services/auth.service";

@Component({
  selector: "app-sidebar-side",
  templateUrl: "./sidebar-side.component.html"
})
export class SidebarSideComponent implements OnInit, OnDestroy, AfterViewInit {
  public menuItems;
  public hasIconTypeMenuItem: boolean;
  public iconTypeMenuTitle: string;
  private menuItemsSub: Subscription;
  public layoutConf: ILayoutConf;
  sub: Subscription;
  page: number;
  profile: any;
  userId: string;
  public currentUser;
  userImg: any;

  constructor(
    private route: ActivatedRoute,
    private navService: NavigationService,
    public themeService: ThemeService,
    private router: Router,
    private apiservice: ApiService,
    private authservice: AuthService,

    private layout: LayoutService,
  ) {
  }

  ngOnInit() {
    this.userId = localStorage.userId

    this.getCurrentUser();
    this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
    this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;
      //Checks item list has any icon type.
      this.hasIconTypeMenuItem = !!this.menuItems.filter(
        item => item.type === "icon").length;
    });

    this.layoutConf = this.layout.layoutConf;
  }

  getCurrentUser() {
    let user = this.authservice.currentUser()
    this.currentUser = user.name

  }

  ngAfterViewInit() { }
  ngOnDestroy() {
    if (this.menuItemsSub) {
      this.menuItemsSub.unsubscribe();
    }
  }
  toggleCollapse() {
    if (
      this.layoutConf.sidebarCompactToggle
    ) {
      this.layout.publishLayoutChange({
        sidebarCompactToggle: false
      });
    } else {
      this.layout.publishLayoutChange({
        // sidebarStyle: "compact",
        sidebarCompactToggle: true
      });
    }
  }

  signOut() {
    this.router.navigateByUrl("sessions/signin");
  }
}
