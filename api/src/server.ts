import express from "express";
import {ApiService} from "./ApiService";
import {User} from "./User";

const app = express();
const port = 3000;
const user = new Map();
const blockchainIp = process.env.DEV_AVALANCHE_IP;
const API = ApiService.create({avalancheNodeUrl:blockchainIp,jsonRPCVersion:"2.0"});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/user/create', (req, res) => {

    let endPoint = req.body.endPoint;
    let method = req.body.method;
    let params = req.body.params;

    if(method === 'keystore.createUser') {
        API.getData('/ext/info',
            'info.isBootstrapped',{"chain":"X"})
            .then((r)=>{
                if(r.data.result.isBootstrapped){
                    API.getData(endPoint,method,params)
                        .then((r)=>{

                            if(r.data.error){
                                console.log(r.data.error);
                                res.json(r.data.error);
                            }else{

                                user.set(params.username,
                                    User.create({username:params.username, password:params.password}))

                                /* add address and associate to user since we're here */
                                API.getData(
                                    '/ext/bc/X',
                                    'avm.createAddress',
                                    {username:params.username,
                                        password:params.password}
                                ).then((add_address_api_response)=>{

                                       let addr = add_address_api_response.data.result.address
                                       user.get(params.username).addAddress(addr);
                                       console.log(user.get(params.username));

                                }).catch((err: any)=>{
                                       console.log(err);
                                })

                                res.json(r.data);//response from create user
                            }

                        }).catch((err: any)=>{
                            res.json(err);
                            console.log(err);
                    })
                }else{
                    res.json({'error':'not bootstrapped'})
                }

            }).catch((err: any)=>{
            console.log(err);
        })

    }else{
        res.json({'error':'not valid method'})
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
