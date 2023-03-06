const member = {
        id: 10,
        "e-mail": "byron.fields@reqres.in", // notice double quotes for e-mail. Quotes allows special characters
        first_name: "Byron",
        "last_name": "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
};

numbers = [45, 4, 9, 16, 25];

aString = 'A quick brown fox jumps over the lazy dog.';

// for in returns a key/index from iterable 

for (key in member) {
        console.log(`key: ${key} value: ${member[key]}`);
}


console.log('---------------------------------------------')

for (idx in numbers) {
        console.log(`index: ${idx} value: ${numbers[idx]}`);
}


console.log('---------------------------------------------')

for (idx in aString) {
        console.log(`index: ${idx} value: ${aString[idx]}`);
}