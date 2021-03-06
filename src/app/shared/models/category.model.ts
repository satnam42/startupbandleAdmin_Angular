export class Category {

    _id: string;
    token: string;
    name: string;
    description: String;
    
    constructor(obj?: any) {

        if (!obj) {
            return;
        }
        this._id = obj._id;
        this.token = obj.token;
        this.name = obj.name;
        this.description = obj.description
    }
}