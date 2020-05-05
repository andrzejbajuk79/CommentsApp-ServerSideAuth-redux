const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB Seetup
mongoose.connect(
 'mongodb://localhost:auth/auth',
 {useNewUrlParser: true, useUnifiedTopology: true},
 () => console.log('Połaczono z bazą danych')
);

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('port is listening at port:', port);
