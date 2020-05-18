//82fca4f67a343b53f39b1ac74e19cce6558aea88

const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB();

app.get('/', function (res, req) {
	req.send('Hello World');
});

app.listen(PORT, () => console.log('Listening at ' + PORT));

