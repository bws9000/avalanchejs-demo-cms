# Avalanche API App Bootstrap
### With Magic User Authentication [Magic.link](https://magic.link)
Install your node via docker [install instructions here.](https://github.com/ava-labs/avalanchego)

# First Step ( get your node running)
### If you're on a Windows Machine
* Install docker
* Get latest golang image, then run...
````
 > docker run -ti -p 9650:9650 -p 9651:9651 golang:latest  
 > go get -v -d github.com/ava-labs/avalanchego  
 > cd src/github.com/ava-labs/avalanchego  
 > ./scripts/build.sh  
 > ./build/avalanchego --http-host=0.0.0.0 --network-id=fuji  
````
* Now you've got a node running locally at 192.168.99.100
* Wait until the node bootstraps completely.Take note of this line...
````
* > Set node's ID to L7e2Y32KzbM5LvP6FuDnCaV6GjeBxiSr7
* That is your nodes ID
````

### Start API service
````
* cd avalanchejs-demo-cms/api
* npm run install
* .env
* npm start
````

### Start Client App
````
* Open new console window
* cd avalanchejs-demo-cms/app
* npm run install
* npm run serve
````

If you run into trouble email me : snyder.burt@gmail.com




