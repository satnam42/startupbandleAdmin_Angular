import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';


// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';

import { rootRouterConfig } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GestureConfig } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



@NgModule({
  imports: [

    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    PerfectScrollbarModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],



  declarations: [AppComponent],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService, },
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }




