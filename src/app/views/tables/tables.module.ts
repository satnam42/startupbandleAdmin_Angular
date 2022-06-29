import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import * as echarts from 'echarts';
import { FilterTableComponent } from './filter-table/filter-table.component';
// import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
// import { PagingTableComponent } from './paging-table/paging-table.component';
import { TablesRoutes } from './tables.routing';
// import { MaterialTableComponent } from './material-table/material-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
// import { UserReportsComponent } from './user-reports/user-reports.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedPipesModule } from 'app/shared/pipes/shared-pipes.module';
import { PermissionsComponent } from './permissions/permissions.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  imports: [
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    NgxDatatableModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    FlexLayoutModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    NgxDatatableModule,
    SharedPipesModule,
    RouterModule.forChild(TablesRoutes)
  ],
  declarations: [
    FilterTableComponent,
    //  FullscreenTableComponent, 
    //  PagingTableComponent,
    // MaterialTableComponent,
    //  UserReportsComponent, 
    PermissionsComponent,
    UserTableComponent
  ]
})
export class TablesModule { }
