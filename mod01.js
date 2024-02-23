// .
// first example
// .
var person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    },
};
person.greet();
// .
// first task Mycrosoft Academy
// .
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
