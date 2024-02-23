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

function addNumbers(x: number, y: number) {
   return x + y;
}
console.log(addNumbers(3, 6));
