//82fca4f67a343b53f39b1ac74e19cce6558aea88

const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB();

//Init middleware
app.use(express.json({ extender: false }));

app.get('/', function (res, req) {
	req.send('Hello World');
});
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

app.listen(PORT, () => console.log('Listening at ' + PORT));
