/*
Doc: https://www.w3schools.com/js/js_objects.asp

- JavaScript objects are containers for named values called properties.

*/


const member = {
        id: 10,
        "e-mail": "byron.fields@reqres.in", // notice double quotes for e-mail. Quotes allows special characters
        first_name: "Byron",
        "last_name": "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
};


// access property with dot 
console.log('last name', member.last_name);


// access property with square brackets 

console.log('avatar: ', member['avatar']);

// objects can have functions that are called methods 


const person = {
        firstName : 'Ishtiaque',
        lastName : 'Foysol', 
        age : 30, 
        fullName : function  (sampleParam) {
                console.log('Provided param: ', sampleParam)
                return 'full name ' + this.firstName + " "+ this.lastName
        }, 
        schoolName: 'DCS'
};

fullName = person.fullName('test');
console.log(fullName);

// declare an empty object 

const hello = {};

// assign values 

hello['full-name'] = 'AB Juberee';
hello['mobileNo.'] = '+8801958475841';
hello['age'] = 52;

console.log(hello);