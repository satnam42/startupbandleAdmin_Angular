import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

     data: any= {}

    setOption(option) {
        // console.log('option',option)
        this.data = option;
        // console.log('data',this.data)

        // sessionStorage.setItem('currentUser', JSON.stringify(this.data));
    }
    getOption() {
        // if (this.data) {
            console.log(this.data)
            return this.data
        // } else if (sessionStorage.currentUser) {
        //     return this.data = JSON.parse(sessionStorage.getItem('currentUser'))
        // } 
        // else {
        //     return this.data;
        // }
    }


    constructor() { }
}
