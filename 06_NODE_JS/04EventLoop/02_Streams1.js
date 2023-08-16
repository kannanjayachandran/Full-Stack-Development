/*
        Streams
    When we have to handle streaming data, we can use streams. Streams are like channels where data flows through. 
    We can read data from a stream, write data to a stream or both. There are 4 types of streams in node.
        * Readable : Can only read data from a stream.
        * Writable : Can only write data to a stream.
        * Duplex : Can read and write data to a stream.
        * Transform : Can read and write data to a stream and can modify the data while it is being read or written.

    This is somewhat an advanced topic, also we wouldn't be implementing this from scratch often.

    The whole notion of Streams comes into picture when we are dealing with a pretty huge file.
        1. We consume a large chunk of memory
        2. We may eventually run out of mem and throw an error. 
*/

// let us create a big file
const { writeFileSync } = require('fs');

file_path = '04NODE\\04EventLoop\\Big.txt'

const arr = ["Big ", "text ", "file ", "one ", "two "]
for (let i = 0; i < 10000; i++) {
    writeFileSync(file_path, `${arr[Math.floor(Math.random() * arr.length)]} ${i} \n`, { flag: 'a' });
}

// random() : return a number between 0 and 1