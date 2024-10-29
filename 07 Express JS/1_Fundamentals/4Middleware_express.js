const express = require('express');
const logger = require('./4middleware_logger');
const authorize = require('./4middleware_logger1');

const app = express();
app.use([logger, authorize])

// home route
app.get('/', (req, res) => {
    res.send('Home');
});

// about route
app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(5000, () => console.log('Server listening on port 5000...'));