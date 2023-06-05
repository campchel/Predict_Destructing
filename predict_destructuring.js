// 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
// console.log(randomCar) will be index 0, 'Tesla'
// console.log(otherRandomCar) will be index 1, 'Mercedes'
console.log(randomCar)
console.log(otherRandomCar)

// 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// consol.log(name) is undefined because when the dictionary was called it was called incorrectly
console.log(name);
console.log(otherName);

// 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// console.log(password) is '12345'
// console.log(hashedPassword) is undefined because there is not hashedpassword information
console.log(password);
console.log(hashedPassword);

// 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
// console.log(first == second) is false because 2 does not equal 5
// console.log(first == third) is true because 2 equals 2
console.log(first == second);
console.log(first == third);

// 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
// console.log(key) is 'value'
// console.log(secondKey) is [1,5,1,8,3,3]
// console.log(secondKey[0]) is 1
// console.log(willThisWork) is 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);




