//Worker definition and ZMQ Connection
var zmq = require('zmq');

function dispatcher(port, action){
    // socket to talk to clients
  var responder = zmq.socket('rep');

  responder.on('message', function(request) {
    action(request, responder, port);
  });

  responder.bind(`tcp://*:${port}`, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`Listening on ${port}`);
    }
  });

  process.on('SIGINT', function() {
    responder.close();
  });
}

//Actions
function actionPrint(request, responder, port){
  console.log("Received request: [", request.toString(), "]");
  responder.send(`Atendido por el proceso: ${process.pid}, Puerto: ${port}, Received request: [${request.toString()}]`);
}

dispatcher(5555, actionPrint);
dispatcher(5556, actionPrint);
dispatcher(5557, actionPrint);
dispatcher(5558, actionPrint);

//Initialization
