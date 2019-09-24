let express = require('express'),
    app = express(),
    port = process.env.PORT || 3333,
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt'),
    controller = require('./controller/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes');
routes(app);

app.listen(port);
console.log('BKPSDMD Sulsel RESTful API server started on: ' + port);