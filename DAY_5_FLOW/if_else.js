
numbers = [];
for (let i = 0; i < 20; i++) {
	numbers[i] = i ;
}


for (let i = 0; i < 20; i++) {
	
	if (i === 0) {
		// statement
		console.log(`${i} is neither Even nor Odd`);
	}

	else if (i % 2 === 0) {
		// statement
		console.log(`${i} is Even`);
	} else {
		// statement
		console.log(`${i} is Odd`);
	}
}