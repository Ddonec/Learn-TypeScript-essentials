// В этом примере функция getArray переписывается с использованием универсальных шаблонов.
// Теперь она может принимать любой тип, указанный при вызове функции.
// Тип записывается через < тип >
function getArray<T>(items: T[]): T[] {
   return new Array<T>().concat(items);
}

// Пример использования

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
// numberArray.push("This is not a number"); // Generates a compile time type check error

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
// stringArray.push(30); // Generates a compile time type check error

// Использование нескольких переменных типа
// Тип записывается через < тип1, тип2, ... >

function identity<T, U>(value: T, message: U): T {
   console.log(message);
   return value;
}

// Пример использования

let returnNumber = identity<number, string>(100, "Hello!");
let returnString = identity<string, string>("100", "Hola!");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");

returnNumber = returnNumber * 100; // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

// Использование универсальных ограничений для ограничения типов

type ValidTypes = string | number;

function identity2<T extends ValidTypes, U>(value: T, message: U): T {
   let result: T = value;
   console.log(message);
   return result;
}

function identity3<T extends ValidTypes, U>(value: T, message: U) {
   // Return type is inferred
   let result: ValidTypes = "";
   let typeValue: string = typeof value;

   if (typeof value === "number") {
      // Is it a number?
      result = value + value; // OK
   } else if (typeof value === "string") {
      // Is it a string?
      result = value + value; // OK
   }

   console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

   return result;
}

let numberValue = identity3<number, string>(100, "wake up!");
let stringValue = identity3<string, string>("100", "Hello");

console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100

// Реализация универсальных шаблонов с интерфейсами и классами

interface Identity<T, U> {
   value: T;
   message: U;
}

let returnNumber2: Identity<number, string> = {
   value: 25,
   message: "Hello!",
};
let returnString2: Identity<string, number> = {
   value: "Hello!",
   message: 25,
};

// Объявление универсального интерфейса как типа функции

interface ProcessIdentity<T, U> {
   (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
   console.log(message);
   return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, "Hello!"); // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

// Объявление универсального интерфейса как типа класса

interface ProcessIdentityClass<T, U> {
   value: T;
   message: U;
   process(): T;
}

class processIdentity3<X, Y> implements ProcessIdentityClass<X, Y> {
   value: X;
   message: Y;
   constructor(val: X, msg: Y) {
      this.value = val;
      this.message = msg;
   }
   process(): X {
      console.log(this.message);
      return this.value;
   }
}

let processor3 = new processIdentity3<number, string>(100, "Hello");
processor3.process(); // Displays 'Hello'
// processor.value = '100';       // Type check error

// Объявление универсального класса

class processIdentityUnif<T, U> {
   private _value: T;
   private _message: U;
   constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
   }
   getIdentity(): T {
      console.log(this._message);
      return this._value;
   }
}
let processorUnif = new processIdentityUnif<number, string>(100, "Hello");
processorUnif.getIdentity(); // Displays 'Hello'


// Реализация дженериков с польщовательскими классами и типами

class Carcar {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCarcar extends Carcar {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Carcar {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Carcar> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCarcar;
accelerate<ElectricCarcar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);