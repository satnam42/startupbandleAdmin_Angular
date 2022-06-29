import { Component, OnInit, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LayoutService } from '../../services/layout.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { DataService } from 'app/shared/services/dataservice.service';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-header-side',
  templateUrl: './header-side.template.html'
})
export class HeaderSideComponent implements OnInit {
  @Input() notificPanel;
  public availableLangs = [{
    name: 'EN',
    code: 'en',
    flag: 'flag-icon-us'
  }, {
    name: 'ES',
    code: 'es',
    flag: 'flag-icon-es'
  }]
  currentLang = this.availableLangs[0];

  public egretThemes;
  public layoutConf: any;
  userId: any;
  currentUser: any;
  userImg: any;

  constructor(
    private apiservice: ApiService,
    private dataservice: DataService,
    private themeService: ThemeService,
    private layout: LayoutService,
    public translate: TranslateService,
    private router: Router,
    private authservice: AuthService,
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.userId = localStorage.userId
    this.egretThemes = this.themeService.egretThemes;
    this.layoutConf = this.layout.layoutConf;
    this.translate.use(this.currentLang.code);
    this.getCurrentUser()
  }

  getCurrentUser() {
    this.currentUser = this.authservice.currentUser()
    // this.userImg = res.data.avatar
  }

  setLang(lng) {
    this.currentLang = lng;
    this.translate.use(lng.code);
  }
  changeTheme(theme) {
    // this.themeService.changeTheme(theme);
  }
  toggleNotific() {
    this.notificPanel.toggle();
  }
  toggleSidenav() {
    if (this.layoutConf.sidebarStyle === 'closed') {
      return this.layout.publishLayoutChange({
        sidebarStyle: 'full'
      })
    }
    this.layout.publishLayoutChange({
      sidebarStyle: 'closed'
    })
  }

  toggleCollapse() {
    // compact --> full
    if (this.layoutConf.sidebarStyle === 'compact') {
      return this.layout.publishLayoutChange({
        sidebarStyle: 'full',
        sidebarCompactToggle: false
      }, { transitionClass: true })
    }

    // * --> compact
    this.layout.publishLayoutChange({
      sidebarStyle: 'compact',
      sidebarCompactToggle: true
    }, { transitionClass: true })

  }

  onSearch(e) {
    //   console.log(e)
  }

  getProfile() {
    this.currentUser.isCurrent = true;
    this.dataservice.setOption(this.currentUser);
    this.router.navigate(['/profile/admin',this.currentUser._id]);
    console.log('@@@@@',this.currentUser)
  }
  signOut() {
    this.authservice.logout()
    localStorage.removeItem('userData')
    this.router.navigate(['/sessions/signin']);
  }

}