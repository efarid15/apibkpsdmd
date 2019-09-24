let express = require('express'),
    fs = require('fs'),
    https = require('https'),
    app = express(),
    port = process.env.PORT || 3333,
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt'),
    controller = require('./controller/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes');
routes(app);

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app)
  .listen(port, function () {
    console.log('BKPSDMD Sulsel API server started on: ' + port)
  })

