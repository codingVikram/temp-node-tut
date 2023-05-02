const { isUtf8 } = require('buffer');
const {readFileSync, writeFileSync} = require('fs');
console.log('start');


// the above is destructre method of the below: ES6 syntax
// const fs = require('fs');
// fs.readFileSync()

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'})

console.log('done with this task');
console.log('starting the next one');
