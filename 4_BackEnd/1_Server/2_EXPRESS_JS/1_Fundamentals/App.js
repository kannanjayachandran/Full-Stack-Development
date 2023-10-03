const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static files
app.use(express.static('./public-methods'));

// parse from data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

app.use('./login', auth);

// setting up base route
app.use('/api/people', people)


app.listen(5000, () => console.log('Server listening on port 5000...'));
