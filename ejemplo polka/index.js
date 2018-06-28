const polka = require('polka');
var zmq = require('zmq');

const app = polka();

// ZMQ Connection
console.log("Connecting to zmq server…");

function getConnection(port){
  let requester = zmq.socket('req');
  requester.connect(`tcp://localhost:${port}`);

  requester.on("message", function(reply) {
    console.log(reply.toString());
  });

  return requester;
}

//Pool connections
getter = getConnection(5555);
updater = getConnection(5556);
maker = getConnection(5557);
deleter = getConnection(5558);

// Actions
function response(requester, res, message){
  requester.send(message);
  res.end(message);
}

//Rest Definition
app.get('/', (req, res) => {
  response(getter, res, `Client ${process.pid}: Polka Rest API`);
});

app.get('/users', (req, res) => {
  response(getter, res, `Client ${process.pid}: Get all Users!`);
});

app.post('/users/:id', (req, res) => {
  response(getter, res, `Client ${process.pid}: Retrieve data of User ${req.params.id}`);
});

app.put('/users/:id', (req, res) => {
  response(maker, res, `Client ${process.pid}: Create User with ID of ${req.params.id}`);
});

app.patch('/users/:id', (req, res) => {
  response(updater, res, `Client ${process.pid}: Update data of User ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
  response(deleter, res, `Client ${process.pid}: Delete data of User ${req.params.id}`);
});

//Server initialization
app.listen(4200).then(_ => {
    console.log(`> Running on localhost:4200`);
});
