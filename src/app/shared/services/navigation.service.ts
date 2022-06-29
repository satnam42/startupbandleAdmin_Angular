import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string; // Possible values: link/dropDown/icon/separator/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
}
interface IChildItem {
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

@Injectable()
export class NavigationService {
  constructor() { }
  // tslint:disable-next-line:member-ordering
  iconMenu: IMenuItem[] = [

    {
      type: 'separator',
      name: 'Main Items'
    },
    {
      name: 'Dashboard',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard/analytics'
      // sub: [
      //   { name: 'Default', state: 'default' },
      //   // { name: "Analytics", state: "analytics" },
      //   // { name: "Cryptocurrency", state: "crypto" },
      //   // { name: "Dark Cards", state: "dark" }
      // ]
    },
    // {
    //   name: 'Programs',
    //   type: 'dropDown',
    //   tooltip: 'Programs',
    //   icon: 'event',
    //   state: 'tables',

    //   badges: [{ color: 'primary', value: '3' }],
    //   sub: [
    //     { name: 'Programs List', state: 'program' },
    //     { name: 'Categories', state: 'category' },
    //     { name: 'Tags', state: 'tag' },
    //   ]
    // },
    {
      name: 'Roles',
      type: 'link',
      tooltip: 'Permissions',
      icon: 'https',
      state: 'tables/permissions',
    },
    
    {
      name: 'Admins',
      type: 'link',
      tooltip: 'Admins',
      icon: 'people',
      state: 'tables/filter',

    //   badges: [{ color: 'primary', value: '3' }],
    //   sub: [
    //     { name: 'Admin', state: 'tables/admin' },

    //     { name: "BLANK", state: "blank" }
    //   ]
    },

    {
      name: 'Users',
      type: 'link',
      tooltip: 'Users',
      icon: 'person',
      state: 'tables/user',

      // badges: [{ color: 'primary', value: '2' }],
      // sub: [
      //   { name: 'Parents', state: "paging" },
      //   { name: 'Providers', state: 'provider' },
      // ]
    },
      {
      name: 'CHAT',
      type: 'link',
      tooltip: 'Chat',
      icon: 'chat',
      state: 'chat'
    },
    // {
    //   name: 'Role',
    //   type: 'link',
    //   tooltip: 'Role',
    //   icon: 'people',
    //   state: 'tables/userReposts',
    // },

   
    // {
    //   name: 'Reports',
    //   type: 'link',
    //   tooltip: 'Reports',
    //   icon: 'assessment',
    //   state: 'tables/userReposts',
    // },
    // {
    //   name: 'Reports',
    //   type: 'dropDown',
    //   tooltip: 'Reports',
    //   icon: 'assessment',
    //   state: 'tables',

    //   badges: [{ color: 'primary', value: '4' }],
    //   sub: [
    //     { name: 'Parents', state: 'parentReports' },
    //     { name: 'Child', state: 'childReports' },
    //     { name: 'Programs', state: 'programReports' },
    //     { name: 'Providers', state: 'reports' },
    //   ]
    // },
    // {
    //   name: 'Settings',
    //   type: 'link',
    //   tooltip: 'Settings',
    //   icon: 'gavel',
    //   state: 'others/blank'
      // sub: [
      //   { name: 'Default', state: 'default' },
      //   // { name: "Analytics", state: "analytics" },
      //   // { name: "Cryptocurrency", state: "crypto" },
      //   // { name: "Dark Cards", state: "dark" }
      // ]
    //},
    // {
    //   name: 'Later',
    //   type: 'dropDown',
    //   tooltip: 'later',
    //   icon: 'rowing',

    //   badges: [{ color: 'primary', value: '8' }],
    //   sub: [
    //     { name: 'Profile', state: 'blank' },
    //     { name: 'Invoice', state: 'blank' },
    //     { name: 'Calendar', state: 'blank' },
    //     { name: 'Chat', state: 'blank' },
    //     { name: 'Listing', state: 'blank' },
    //     { name: 'Discounts', state: 'blank' },
    //     { name: 'Booking', state: 'blank' },
    //     { name: 'Waitlist', state: 'blank' },
    //     // { name: "BLANK", state: "blank" }
    //   ]
    // },
  ];

