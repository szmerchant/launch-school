let rlSync = require('readline-sync');

let name = rlSync.question("What's your name?\n"); // needed double quotes because of '

console.log(`Good Morning, ${name}!`);