# Node.js Microservices
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAriel-dono%2Fmicroservices-zeromq.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FAriel-dono%2Fmicroservices-zeromq?ref=badge_shield)

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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAriel-dono%2Fmicroservices-zeromq.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FAriel-dono%2Fmicroservices-zeromq?ref=badge_large)