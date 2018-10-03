# Microservices on Node.js using zeromq facilities
It explores the ZeroMQ's usage on building microservices. <br/>
# Stack <br/>
REST API: PolkaJS and ZMQ Interaction <br/>
Process: Node.JS Processes and ZMQ interaction <br/>
Messaque Queue - Sockets Service: ZeroMQ <br/>
<br/>
PolkaJS: https://github.com/lukeed/polka <br/>
ZeroMQ: http://zeromq.org/ <br/>
Interesting and useful resource: https://pm2.io/doc/en/runtime/overview/?utm_source=pm2&utm_medium=website&utm_campaign=rebranding

# Deploy steps: <br/>
> npm install pm2 -g <br/>
> cd $repository-path/microservices-zeromq

## Deploy workers:
> pm2 start ZMQ/read_worker.js ZMQ/create_worker.js ZMQ/update_worker.js ZMQ/delete_worker.js

## Deploy Polka REST API
> pm2 start API/index.js
