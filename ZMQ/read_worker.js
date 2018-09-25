var worker = require('./worker.js')

function actionPrint(request, responder, port){
  console.log("Received request: [", request.toString(), "]")
  responder.send(`Atendido por el proceso: ${process.pid}, Puerto: ${port}, Received request: [${request.toString()}]`)
}

worker.dispatcher(5555, actionPrint)
