# Node.js Microservices
It explores the ZeroMQ's usage building microservices working in Linux. <br/>
# Stack <br/>
REST API: [PolkaJS](https://github.com/lukeed/polka) <br/>
Messaque Queue Server: [ZeroMQ](http://zeromq.org/) <br/>
Deploy framework: [PM2](https://pm2.io/) <br/>

> Install zeromq OS package

# Deploy steps: <br/>
> npm install pm2 -g <br/>
> cd $repository_path/microservices-zeromq

> Run "npm install" in ZMQ and API directories.

## Deploy workers:
> pm2 start ZMQ/read_worker.js ZMQ/create_worker.js ZMQ/update_worker.js ZMQ/delete_worker.js

## Deploy Polka REST API
> pm2 start API/index.js
