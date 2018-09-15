var worker = require('./worker.js')

function actionDelete(request, responder, port){
  console.log("Received request: [", request.toString(), "]");
  responder.send(`Atendido por el proceso: ${process.pid}, Puerto: ${port}, Received request: [${request.toString()}], Executing delete action over user`);
}

worker.dispatcher(5558, actionDelete);
