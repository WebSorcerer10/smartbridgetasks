let age = 25;
let isAdult = age >= 18;

console.log(isAdult);

//task 2
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

//task 3
let n = 11; 
let result;
if((n%2)==0){
    result = "Even";
}
else{
    result = "Odd";
}

console.log(`The number ${n} is ${result}.`);

//task 4
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log(numbers);

function square(num) {
    return num * num;
}
console.log(square(11));
console.log(square(8));