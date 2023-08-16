const express = require('express');

const app = express();

// static files and middlewares
app.use(express.static('./public'));


// This is how we can set up separate page req and res 
// home page
app.get('/', (req, res) => {
    res.send('Home');
});

// about page
app.get('/about', (req, res) => {
    res.send("About Page");
});

// for all other situations
app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
});

// common methods
// app.get()
// app.post()
// app.delete()
// app.all()
// app.use()
// app.listen()