// Методы доступа обычно используются только при необходимости управления доступом к значениям, например при реализации проверки или для динамического вычисления значений. Если ваш класс исключительно сохраняет значения и не требует дополнительных функциональных возможностей, предоставляемых методами доступа, можно использовать свойства.

class Car implements Vehicle {
   // Properties
   private static numberOfCars: number = 0;
   private _make: string;
   private _color: string;
   private _doors: number;
   // Constructor
   constructor(make: string, color: string, doors = 4) {
      Car.numberOfCars++;
      this._make = make;
      this._color = color;
      if (doors % 2 === 0) {
         this._doors = doors;
      } else {
         throw new Error("Number of doors must be an odd integer.");
      }
   }
   // Accessors
   get make() {
      return this._make;
   }
   set make(make) {
      this._make = make;
   }
   get color() {
      return `This car is ${this._color}`;
   }
   set color(color) {
      this._color = color;
   }
   get doors() {
      return this._doors;
   }
   set doors(doors) {
      doors % 2 === 0
         ? (this._doors = doors)
         : () => {
              throw new Error("Number of doors must be an even number");
           };
   }
   // Methods
   accelerate(speed: number): string {
      return `${this.worker()} have ${speed} miles per hour`;
   }
   brake(): string {
      return `${this.worker()} have stock brake system`;
   }
   turn(direction: "left" | "right"): string {
      return `${this.worker()} turned from the ${direction}`;
   }

   protected worker(): string {
      return this._make;
   }
   public static getNumber(): number {
      return Car.numberOfCars;
   }
}

let car1 = new Car("bmw", "black", 4);

console.log(car1.color);
let car2 = new Car("audi", "white");
// console.log(car2.doors);
// console.log(car2._doors);

let car3 = new Car("volvo", "blue");
console.log(car3.doors);

console.log(car1.accelerate(120));
console.log(car2.brake());
console.log(car3.turn("left"));
console.log(Car.getNumber());

// модификатор доступа

// public   	Если модификатор доступа не указан, значение по умолчанию — public. Элемент можно также явно обозначить как общедоступный с помощью ключевого слова public.
// private  	После изменения элемента с помощью ключевого слова private доступ к нему извне невозможен.
// protected	Модификатор protected действует так же, как модификатор private, за исключением того, что элементы, объявленные как protected, доступны также в производных классах. (Вы узнаете об этом позже из этого модуля.)

class ElectrikCar extends Car implements Vehicle{
   // Properties unique to ElectricCar
   private _range: number;
   // Constructor
   constructor(make: string, color: string, range: number, doors = 2) {
      super(make, color, doors);
      this._range = range;
   }
   // Accessors
   get range() {
      return this._range;
   }
   set range(range) {
      this._range = range;
   }
   // Methods
   brake(): string {
    return `${this.worker()} have recursive brake system`;
 }

   charge() {
      return `${this.worker()} is charging`;
   }
}
let teslaX = new ElectrikCar("tesla", "red", 480, 4);
let teslaPlade = new ElectrikCar("texla Plade", "black", 600);

console.log(teslaPlade.brake());
console.log(car1.brake());

// Интерфейс для класса:

interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}