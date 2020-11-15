import {
    Avalanche,
    BinTools,
    Buffer,
    BN
} from "avalanche"

let myNetworkID = 12345; //default is 3, we want to override that for our local network
let myBlockchainID = "MxDJikjqLthA2ULct1DpFY5qxPgbVB387"; // The X-Chain blockchainID on this network
let ava = new Avalanche("192.168.99.100", 9650, "http", myNetworkID, myBlockchainID);
let xchain = ava.XChain(); //returns a reference to the X-Chain used by AvalancheJS

let addresscheck = ['X-fuji1gkw5z7qw0fn49xn875uyfd9hhcw9fctddvkdru'];
getUTXOs(addresscheck);

async function getUTXOs(addresscheck)
{

    let utxos = await xchain.getUTXOs(addresscheck);
    console.log("Checking utxos: ", utxos.utxos);

    let sendAmount = new BN(100)
    let assetid = 'U8iRqJoiJm8xZHAacmvYyZVwqQx6uDNtQeP3CQ6fcgQk3JqnK'; //avaSerialized string
    let friendsAddress = "X-fuji1acx2e6drpwkyuy5dtfqxt65vygtxd4xse60lwk";
    let unsignedTx = await xchain.buildBaseTx(utxos.utxos, sendAmount, friendsAddress, addresscheck, addresscheck, []);

}
