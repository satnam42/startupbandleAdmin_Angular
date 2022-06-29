import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { Ng5SliderModule } from 'ng5-slider';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
const routes: Routes = [
  {
    path: '', component: SearchComponent,
  }
]
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxUiLoaderModule,
    AutocompleteLibModule,
    InfiniteScrollModule,
    // GoogleMapsModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCgd-rD47NFwKVpQ30skw_D-qWUMHrxjO4',
      apiKey: 'AIzaSyD_5P0pxn1q9hvvTeCr3YCsDhLJoHwxs2c',

      libraries: ['places']
    }),
    RouterModule.forChild(routes)
  ]
})
export class SearchModule { }
