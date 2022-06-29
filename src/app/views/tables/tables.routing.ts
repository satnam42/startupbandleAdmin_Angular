import { Routes } from '@angular/router';

// import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
// import { PagingTableComponent } from './paging-table/paging-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
// import { MaterialTableComponent } from './material-table/material-table.component';
// import { UserReportsComponent } from './user-reports/user-reports.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { UserTableComponent } from './user-table/user-table.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [
      //   {
      //   path: 'fullscreen',
      //   component: FullscreenTableComponent,
      //   data: { title: 'Fullscreen', breadcrumb: 'FULLSCREEN' }
      // },
      //  {
      //   path: 'paging',
      //   component: PagingTableComponent,
      //   data: { title: 'Paging', breadcrumb: 'PAGING' }
      // }, {
      //   path: 'userReposts',
      //   component: UserReportsComponent,
      //   data: { title: 'Reports', breadcrumb: 'Reports' }
      // },
      {
        path: 'permissions',
        component: PermissionsComponent,
        data: { title: 'Roles', breadcrumb: 'Roles' }
      }, {
        path: 'filter',
        component: FilterTableComponent,
        data: { title: 'Admin', breadcrumb: 'Admin' }
      },
      {
        path: 'user',
        component: UserTableComponent,
        data: { title: 'User', breadcrumb: 'User' }
      },
      // {
      //   path: 'mat-table',
      //   component: MaterialTableComponent,
      //   data: { title: 'Material TAble', breadcrumb: 'Material Table' }
      // }
    ]
  }
];
