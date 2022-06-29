import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { ApiService } from './api.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {  
    root = environment.apiUrl.reports;
    // users: IApi<User>;
 
    private _user: User;

    private _currentUserSubject = new Subject<User>()
    userChanges = this._currentUserSubject.asObservable()

    constructor(
        private http: HttpClient,
        private route: Router,
        private store: LocalStorageService,
       
    ) {
        // this.users = new GenericApi(this.root, 'users', this.http)
    }

    private setUser(user: User) {
        if (user) {
            // this.store.setItem('userId', user._id);
            this.store.setObject('userData', user);
            this.store.setItem('token', user.token);
        } else {
            this.store.clear();
        }
        this._user = user;
        this._currentUserSubject.next(user);
    }

    currentUser(): User {
        // if (this._user) {
        //   this._user = this.store.getObject('userData') as User;

        //   return this._user
        // }

        this._user = this.store.getObject('userData') as User;

        return this._user;
    }

    login(model): Observable<User> {
        const subject = new Subject<User>();
        this.http.post(`${this.root}/admins/login`, model).subscribe((responseData: any) => {
            this.setUser(responseData.data)
            subject.next(responseData);
        }, (error) => {
            subject.next(error.error);

        });

        return subject.asObservable();
    }
    // login(model): Observable<User[]> {
    //     const subject = new Subject<User[]>();

    //     this.http.post(`${this.root}/users/login`, model, { headers: null }).subscribe((responseData) => {
    //         if (responseData.status !== 200) {
    //             throw new Error('This request has failed ' + responseData.status);
    //         }
    //         const dataModel = responseData.json();
    //         if (!dataModel.isSuccess) {
    //             if (responseData.status === 200) {
    //                 this.toasty.error(dataModel.error);
    //                 throw new Error(dataModel.code || dataModel.message || 'failed');
    //             } else {
    //                 throw new Error(responseData.status + '');
    //             }
    //         }
    //         this.setUser(dataModel.data)
    //         subject.next(dataModel.data);
    //     },
    //         (responseData) => {
    //             const dataModel = responseData.json();
    //             this.toasty.error(dataModel.error);
    //             console.log('errrrrrrrr', dataModel.error)
    //             // subject.next(dataModel.error);

    //         });

    //     return subject.asObservable();

    // }

    //   const subject = new Subject<User>();
    //   this.users.post(model, 'login').subscribe(user => {
    //     console.log(user)
    //     
    //     subject.next(user);
    //   }, err => {
    //     this.toasty.error(err.message);
    //     subject.error(err)
    //   });
    //   return subject.asObservable();
    // }

    logout() {
        localStorage.removeItem('userData')
        localStorage.removeItem('token');
        this.route.navigate(['/sessions/signin']);
        this.setUser(null)
    }
}
