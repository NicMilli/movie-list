const express = require('express');
const router = require('./routes.js')
const app = express();
const PORT = process.env.PORT || 3000;

module.exports.app = app;

app.set('port',PORT);

var morgan = require('morgan');
var cors = require('cors');

app.use('/', express.static('client/dist'));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})