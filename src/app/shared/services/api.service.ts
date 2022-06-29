import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Roles } from '../models/roles.model';
import { Category } from '../models/category.model';
import { Tag } from '../models/tag.model';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { id } from 'date-fns/locale';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { AppLoaderService } from './app-loader/app-loader.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    root = environment.apiUrl.reports;
    userResponse: any;
    usersData: any;
    categoryResponse: any;
    tagResponse: any;
    token: string = null
    isLoading: boolean;
    userToken: string;



    constructor(
        private http: HttpClient,
        private toast: ToastrService,
        private route: Router,
        private auth: AuthService,
        private loader: AppLoaderService) {


    }








    // --------------------access token------------------------
    getHeaders() {
        this.token = localStorage.getItem('token');
        // console.log('apiToken',this.token)
        let header
        if (this.token != '') {
            header = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'x-access-token': this.token
                })
            }
        } else {
            console.log('token not found')
        }
        return header;

    }
    // header = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'x-access-token': this.token
    //     })

    // }; 

    login(model): Observable<User> {
        const subject = new Subject<User>();
        this.http.post(`${this.root}/admins/login`, model).subscribe((responseData: any) => {
            subject.next(responseData);
            (error) => {
                subject.next(error.error);
                if (error.status === 401) {
                    // this.toast.error(error)
                    console.log('errr', error)
                    this.auth.logout()
                }
            }
        });


        return subject.asObservable();
    }






    addAdmins(data): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.post(`${this.root}/admins/create`, data, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.toast.success(responseData.message)
                this.route.navigate(['tables/filter']);
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    addUsers(data): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.post(`${this.root}/users/create`, data, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.toast.success(responseData.message)
                this.route.navigate(['tables/user']);
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    getAdmins(): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.get(`${this.root}/admins/getAdmins`, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.toast.success(responseData.message)
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    getUserById(id): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.get(`${this.root}/users/getById/${id}`, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData.items);
                this.toast.success(responseData.message)
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    getUsers(): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.get(`${this.root}/users/getUsers`, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.toast.success(responseData.message)
            }
        },
            (error) => {
                this.loader.close();
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    getCurrentUser(id): Observable<User> {
        const subject = new Subject<User>();
        this.loader.open();
        this.http.get(`${this.root}/users/currentUser/${id}`, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData.data);

            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    addRoles(data): Observable<Roles[]> {
        const subject = new Subject<Roles[]>();
        this.loader.open();
        this.http.post(`${this.root}/roles/create`, data, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.route.navigate(['tables/permissions']);
                this.toast.success(responseData.message)
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }



    getRoles(): Observable<Roles[]> {
        const subject = new Subject<Roles[]>();
        this.http.get(`${this.root}/roles/getAll`).subscribe((response: any) => {
            subject.next(response.data);
        }, (error) => {
            subject.next(error.error);

            if (error.status === 401) {
                // this.toast.error(error)
                console.log('errr', error)
                this.auth.logout()
            }

        });
        return subject.asObservable();
    }


    uploadUserImage(model): Observable<any> {
        const subject = new Subject<any>();
        this.loader.open();
        this.http.post(`${this.root}/images/uploadSingle`, model, {
            headers: null
        }).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.toast.success(responseData.data)
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    uploadMultipleImages(model): Observable<any> {
        const subject = new Subject<any>();
        this.loader.open();
        this.http.post(`${this.root}/images/uploadMultiple`, model, {
            headers: null
        }).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.toast.success(responseData.data)
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    deleteUser(id): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.delete(`${this.root}/users/delete/${id}`, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                console.log(responseData)
                this.toast.success(responseData.data)
                this.route.navigateByUrl('/tables', { skipLocationChange: true }).then(() => {
                    this.route.navigate(['tables/user']);
                    localStorage.removeItem('userToken')
                })
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }

    // --------------------------------------------------------------------   

    updateUser(id, data): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.put(`${this.root}/users/update/${id}`, data, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            subject.next(responseData);
        },
            (error) => {
                subject.next(error.error);
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    adminResetPassword(id, model): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.put(`${this.root}/admins/changePassword/${id}`, model, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.toast.success(responseData.message)
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }

    resetUserPassword(id, model): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.put(`${this.root}/users/changePassword/${id}`, model, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                this.toast.success(responseData.message)
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    updateAdmin(id, data): Observable<User[]> {
        const subject = new Subject<User[]>();
        this.loader.open();
        this.http.put(`${this.root}/admins/update/${id}`, data, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            subject.next(responseData);
            this.route.navigate(['tables/filter']);
        },
            (error) => {
                subject.next(error.error);
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }



    getOldChat(_id, pageNo, pageSize): Observable<any[]> {
        const subject = new Subject<any[]>();
        // this.loader.open();
        this.http.get(`${this.root}/conversations/getOldChat?room_id=${_id}&pageNo=${pageNo}&pageSize=${pageSize}`, this.getHeaders()).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData.items);
                //  this.toast.success(responseData.message)
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.loader.close();
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }


    removeImage(id, imageId, image): Observable<any> {
        const subject = new Subject<any>();
        this.loader.open();
        this.http.put(`${this.root}/images/remove/?id=${id}&imageId=${imageId}&image=${image}`, {
            headers: null
        }).subscribe((responseData: any) => {
            this.loader.close();
            if (responseData.isSuccess === true) {
                subject.next(responseData);
                console.log(responseData.data)
                this.toast.success(responseData.data)
                this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.route.navigate(['profile/settings', id]);
                })
            }
        },
            (error) => {
                subject.next(error.error);
                this.toast.error(error.error.error)
                console.log('errr', error.error)
                this.loader.close();
                if (error.status === 401) {
                    this.toast.error(error.error)
                    console.log('errr', error.error)
                    this.auth.logout()
                }
            }

        );
        return subject.asObservable();
    }

    searchUser(key): Observable<User> {
        const subject = new Subject<User>();
        console.log('key', key)
        this.http.get(`${this.root}/users/search?name=${key}`, this.getHeaders()).subscribe((responseData: any) => {

            subject.next(responseData.data);
        }, (error) => {
            subject.next(error.error);

        });

        return subject.asObservable();
    }

}

