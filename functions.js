"use strict";
function addNumber(x, y) {
    return x + y;
}
addNumber(1, 2);
//  в функции указывается тип вводныз данных и выходного значения
// Анонимные функции
let addNumbers2 = function (x, y) {
    return x + y;
};
console.log(addNumbers2(1, 2));
// можем в выводе не указывать слово фунуция или название функции
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, 2, 3])); //тут
// Стрелочные функции
// Anonymous function
let addNumbers3 = function (x, y) {
    return x + y;
};
// Arrow function
let addNumbers4 = (x, y) => x + y;
function displayAlert(message) {
    alert('The message is ' + message);
}
// console.log(displayAlert(5))
function sumArr(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
console.log(sumArr([1, 2, 3]));
// необязательные параметры в функции
function addNumbers(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 1
// Параметры по умолчанию:
function addNumbers5(x, y = 25) {
    return x + y;
}
addNumbers5(1, 2); // Returns 3
addNumbers5(1); // Returns 26
//  Множество параметров:
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
// Многоточие перед ...restOfNumbers означает что будет создан массив из остальныз параматров переданных в функцию
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
//  Пример необяательного и дефолтного значения 
let addThreeNumbers = (x, y, z) => {
    if (!z) {
        return x + y;
    }
    return x + y + z;
};
console.log(addThreeNumbers(10, 20, 30));
console.log(addThreeNumbers(10, 20));
let subtractThreeNumbers = (x, y, z = 100) => x - y - z;
console.log(subtractThreeNumbers(10, 20)); // returns -110 because 'z' has been assigned the value 100
console.log(subtractThreeNumbers(10, 20, 15));
let plus = (x, y) => (x + y);
let minus = (x, y) => (x - y);
console.log(plus(1, 2));
console.log(minus(1, 2));
let doCalculator = (operation) => {
    if (operation === 'add') {
        return plus;
    }
    else {
        return minus;
    }
};
console.log(doCalculator('add')(1, 2));
//   Что касается TypeScript, эти три утверждения идентичны.
//   let addNumbers: Calculator = (x: number, y: number): number => x + y;
//   let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
//   let addNumbers: Calculator = (num1, num2) => num1 + num2;
