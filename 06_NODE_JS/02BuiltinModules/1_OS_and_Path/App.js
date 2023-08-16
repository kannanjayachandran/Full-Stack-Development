// common js syntax
const os = require('os');               // taking everything os module has to offer
const { log } = require('console');     // destructuring log function only from console module

// ES syntax
// import os from 'os';            
// import { log } from 'console';    

// info about current user
const currUser = os.userInfo();
log('Current user info:', currUser);

// system uptime in seconds
log(`\nSystem up time is ${os.uptime()} seconds.\n`);

// os info as a object
const currOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

log(currOs);

log("Cpu information:", os.cpus());

log(os.homedir());

log(os.version());