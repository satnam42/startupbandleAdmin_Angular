import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSidenav, MatSidenavModule, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
// import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { Socket } from 'ngx-socket-io';
import { ApiService } from 'src/app/core/services/api.service.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import * as io from 'socket.io-client';
import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { Chat, ChatService } from 'src/app/core/services/chat.service';
import { ToastyService } from 'ng2-toasty';
import { NgxFileDropContentTemplateDirective } from 'ngx-file-drop/ngx-file-drop/ngx-templates.directive';
@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {
  isMobile;
  search;
  screenSizeWatcher: Subscription;
  isSidenavOpen: Boolean = true;
  public user: User = new User();
  users: any = [];
  public activeContact: User = new User();
  currentUser: User = new User();
  isLoading: boolean;
  chatCollection: any[] = []
  text: string
  date = new Date()
  selectedIndex: number = null;
  chat: Chat = new Chat()
  typingMsg: string
  pageNo: number = 1;
  pageSize: number = 100;
  currentRoom: any = {};
  roomId: string;
  currentId: any
  fileData: File = null;
  formData = new FormData();
  msg: string;
  imagePath;
  imgURL: any;
  message: string = 'Updated Successfully';

  data: any = {
    id: '',
    imageFor: '',
  };


  constructor(
    public chatService: ChatService,
    private authService: AuthService,
    private apiservice: ApiService,
    private toastyService: ToastyService,
    private router: Router,
    private auth: AuthService
  ) {

    this.getUsers()
  }

  getUsers() {
    this.isLoading = true;
    this.apiservice.getUsers().subscribe((res: any) => {
      this.users = res
      this.users.forEach(element => {
        if (element.id === this.currentUser.id) {
          this.currentId = this.currentUser.id
        }

      });

      console.log('user list', this.users);
      this.isLoading = false;
    });
  }

  getOldChat() {
    this.isLoading = true;
    this.apiservice.getOldChat(this.roomId, this.pageNo, this.pageSize).subscribe((res: any[]) => {
      this.chatCollection = res
      console.log('old chat', this.chatCollection);
    });
  }

  trackByFn(index, item) {
    this.selectedIndex = index;
    return index;
  }

  slectedUser(user) {
    this.activeContact = user
    let currentRoom = this.currentUser.firstName + "-" + this.activeContact.firstName;
    let reverseRoom = this.activeContact.firstName + "-" + this.currentUser.firstName;
    this.chatService.setUser(this.currentUser.firstName)
    this.chatService.createRomm(currentRoom, reverseRoom)
    this.getRoomId()
    // this.getOldChat()
  }


  // getOldChat

  ngAfterViewInit() {
    // this.getUsers()
  }

  ngOnInit() {
    // this.getOldChat();
    this.currentUser = this.authService.currentUser()
    // this.chatSideBarInit();
    //recvice message
    this.chatService.getMessages().subscribe((message: Chat) => {
      if (message.msgFrom !== this.currentUser.firstName) {
        this.chatCollection.push(message);
        console.log('chatcollection', this.chatCollection)
      }
    });

    this.chatService.getTyping().subscribe((msg: string) => {
      console.log('typing', this.typingMsg)

      let setTime;
      clearTimeout(setTime);
      //showing typing message.
      this.typingMsg = msg
      //showing typing message only for few seconds.
      setTime = setTimeout(() => {
        this.typingMsg = ""
      }, 3500);

    });

  }

  getRoomId() {
    this.chatService.getRoomId().subscribe((id: string) => {
      this.roomId = id;
      console.log('roomId', this.roomId)
      this.getOldChat();
    })
  }
  keyUp() {
    console.log('typing', this.text)
    this.chatService.startTyping()
  }

  sendMessage() {
    if (this.text.trim() == "") return
    // this.chat.msg = this.text
    // this.chat.date = new Date()
    // this.chat.msgTo = this.activeContact.firstName
    let data = {
      msgFrom: this.currentUser.firstName,
      msg: this.text,
      msgTo: this.activeContact.firstName,
      date: new Date()
    }
    // let msg = this.chat
    this.chatCollection.push(data)
    this.chatService.sendMessage(data)

    this.text = ''
  }


  ngOnDestroy() {
    if (this.screenSizeWatcher) {
      this.screenSizeWatcher.unsubscribe();
    }
  }

  // updateSidenav() {
  //   var self = this;
  //   setTimeout(() => {
  //     self.isSidenavOpen = !self.isMobile;
  //     self.sideNav.mode = self.isMobile ? 'over' : 'side';
  //   });
  // }
  // chatSideBarInit() {
  //   this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm');
  //   // this.updateSidenav();
  //   this.screenSizeWatcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
  //     this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
  //     // this.updateSidenav();
  //   });
  // }

}
