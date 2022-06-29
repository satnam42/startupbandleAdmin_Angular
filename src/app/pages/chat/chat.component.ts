import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSidenav, MatSidenavModule, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
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

// const SOCKET_ENDPOINT = 'http://93.188.167.68:4500';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  isMobile;
  search;
  screenSizeWatcher: Subscription;
  isSidenavOpen: Boolean = true;
  public user: User = new User();
  users
  list: any = [];
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
  chats: any = [];

  // @ViewChild(MatSidenav) public sideNav: MatSidenav;
  collection;
  // message: any = {
  //   msg: '',
  //   msgTo: '',
  //   date: - new Date()
  // };
  // user;


  constructor(
    public chatService: ChatService,
    private authService: AuthService,
    private apiservice: ApiService,
    private toastyService: ToastyService,
    private router: Router,
  ) {
    this.getAdmins()
  }

  getAdmins() {
    this.isLoading = true;
    this.apiservice.getAdmins().subscribe((res: any) => {
      this.list = res.data
      console.log('admin list', this.list)

    });
  }

  getOldChat() {
    this.isLoading = true;
    this.apiservice.getOldChat(this.roomId, this.pageNo, this.pageSize).subscribe((res: any[]) => {
      this.chatCollection = res
      console.log('old chat', res);
    });
  }


  trackByFn(index, item) {
    this.selectedIndex = index;
    return index;
  }

  slectedUser(user) {
    this.activeContact = user
    let currentRoom = this.currentUser.firstName + "-" + this.activeContact.name;
    let reverseRoom = this.activeContact.name + "-" + this.currentUser.firstName;
    this.chatService.setUser(this.currentUser.firstName)
    this.chatService.createRomm(currentRoom, reverseRoom)
    this.getRoomId()
    this.getOldChat()
  }
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
      // this.getOldChat();
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
      msgTo: this.activeContact.name,
      date: new Date()
    }
    // let msg = this.chat

    this.chatCollection.push(data)
    this.chatService.sendMessage(data)

    this.text = ''
  }
  // geMessaget() {
  //   let ms = this.chatService.getMessage()
  //   console.log('ms', ms)
  // }

  ngOnDestroy() {
    if (this.screenSizeWatcher) {
      this.screenSizeWatcher.unsubscribe();
    }
  }
  // changeActiveUser(user) {
  //   this.activeChatUser = user;
  // }
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