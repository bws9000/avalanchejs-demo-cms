class user{
<<<<<<< HEAD
    address:string;
=======

    address:string;

>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
    constructor(public username:string,public password:string){
        this.username = username;
        this.password = password;
    }
<<<<<<< HEAD
    addAddress(addr:string){
        this.address = addr;
    }
}
export class User {
    static create(event:{username:string,password:string}) {
=======

    addAddress(addr:string){
        this.address = addr;
    }

}
export class User {
    static create(event: { username: string,password: string }) {
>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
        return new user(event.username,event.password);
    }
}
