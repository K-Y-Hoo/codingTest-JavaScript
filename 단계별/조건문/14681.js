var fs = require('fs');
var input = fs.readFileSync(0).toString().trim().split('\n');
var [x, y] = input

if (x > 0) {
    console.log(y > 0 ? 1 : 4);
} else {
    console.log(y > 0 ? 2 : 3);
}
