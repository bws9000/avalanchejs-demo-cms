import axios from 'axios';

export class apiService{

    jsonRPCVersion:String;
    avalancheNodeUrl:String;
    id:number;
    port:string;

    constructor(avalancheNodeUrl:string,
                jsonRPCVersion:string) {
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
export class ApiService{
    static create(event: { avalancheNodeUrl: string, jsonRPCVersion: string }){
        return new apiService(event.avalancheNodeUrl,event.jsonRPCVersion);
    }
}
