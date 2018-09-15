var worker = require('./worker.js')

function actionCreate(request, responder, port){
  console.log("Received request: [", request.toString(), "]");
  responder.send(`Atendido por el proceso: ${process.pid}, Puerto: ${port}, Received request: [${request.toString()}], Executing create action over user`);
}

worker.dispatcher(5557, actionCreate);
