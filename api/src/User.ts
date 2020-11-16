class user{
    address:string
    walletAddress:string
    constructor(public username:string,public password:string){
        this.username = username
        this.password = password
    }
    addAddress(addr:string){
        this.address = addr
    }
    getAddress(){
        return this.address
    }
    addWalletAddress(addr:string){
        this.walletAddress = addr
    }
}
export class User {
    static create(event:{username:string,password:string}) {
        return new user(event.username,event.password)
    }
}
