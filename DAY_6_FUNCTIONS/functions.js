function isPrime (number) {
	// body... 
	let prime = true;
	if (number === 1 || number === 0) {
		return prime = false, `${number} is not a prime?`;
	}

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return prime = false, `${number} is not a prime`;
		}

	}
	return prime, `${number} is a prime`;
}

/*
for (let i = 0; i < 20; i++) {
	console.log(isPrime(i));
}
*/

function sum (a, b) {
	// body... 
	return parseInt(a) + parseInt(b); 
}

let res = sum(10 , '200');
console.log(res);