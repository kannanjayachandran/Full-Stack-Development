// middleware function
// express passes the req, res to the middleware function itself.
// we need to always invoke the next middleware function, whenever we use a middleware function.
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(method, url, time);

    //res.send('something');    // if we do not invoke next()

    next();
}

module.exports = logger;


// if we want to write the middleware func in same APP.js, we would write it in the APP.js file and then, we add it in between the route and callback function
// // home route
// app.get('/', logger, (req, res) => {
//     res.send('Home');
// });

// but we normally write it using the use keyword in express.
// This logger module is roughly what the morgan package {morgan('tiny')} is doing.