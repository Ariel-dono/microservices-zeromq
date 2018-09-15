var worker = require('./worker.js')

function actionUpdate(request, responder, port){
  console.log("Received request: [", request.toString(), "]");
  responder.send(`Atendido por el proceso: ${process.pid}, Puerto: ${port}, Received request: [${request.toString()}], Executing update action over user`);
}

worker.dispatcher(5556, actionUpdate);
