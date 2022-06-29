import { Component, OnInit, ViewChild, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ChatService, Chat, User } from './chat.service';
import { AuthService } from 'app/shared/services/auth.service';
// import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { ApiService } from 'app/shared/services/api.service';
// import { ToastrService } from 'ngx-toastr';
import { WebnotificationService } from 'app/shared/services/webnotification.service';

@Component({
  selector: 'app-chats',
  templateUrl: './app-chats.component.html',
  styleUrls: ['./app-chats.component.css'],
})

export class AppChatsComponent implements OnInit, OnDestroy {
  isMobile;
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
  search;
  constructor(
    private mediaObserver: MediaObserver,
    public chatService: ChatService,
    private authService: AuthService,
    private apiservice: ApiService,
    private notification: WebnotificationService
  ) {
    this.getUsers()
    this.notification.requestPermission();
  }

  notify() {
    let data: Array<any> = [];
    data.push({
      'title': 'Approval',
      'alertContent': 'New messege recived from'
    });
    this.notification.generateNotification(data);
  }


  getUsers() {
    this.apiservice.getUsers().subscribe((res: any) => {
      this.users = res.data
    });
  }

  getOldChat() {
    this.apiservice.getOldChat(this.roomId, this.pageNo, this.pageSize).subscribe((res: any[]) => {
      this.chatCollection = res;
      console.log('chatttt', res);
    });
  }

  trackByFn(index, item) {
    this.selectedIndex = index;
    return index;
  }

  selectedUser(user) {
    this.getRoomId();
    this.getOldChat();
    this.activeContact = user
    let currentRoom = this.currentUser.name + "-" + this.activeContact.firstName;
    let reverseRoom = this.activeContact.firstName + "-" + this.currentUser.name;
    this.chatService.setUser(this.currentUser.name)
    this.chatService.createRomm(currentRoom, reverseRoom)

  }


  // getOldChat

  ngAfterViewInit() {
    // this.getUsers()
  }

  ngOnInit() {
    // this.getOldChat();
    this.currentUser = this.authService.currentUser()
    this.chatSideBarInit();
    //recvice message
    this.chatService.getMessages().subscribe((message: Chat) => {
      if (message.msgFrom !== this.currentUser.name) {
        this.notify()
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

    })
  }
  keyUp() {
    console.log('typing', this.text)
    this.chatService.startTyping()
  }

  sendMessage() {

    if (this.text.trim() == "") return

    let data = {
      msgFrom: this.currentUser.name,
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


  chatSideBarInit() {
    this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm');
    // this.updateSidenav();
    this.screenSizeWatcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
      // this.updateSidenav();
    });
  }
}
