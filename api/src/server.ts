import express from "express";
import {EndPoint} from './EndPoint';
import {User} from "./User";

const secureDevServer = false;
const app = express();
const port = 3000;

const user = new Map();
const blockchainIp = process.env.DEV_AVALANCHE_IP;
const api = EndPoint.create({avalancheNodeUrl:blockchainIp,jsonRPCVersion:"2.0"});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/user/wallet/balance',
    (req, res) => {
        let params = req.body.params;
        api.avmGetBalance(params).then((r)=>{
            res.json(r.data);
        }).catch((err)=>{
            console.log(err);
        })
    })

app.post('/api/user/delete',
    (req, res) => {
        let params = req.body.params;
        api.keystoreDeleteUser(params).then((r)=>{
            res.json(r.data);
        }).catch((err)=>{
            console.log(err);
        })
    })

app.post('/api/user/list',
    (req, res) => {
    api.keystoreListUsers().then((r)=>{
        res.json(r.data);
    }).catch((err)=>{
        console.log(err);
    })
})

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

//get default address created when user was created
app.post('/api/user/get/address',
    (req, res) => {
        let params = req.body.params;
        if(user.get(params.username) !== undefined) {
            res.json({address:user.get(params.username).getAddress()});
        }else{
            //no DB yet
            //if you created a user and restarted
            //user Map reinitialized
            res.json({address:'undefined'})
        }
    });


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

if(secureDevServer) {
    const https = require("https"), fs = require("fs");
    const options = {
        key: fs.readFileSync(process.env.DEV_KEY),
        cert: fs.readFileSync(process.env.DEV_CERT)
    };
    app.listen(443, () => {
        console.log(`listening on secure port ${port}`);
    });
    https.createServer(options, app).listen(port);
}else{
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
}