  // tslint:disable-next-line:member-ordering
  separatorMenu: IMenuItem[] = [
    {
      type: 'separator',
      name: 'Custom components'
    },
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'INBOX',
      type: 'link',
      tooltip: 'Inbox',
      icon: 'inbox',
      state: 'inbox'
    },
    {
      name: 'Users',
      type: 'dropDown',
      tooltip: 'Users',
      icon: 'person',
      state: 'tables',

      badges: [{ color: 'primary', value: '2' }],
      sub: [
        { name: 'Parents', state: 'paging' },
        { name: 'Providers', state: 'provider' },
        // { name: 'Program', state: 'program' },
        // { name: 'Child', state: 'ff' },


        // { name: "BLANK", state: "blank" }
      ]
    },
    {
      name: 'Admin Tools',
      type: 'dropDown',
      tooltip: 'Admin Tools',
      icon: 'gavel',

      badges: [{ color: 'primary', value: '2' }],
      sub: [
        { name: 'Categories', state: 'tables/category' },
        { name: 'Tags', state: 'tables/category' },
        // { name: "BLANK", state: "blank" }
      ]
    },
    // {
    //   name: 'Later',
    //   type: 'dropDown',
    //   tooltip: 'later',
    //   icon: 'rowing',

    //   badges: [{ color: 'primary', value: '8' }],
    //   sub: [
    //     { name: 'Profile', state: '' },
    //     { name: 'Invoice', state: '' },
    //     { name: 'Calendar', state: '' },
    //     { name: 'Chat', state: '' },
    //     { name: 'Listing', state: '' },
    //     { name: 'Discounts', state: '' },
    //     { name: 'Booking', state: '' },
    //     { name: 'Waitlist', state: '' },
    //   ]
    // },
  
