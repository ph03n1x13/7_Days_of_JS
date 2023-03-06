/*
Documentation: https://www.w3schools.com/js/js_let.asp
*/

// let is scoped 

let x = 100.75;
//console.log('x global scope: ', x);

// A sample block scope
{
	let x = 'Hello World';
	//console.log('x local scope 1: ', x);

}


// Another sample block scope

{
	let x = .00000005;
	//console.log('x local scope 2: ', x);

}

//console.log('x global scope Again: ', x);


// x can be Reassigned
x = "I'm reassigned";
//console.log('x after reassignment: ', x);


/*

// TEST_1: Re-declaration Not allowed 

let x = 'Declare me again';

//SyntaxError: Identifier 'x' has already been declared

*/

// -------------------------------------------------------------------------


/*
Cautions: 
- JS concats string + numerics 
- X / 0 is infinity [Confusing]

*/

let a = 10;
let b = 2.50;
let c = '2.50';
let wrongAns = a + c;
let expectedAns = a + b;

console.log("Wrong Answer: a + c === ", wrongAns);
console.log("Type of wrongAns", typeof wrongAns);
// Type of wrongAns string

console.log("Expected Answer: a + b === ", expectedAns);
console.log("Type of expectedAns", typeof expectedAns);
// Type of expectedAns number

console.log("10 divided by Zero", 10 / 0);
// 10 divided by Zero Infinity