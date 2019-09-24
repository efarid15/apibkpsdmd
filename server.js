let express = require('express'),
    //fs = require('fs'),
    //https = require('https'),
    app = express(),
    port = process.env.PORT || 3333,
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt'),
    controller = require('./controller/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, x-access-token')
  if (req.method === 'OPTIONS') {
      res.sendStatus(200)
  }
  else {
      next()
  }
})

let routes = require('./routes');
routes(app);

app.listen(port);
console.log('BKPSDMD Sulsel API server started on: ' + port)

/*https.createServer({
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.cert')
  }, app)
  .listen(port, function () {
    console.log('BKPSDMD Sulsel API server started on: ' + port)
  })*/