    {
      name: 'CRUD Table',
      type: 'link',
      tooltip: 'CRUD Table',
      icon: 'format_list_bulleted',
      state: 'cruds/ngx-table'
    },
    {
      name: 'DIALOGS',
      type: 'dropDown',
      tooltip: 'Dialogs',
      icon: 'filter_none',
      state: 'dialogs',
      sub: [
        { name: 'CONFIRM', state: 'confirm' },
        { name: 'LOADER', state: 'loader' }
      ]
    },
    {
      name: 'PROFILE',
      type: 'dropDown',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile',
      sub: [
        { name: 'OVERVIEW', state: 'overview' },
        { name: 'SETTINGS', state: 'settings' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'TOUR',
      type: 'link',
      tooltip: 'Tour',
      icon: 'flight_takeoff',
      state: 'tour'
    },
    {
      type: 'separator',
      name: 'Integrated components'
    },
    {
      name: 'CALENDAR',
      type: 'link',
      tooltip: 'Calendar',
      icon: 'date_range',
      state: 'calendar'
    },
    {
      name: 'MATERIAL',
      type: 'dropDown',
      tooltip: 'Material',
      icon: 'favorite',
      state: 'material',
      sub: [
        { name: 'BUTTONS', state: 'buttons' },
        { name: 'Button Toggle', state: 'button-toggle' },
        { name: 'Buttons Loading', state: 'loading-buttons' },
        { name: 'CARDS', state: 'cards' },
        { name: 'GRIDS', state: 'grids' },
        { name: 'LISTS', state: 'lists' },
        { name: 'MENU', state: 'menu' },
        { name: 'TABS', state: 'tabs' },
        { name: 'SELECT', state: 'select' },
        { name: 'RADIO', state: 'radio' },
        { name: 'AUTOCOMPLETE', state: 'autocomplete' },
        { name: 'SLIDER', state: 'slider' },
        { name: 'PROGRESS', state: 'progress' },
        { name: 'SNACKBAR', state: 'snackbar' }
      ]
    },
    {
      name: 'FORMS',
      type: 'dropDown',
      tooltip: 'Forms',
      icon: 'description',
      state: 'forms',
      sub: [
        { name: 'BASIC', state: 'basic' },
        { name: 'EDITOR', state: 'editor' },
        { name: 'UPLOAD', state: 'upload' },
        { name: 'WIZARD', state: 'wizard' }
      ]
    },
    {
      name: 'TABLES',
      type: 'dropDown',
      tooltip: 'Tables',
      icon: 'format_line_spacing',
      state: 'tables',
      sub: [
        { name: 'FULLSCREEN', state: 'fullscreen' },
        { name: 'PAGING', state: 'paging' },
        { name: 'FILTER', state: 'filter' }
      ]
    },
    {
      name: 'MAP',
      type: 'link',
      tooltip: 'Map',
      icon: 'add_location',
      state: 'map'
    },
    {
      name: 'CHARTS',
      type: 'link',
      tooltip: 'Charts',
      icon: 'show_chart',
      state: 'charts'
    },
    {
      name: 'DND',
      type: 'link',
      tooltip: 'Drag and Drop',
      icon: 'adjust',
      state: 'dragndrop'
    },
    {
      type: 'separator',
      name: 'Other components'
    },
    {
      name: 'SESSIONS',
      type: 'dropDown',
      tooltip: 'Pages',
      icon: 'view_carousel',
      state: 'sessions',
      sub: [
        { name: 'SIGNUP', state: 'signup' },
        { name: 'SIGNIN', state: 'signin' },
        { name: 'FORGOT', state: 'forgot-password' },
        { name: 'LOCKSCREEN', state: 'lockscreen' },
        { name: 'NOTFOUND', state: '404' },
        { name: 'ERROR', state: 'error' }
      ]
    },
    {
      name: 'OTHERS',
      type: 'dropDown',
      tooltip: 'Others',
      icon: 'blur_on',
      state: 'others',
      sub: [
        { name: 'GALLERY', state: 'gallery' },
        { name: 'PRICINGS', state: 'pricing' },
        { name: 'USERS', state: 'users' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'MATICONS',
      type: 'link',
      tooltip: 'Material Icons',
      icon: 'store',
      state: 'icons'
    },
    {
      name: 'DOC',
      type: 'extLink',
      tooltip: 'Documentation',
      icon: 'library_books',
      state: 'http://demos.ui-lib.com/egret-doc/'
    }
  ];

  // tslint:disable-next-line:member-ordering
  plainMenu: IMenuItem[] = [
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard'
    },
    {
      name: 'INBOX',
      type: 'link',
      tooltip: 'Inbox',
      icon: 'inbox',
      state: 'inbox'
    },
    {
      name: 'CHAT',
      type: 'link',
      tooltip: 'Chat',
      icon: 'chat',
      state: 'chat'
    },
    {
      name: 'CRUD Table',
      type: 'link',
      tooltip: 'CRUD Table',
      icon: 'format_list_bulleted',
      state: 'cruds/ngx-table'
    },
    {
      name: 'CALENDAR',
      type: 'link',
      tooltip: 'Calendar',
      icon: 'date_range',
      state: 'calendar'
    },
    {
      name: 'DIALOGS',
      type: 'dropDown',
      tooltip: 'Dialogs',
      icon: 'filter_none',
      state: 'dialogs',
      sub: [
        { name: 'CONFIRM', state: 'confirm' },
        { name: 'LOADER', state: 'loader' }
      ]
    },

    {
      name: 'General',
      type: 'dropDown',
      tooltip: 'General',
      icon: 'person',
      state: 'tables',

      badges: [{ color: 'primary', value: '2' }],
      sub: [
        { name: 'Parents', state: 'paging' },
        { name: 'Providers', state: 'provider' },
        // { name: 'Program', state: 'program' },
        // { name: 'Child', state: 'ff' },


        // { name: "BLANK", state: "blank" }
      ]
    },
    {
      name: 'Admin Tools',
      type: 'dropDown',
      tooltip: 'Admin Tools',
      icon: 'gavel',

      badges: [{ color: 'primary', value: '2' }],
      sub: [
        { name: 'Categories', state: 'tables/category' },
        { name: 'Tags', state: 'tables/category' },
        // { name: "BLANK", state: "blank" }
      ]
    },
    // {
    //   name: 'Later',
    //   type: 'dropDown',
    //   tooltip: 'later',
    //   icon: 'rowing',

    //   badges: [{ color: 'primary', value: '8' }],
    //   sub: [
    //     { name: 'Profile', state: '' },
    //     { name: 'Invoice', state: '' },
    //     { name: 'Calendar', state: '' },
    //     { name: 'Chat', state: '' },
    //     { name: 'Listing', state: '' },
    //     { name: 'Discounts', state: '' },
    //     { name: 'Booking', state: '' },
    //     { name: 'Waitlist', state: '' },
    //     
    //   ]
    // },
    {
      name: 'MATERIAL',
      type: 'dropDown',
      icon: 'favorite',
      state: 'component',
      sub: [
        { name: 'BUTTONS', state: 'buttons' },
        { name: 'Button Toggle', state: 'button-toggle' },
        { name: 'Buttons Loading', state: 'loading-buttons' },
        { name: 'CARDS', state: 'cards' },
        { name: 'GRIDS', state: 'grids' },
        { name: 'LISTS', state: 'lists' },
        { name: 'MENU', state: 'menu' },
        { name: 'TABS', state: 'tabs' },
        { name: 'SELECT', state: 'select' },
        { name: 'RADIO', state: 'radio' },
        { name: 'AUTOCOMPLETE', state: 'autocomplete' },
        { name: 'SLIDER', state: 'slider' },
        { name: 'PROGRESS', state: 'progress' },
        { name: 'SNACKBAR', state: 'snackbar' }
      ]
    },
    {
      name: 'FORMS',
      type: 'dropDown',
      tooltip: 'Forms',
      icon: 'description',
      state: 'forms',
      sub: [
        { name: 'BASIC', state: 'basic' },
        { name: 'EDITOR', state: 'editor' },
        { name: 'UPLOAD', state: 'upload' },
        { name: 'WIZARD', state: 'wizard' }
      ]
    },
    {
      name: 'TABLES',
      type: 'dropDown',
      tooltip: 'Tables',
      icon: 'format_line_spacing',
      state: 'tables',
      sub: [
        { name: 'FULLSCREEN', state: 'fullscreen' },
        { name: 'PAGING', state: 'paging' },
        { name: 'FILTER', state: 'filter' }
      ]
    },
    {
      name: 'PROFILE',
      type: 'dropDown',
      tooltip: 'Profile',
      icon: 'person',
      state: 'profile',
      sub: [
        { name: 'OVERVIEW', state: 'overview' },
        { name: 'SETTINGS', state: 'settings' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'TOUR',
      type: 'link',
      tooltip: 'Tour',
      icon: 'flight_takeoff',
      state: 'tour'
    },
    {
      name: 'MAP',
      type: 'link',
      tooltip: 'Map',
      icon: 'add_location',
      state: 'map'
    },
    {
      name: 'CHARTS',
      type: 'link',
      tooltip: 'Charts',
      icon: 'show_chart',
      state: 'charts'
    },
    {
      name: 'DND',
      type: 'link',
      tooltip: 'Drag and Drop',
      icon: 'adjust',
      state: 'dragndrop'
    },
    {
      name: 'SESSIONS',
      type: 'dropDown',
      tooltip: 'Pages',
      icon: 'view_carousel',
      state: 'sessions',
      sub: [
        { name: 'SIGNUP', state: 'signup' },
        { name: 'SIGNIN', state: 'signin' },
        { name: 'FORGOT', state: 'forgot-password' },
        { name: 'LOCKSCREEN', state: 'lockscreen' },
        { name: 'NOTFOUND', state: '404' },
        { name: 'ERROR', state: 'error' }
      ]
    },
    {
      name: 'OTHERS',
      type: 'dropDown',
      tooltip: 'Others',
      icon: 'blur_on',
      state: 'others',
      sub: [
        { name: 'GALLERY', state: 'gallery' },
        { name: 'PRICINGS', state: 'pricing' },
        { name: 'USERS', state: 'users' },
        { name: 'BLANK', state: 'blank' }
      ]
    },
    {
      name: 'MATICONS',
      type: 'link',
      tooltip: 'Material Icons',
      icon: 'store',
      state: 'icons'
    },
    {
      name: 'DOC',
      type: 'extLink',
      tooltip: 'Documentation',
      icon: 'library_books',
      state: 'http://demos.ui-lib.com/egret-doc/'
    }
  ];

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  // tslint:disable-next-line:member-ordering
  iconTypeMenuTitle: string = 'Frequently Accessed';
  // sets iconMenu as default;
  // tslint:disable-next-line:member-ordering
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  // tslint:disable-next-line:member-ordering
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    switch (menuType) {
      case 'separator-menu':
        this.menuItems.next(this.separatorMenu);
        break;
      case 'icon-menu':
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.plainMenu);
    }
  }
}
