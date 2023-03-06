// Direct assignment 

const guitar = {
	name: 'Ibanez',
	strings: 6,
	pickUp: 'Double Coil',
	pedalSets: function pedals() {
		// body...
		console.log('ElectroHarmoincs ... etc.')
	}
};


const pc = {
	cpu: 'intel i5', 
	cores: 4,
	ram: '16 GB',
	moBo: 'Asus',
	'operating-system': {
		name: 'Debian',
		version: 11, 
		bit: 64
	}  
};


// Direct assignment will point/reference the same object in the RAM

let bassGuitar = guitar;
bassGuitar['strings'] = 7;
console.log(bassGuitar, guitar);
console.log('-----------------------------');

// Shallow Copy using spread notation  


let myGuitar = {
	...guitar
};

myGuitar['name'] = 'Fender';
myGuitar['strings'] = 6;

// only myGuitar name and strings are changed
console.log(guitar, myGuitar);
console.log('-----------------------------');

// Shallow Copy using Object.assign();
let myPC = Object.assign({}, pc);

myPC['cpu'] = 'AMD Ryzen';
console.log(pc, myPC);
console.log('-----------------------------');

myPC['operating-system']['name'] = 'Ubuntu';
myPC['operating-system']['version'] = 20.12;
console.log(pc, myPC);
console.log('-----------------------------');

/*
Explanation: 
myPC and pc refer / point two different objects. But both of them refer to 
a same object operating-system. So, 
- cpu, the primitive data type, is not changed in pc.
- Reference object values for name and version of operating-system is changed 
*/



// Deep Copy  using JSON.stringify();
/*
- Convert guitar to a string 
- Parse it back to JSON object 
- Assign in a new object variable 
Now, newGuitar and guitar refers to two different objects 
Penalty: newGuitar will have no pedals method
*/

let newGuitar = JSON.parse(JSON.stringify(guitar));
console.log(typeof newGuitar);

newGuitar['name'] = 'PRS';
newGuitar['strings'] = 8;
newGuitar['pickUp'] = 'single coil';

console.log(newGuitar, guitar); 

/*
newGuitar.pedalSets(); 
// error TypeError: newGuitar.pedalSets is not a function

console.log(newGuitar.pedalSets);
// undefined
*/

guitar.pedalSets();