//Worker definition and ZMQ Connection
var zmq = require('zmq')

module.exports = {
  dispatcher: function(port, action){
      // socket to talk to clients
    var responder = zmq.socket('rep')

    responder.on('message', function(request) {
      action(request, responder, port)
    })

    responder.bind(`tcp://*:${port}`, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log(`Listening on ${port}`)
      }
    })

    process.on('SIGINT', function() {
      responder.close()
    })
  }
}
