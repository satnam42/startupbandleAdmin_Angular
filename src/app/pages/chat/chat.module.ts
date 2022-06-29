import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatComponent } from './chat.component';
import { environment } from 'src/environments/environment';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ChatRoutes } from './chat.routing';
import { ChatService } from 'src/app/core/services/chat.service';
import { CoreModule } from 'src/app/core/core.module';
import { Chat2Component } from './chat2/chat2.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const config: SocketIoConfig = { url: environment.socketUrl, options: {} };
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    CoreModule,
    Ng2SearchPipeModule,

    // FlexLayoutModule,
    SocketIoModule.forRoot(config),
    RouterModule.forChild(ChatRoutes)
  ],
  declarations: [ChatComponent, Chat2Component],
  providers: [ChatService]
})
export class ChatModule { }