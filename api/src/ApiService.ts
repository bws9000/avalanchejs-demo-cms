<<<<<<< HEAD
// @ts-ignore
import axios from 'axios';

export class ApiService{

    jsonRPCVersion: String;
    avalancheNodeUrl: String;
    id: number;
    port: string;

    constructor(avalancheNodeUrl:string,
                jsonRPCVersion:string) {

=======
import axios from 'axios';

export class apiService{

    jsonRPCVersion:String;
    avalancheNodeUrl:String;
    id:number;
    port:string;

    constructor(avalancheNodeUrl:string,
                jsonRPCVersion:string) {
>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
        this.avalancheNodeUrl = avalancheNodeUrl;
        this.jsonRPCVersion = jsonRPCVersion;
        this.id = 1;
        this.port = "9650"
    }

    getData(endPoint:string,method:string,params:any){
        let url = 'http://' +
            this.avalancheNodeUrl + ':' +
            this.port + endPoint;

        return axios.post(url,
            {
                "jsonrpc": this.jsonRPCVersion,
                "method": method,
                "params": params,
                "id": this.id});
    }

}
<<<<<<< HEAD
=======
export class ApiService{
    static create(event: { avalancheNodeUrl: string, jsonRPCVersion: string }){
        return new apiService(event.avalancheNodeUrl,event.jsonRPCVersion);
    }
}
>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
