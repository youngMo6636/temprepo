//OS Module (Operatingt System Module)
const os = require('os')

//info about current user
const user = os.userInfo()
/* console.log(user) */

// Method returns the system uptime in seconds
// Basicaly howlong the system has been running

const time = os.uptime();
const hours = time / 3600;
const days = hours / 24

console.log(`The Systems Uptime in ${Math.floor(days)} days.`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);