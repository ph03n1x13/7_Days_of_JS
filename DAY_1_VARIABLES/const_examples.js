/*
Documentation: https://www.w3schools.com/js/js_const.asp

const defines a constant reference to a value. 
So, a const type variable has the following features 

	- Can NOT be re-declared 
	- Can NOT be re-assigned 
	- Has Block Scope
	- Must be assigned a value when declared 

Due to these properties, arrays and objects are generally const type.  
*/


const PI = 3.1415926;

console.log('Value of PI = ', PI);


/*
// can't be re-declared 

const PI = 'Three point one four one';

// SyntaxError: Identifier 'PI' has already been declared
*/



/*
// can't be re-assigned 

PI = 'Three point one four one';

// TypeError: Assignment to constant variable.

*/

// block scope 

{
	const PI = ['Raspberry PI', 20230304, 4.1];
	PI[3] = 'raspbian';
	console.log('Block 1->  PI is ', PI);
}


// block scope 

{
	const PI = {
		name: 'raspberry pi',
		'OS-name': 'raspbian',
		releaseDate : 20230304,
		version: 4.1
	}
	console.log('Block 2-> PI is ', PI);
}

console.log('PI in global scope ', PI);