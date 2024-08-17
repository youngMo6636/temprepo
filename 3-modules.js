//Modules

const names = require('./4-names.js');
const sayHi = require('./5-utility.js');
const { item } = require('./6-alternative-export.js');
const data = require('./6-alternative-export.js');
require('./7-mindGranade.js');
console.log(names);
console.log(data);

/* sayHi.sayHi(names.john);
sayHi.sayHi(names.moses);
sayHi.sayHi(names.peter); 

sayHi.printList(item[1]) */