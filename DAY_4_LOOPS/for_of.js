/*
Reading: 
What is the difference between ( for... in ) and ( for... of ) statements?
https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements

*/

numbers = [45, 4, 9, 16, 25];


// for of returns the values of an iterable

for (val of numbers) {
        console.log(`Value: ${val}`);
}