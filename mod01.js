"use strict";
// .
// first example
// .
const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    },
};
person.greet();
// .
// first task Mycrosoft Academy
// .
// .
// second task Mycrosoft Academy
// .
let ax = 0; //* Explicitly declares x as a number type
let b = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing it
ax = 1;
z = "one";
let firstname = "Anton";
const sayHello = `Hello, my name is ${firstname}.`;
console.log(sayHello);
// Тип	Предикат
// string	typeof s === "string"
// number	typeof n === "number"
// boolean	typeof b === "boolean"
// undefined	typeof undefined === "undefined"
// function	typeof f === "function"
// array	Array.isArray(a)
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x.concat(y);
    }
    throw new Error("Parameters must be numbers or strings");
}
console.log(add("one", "two")); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
};
let diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
// diceRoll = 7;    //* Invalid
console.log(diceRoll);
