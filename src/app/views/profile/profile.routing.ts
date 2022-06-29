import { Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ProfileComponent } from "./profile.component";
// import { ProfileOverviewComponent } from "./profile-overview/profile-overview.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";


export const ProfileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      //   {
      //   path: 'overview',
      //   component: ProfileOverviewComponent,
      //   data: { title: 'Overview', breadcrumb: 'OVERVIEW' }
      // }, 
      {
        path: 'settings/:id',
        component: ProfileSettingsComponent,
        data: { title: 'Settings', breadcrumb: 'SETTINGS' }
      },
      {
        path: 'admin/:id',
        component: AdminProfileComponent,
        data: { title: 'Admin', breadcrumb: 'Admin' }
      },


    ]
  }
];