// First exercise, not linked to app.js in this moment

function sum (a, b) {
	console.log( "The sum of a + b is " + (a + b) )
}

function multiplication (a, b) {
	console.log( "The multiplication of a * b is " + (a * b) )
}

module.exports.sum = sum
module.exports.multiplication = multiplication

/* 

Or like this:
module.exports = {
	sum: sum,
	multiplication: multiplication
}

*/