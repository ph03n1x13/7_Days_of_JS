/* 
Documentation: https://www.w3schools.com/js/js_arrays.asp
*/
// JS arrays are declreed with const


const myArray = [];

myArray.push('A'); 
myArray.push('B'); 
myArray.push('1');
myArray.push('2'); 

/*
console.log(`After Push: ${myArray}`); 
console.log("Sort the array: ", myArray.sort()) 
*/
myArray.pop(); // pop the last item out 
//myArray.pop();
//myArray.pop();

console.log(`After Pop: `,  myArray);


const myArray2 = [];

let arraLen = myArray2.length;

console.log('Before myArray2 length ', arraLen);

myArray2[0] = Date.now();
myArray2[1] = 'A string';
myArray2[2] = 2023304;
myArray2[3] = {a: 'H2O', b: 123};
// put multiple data types in an array index 
myArray2[4] = ['A', 1, 1.23, {c: 'Foo', 'e-mail': 'hello@gmail.com'}];
arraLen = myArray2.length;

for (let i = 0; i < arraLen; i++) {
	console.log(myArray2[i]);
}
console.log('After myArray2 length ', arraLen);