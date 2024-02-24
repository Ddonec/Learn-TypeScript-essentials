// .
// first example
// .

interface Person {
   name: string;
   age: number;
   greet: () => void;
}
const person: Person = {
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
let ax: number = 0; //* Explicitly declares x as a number type
let b = 1; //* Implicitly declares y as a number type
let z; //* Declares z without initializing it
ax = 1;
z = "one";

let firstname: string = "Anton";
const sayHello: string = `Hello, my name is ${firstname}.`;
console.log(sayHello);

// Тип	Предикат
// string	typeof s === "string"
// number	typeof n === "number"
// boolean	typeof b === "boolean"
// undefined	typeof undefined === "undefined"
// function	typeof f === "function"
// array	Array.isArray(a)

let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid

function add(x: number | string, y: number | string) {
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
// console.log(add('one', 2));      //* Returns error

interface Employee {
   employeeID: number;
   age: number;
}
interface Manager {
   stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
   employeeID: 12345,
   age: 34,
   stockPlan: true,
};

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
// diceRoll = 7;    //* Invalid


console.log(diceRoll)