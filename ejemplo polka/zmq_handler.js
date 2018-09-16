var zmq = require('zmq');

// ZMQ Connection
console.log("Connecting to zmq server…");

module.exports = {
    getConnection: function(port){
        let requester = zmq.socket('req');
        requester.connect(`tcp://localhost:${port}`);

        requester.on("message", function(reply) {
            console.log(reply.toString());
        });

        return requester;
    }
}