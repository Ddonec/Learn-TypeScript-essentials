function addNumbers(x: number, y: number): number {
   return x + y;
}
addNumbers(1, 2);

//  в функции указывается тип вводныз данных и выходного значения

// Анонимные функции

let addNumbers2 = function (x: number, y: number): number {
   return x + y;
};
console.log(addNumbers2(1, 2));

// можем в выводе не указывать слово фунуция или название функции

let sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(sum([1, 2, 3]));   //тут


// Стрелочные функции

// Anonymous function
let addNumbers3 = function (x: number, y: number): number {
    return x + y;
 }
 
 // Arrow function
 let addNumbers4 = (x: number, y: number): number => x + y;


 function displayAlert(message: string | number) {
    alert('The message is ' + message);
}
// console.log(displayAlert(5))

function sumArr(input:number[]) {
    let total =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

console.log(sumArr([1,2,3]))


// необязательные параметры в функции

function addNumbers (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1



// Параметры по умолчанию:

function addNumbers5 (x: number, y = 25): number {
    return x + y;
 }
 
 addNumbers5(1, 2);  // Returns 3
 addNumbers5(1);     // Returns 26


//  Множество параметров:

let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
 }
 // Многоточие перед ...restOfNumbers означает что будет создан массив из остальныз параматров переданных в функцию

 addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5





interface Message {
    text: string;
    sender: string;
 }
 
 function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
 }
 
 displayMessage({sender: 'Christopher', text: 'hello, world'});


//  Пример необяательного и дефолтного значения 

let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if(!z){
      return x+y
    }
  return x+y+z;
  } 
  
  console.log(addThreeNumbers(10, 20, 30))
  console.log(addThreeNumbers(10, 20))
  
  
  let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;
  
  console.log(subtractThreeNumbers(10, 20))    // returns -110 because 'z' has been assigned the value 100
  console.log(subtractThreeNumbers(10, 20, 15)) 


//   Пример использования функуции внутри функции и обощначения через интерфейс

// type calculator = (x: number, y: number) => number;
interface calculator {
    (x:number , y: number) :number
  }
  
  let plus: calculator = (x: number, y: number): number => (x+y)
  let minus: calculator = (x: number, y: number): number => (x-y)
  
  console.log(plus(1,2))
  console.log(minus(1,2))
  
  
  let doCalculator = (operation: 'add' | 'substract'):calculator => {
    if(operation === 'add'){
      return plus
    }else{
      return minus
    }
  }
  console.log(doCalculator('add')(1, 2))
  

  
//   Что касается TypeScript, эти три утверждения идентичны.

//   let addNumbers: Calculator = (x: number, y: number): number => x + y;
//   let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
//   let addNumbers: Calculator = (num1, num2) => num1 + num2;