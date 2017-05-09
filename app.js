var sum = require('./operations/sum')
var multiplication = require('./operations/multiplication')
var rest = require('./operations/rest')
var division = require('./operations/division')
var moment = require("moment")

console.log(moment().format('LLLL')) 	// cmder:"npm install moment"
console.log("The sum of 3 + 7 is " + sum(3, 7))
console.log("The multiplication of 3 * 7 is " + multiplication(3, 7))
console.log("The rest of 3 - 7 is " + rest(3, 7))
console.log("The division of 3 / 7 is " + division(3, 7))