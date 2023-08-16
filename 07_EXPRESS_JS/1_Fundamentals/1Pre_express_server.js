const http = require('http');
const { readFileSync } = require('fs');

// getting the file
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)
    // index route
    if (url === '/') {

        // headers
        res.writeHead(200, { 'content-type': 'text/html' });

        // content
        res.end(homePage);
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });

        res.end(`<h3>Error</h3>`)
    }
});

server.listen(5000);

// We can set up a http server using the http module, but almost always we won't. Because for each file or route we have to set
// up separate variables and include them in if-else conditions { like homePage }. This is need for in-server resources like, CSS, JS,
// logo, images, etc. Now imagine modern web pages with tons of such things, hence we use frameworks like Express js.
