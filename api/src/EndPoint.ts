import {ApiService} from "./ApiService";

//https://docs.avax.network/
// fuji test network
// X Chain

class endPoint{

    api:ApiService
    constructor(avalancheNodeUrl,jsonRPCVersion){
        this.api = new ApiService(avalancheNodeUrl,jsonRPCVersion);
    }

    // ext/info
    infoIsBootStrapped() {
        let p = {"chain": "X"}
        let ep = '/ext/info';
        let m = 'info.isBootstrapped';
        return this.api.getData(ep, m, p)
            .then((r) => {
                return r.data.result.isBootstrapped;
            }).catch((err:any)=>{
                console.log(err);
                return false;
        })
    }

    // ext/bc/X
    avmCreateAddress(params:object){
        let ep = '/ext/bc/X';
        let m = 'avm.createAddress';
        return this.api.getData(ep,m,params)
            .then((r)=>{
                return r;
            }).catch((err:any)=>{
                console.log(err)
                return err
            })
    }

    // ext/keystore
    keystoreCreateUser(params:object) {
        let m = 'keystore.createUser';
        let ep = '/ext/keystore';
        return this.api.getData(ep,m,params)
                        .then((r)=>{
                            return r;
                        }).catch((err:any)=>{
                            return err;
                        })
    }


}
export class EndPoint {
    static create(event: { avalancheNodeUrl: string, jsonRPCVersion: string }) {
        return new endPoint(event.avalancheNodeUrl,event.jsonRPCVersion);
    }
}
