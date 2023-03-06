/* Three types of for loop 
- Conventional 
- For IN 
- For OF
*/


const myArray = [
	10,
	'Apple',
	.0005, 
	'Hello ' + 'World', 
	123456789
	];



// Conventional Loop

let arrayLen = myArray.length;


for (let i = 0; i < arrayLen; i++) {
	console.log(i, myArray[i]);
}

console.log('-----------------------------------------')

// JS style 

for (let i = 0, len = myArray.length; i < len; i++) {
	console.log(i, myArray[i]);
}