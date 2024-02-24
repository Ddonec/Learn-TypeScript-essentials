"use strict";
// В этом примере функция getArray переписывается с использованием универсальных шаблонов.
// Теперь она может принимать любой тип, указанный при вызове функции.
// Тип записывается через < тип >
function getArray(items) {
    return new Array().concat(items);
}
// Пример использования
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25); // OK
// numberArray.push("This is not a number"); // Generates a compile time type check error
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
// stringArray.push(30); // Generates a compile time type check error
// Использование нескольких переменных типа
// Тип записывается через < тип1, тип2, ... >
function identity(value, message) {
    console.log(message);
    return value;
}
// Пример использования
let returnNumber = identity(100, "Hello!");
let returnString = identity("100", "Hola!");
let returnBoolean = identity(true, "Bonjour!");
returnNumber = returnNumber * 100; // OK
function identity2(value, message) {
    let result = value;
    console.log(message);
    return result;
}
function identity3(value, message) {
    // Return type is inferred
    let result = "";
    let typeValue = typeof value;
    if (typeof value === "number") {
        // Is it a number?
        result = value + value; // OK
    }
    else if (typeof value === "string") {
        // Is it a string?
        result = value + value; // OK
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
let numberValue = identity3(100, "wake up!");
let stringValue = identity3("100", "Hello");
console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
let returnNumber2 = {
    value: 25,
    message: "Hello!",
};
let returnString2 = {
    value: "Hello!",
    message: 25,
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, "Hello!"); // OK
class processIdentity3 {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor3 = new processIdentity3(100, "Hello");
processor3.process(); // Displays 'Hello'
// processor.value = '100';       // Type check error
// Объявление универсального класса
class processIdentityUnif {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processorUnif = new processIdentityUnif(100, "Hello");
processorUnif.getIdentity(); // Displays 'Hello'
// Реализация дженериков с польщовательскими классами и типами
class Carcar {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCarcar extends Carcar {
    constructor() {
        super(...arguments);
        this.make = 'Electric Car';
        this.doors = 4;
    }
}
class Truck extends Carcar {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myElectricCar = new ElectricCarcar;
accelerate(myElectricCar);
let myTruck = new Truck;
accelerate(myTruck);
