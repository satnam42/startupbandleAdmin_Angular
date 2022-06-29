import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedPipesModule } from 'app/shared/pipes/shared-pipes.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ProfileComponent } from "./profile.component";
// import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileRoutes } from "./profile.routing";
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatDialogModule } from '@angular/material/dialog';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatProgressBarModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ChartsModule,
    FileUploadModule,
    LazyLoadImageModule,
    SharedPipesModule,
    NgbModule,
    MatDialogModule,
    RouterModule.forChild(ProfileRoutes)
  ],
  declarations: [ProfileComponent,
    //  ProfileOverviewComponent,
    ProfileSettingsComponent,
    AdminProfileComponent,],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class ProfileModule { }
