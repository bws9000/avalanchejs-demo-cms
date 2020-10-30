import express from "express";
<<<<<<< HEAD
import {EndPoint} from './EndPoint';
=======
import {ApiService} from "./ApiService";
>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
import {User} from "./User";

const app = express();
const port = 3000;
const user = new Map();
const blockchainIp = process.env.DEV_AVALANCHE_IP;
<<<<<<< HEAD
const api = EndPoint.create({avalancheNodeUrl:blockchainIp,jsonRPCVersion:"2.0"});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/user/create',
    (req, res) => {
    let params = req.body.params;
        api.infoIsBootStrapped()
            .then((bootStrapped: boolean)=>{
                if(bootStrapped){
                    api.keystoreCreateUser(params)
                        .then((r)=>{
                        if(r.data.error){
                            res.json(r.data);
                        }else{
                            //user created
                            user.set(params.username,
                                User.create({username:params.username,
                                    password:params.password}))

                            //create address while we're here
                            api.avmCreateAddress({username:params.username,
                                password:params.password}).then((r)=>{
                                    if(r) {
                                        let addr = r.data.result.address;
                                        user.get(params.username).addAddress(addr);
                                        console.log(user.get(params.username));
                                    }else{
                                        console.log('error creating address');
                                    }
                            })
                            res.json(r.data);
                        }
                    })
                }else{
                    console.log('/api/user/create: not bootstrapped');
                }
            }).catch((e)=>{console.log(e)})
})

const testCreateUser = () => {
    api.infoIsBootStrapped()
        .then((bootStrapped: boolean)=>{
            if(bootStrapped){
                api.keystoreCreateUser({
                    username:'hxhahdHHHzz',
                    password:'xhGGD&*(x_i!'
                }).then((r)=>{
                    console.log(r);
                })
            }
        }).catch((e)=>{console.log(e)})
}
=======
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
>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
