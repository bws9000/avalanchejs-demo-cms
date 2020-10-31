import axios from 'axios';

export class ApiService{

    jsonRPCVersion: String;
    avalancheNodeUrl: String;
    port: string;

    constructor(avalancheNodeUrl:string,
                jsonRPCVersion:string) {

        this.avalancheNodeUrl = avalancheNodeUrl;
        this.jsonRPCVersion = jsonRPCVersion;
        this.port = "9650"
    }

    getData(endPoint:string,method:string,params:any,id:number){

        let url = 'http://' +
            this.avalancheNodeUrl + ':' +
            this.port + endPoint;

        return axios.post(url,
            {
                "jsonrpc": this.jsonRPCVersion,
                "method": method,
                "params": params,
                "id": id});
    }

}
