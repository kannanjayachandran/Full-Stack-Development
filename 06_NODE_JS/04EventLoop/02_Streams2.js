const { createReadStream } = require('fs');

file_path = '04NODE\\04EventLoop\\Big.txt';

const stream = createReadStream(file_path);  // 'ascii' we can set up the encoding

stream.on('data', (result) => {
    console.log(`Received ${result.length / 1000} bytes of data\n`);

});

// default buffer is 64kb
// last buffer is the reamaining data
// highWaterMark - control size  { highWaterMark: 80000 }

// The usecase is when we want to send large files or huge amount of data, we could simply chunk up them and send rather than
//  sending the whole big file.