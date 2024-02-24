namespace all {
   export namespace Greetings {
      export function returnGreeting(greeting: string) {
         console.log(`The message from namespace Greetings is ${greeting}.`);
      }
   }
   export namespace GreetingsWithLength {
      export function returnGreeting(greeting: string) {
         let greetingLength = getLength(greeting);
         console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
      }
      function getLength(message: string): number {
         return message.length;
      }
   }
}
// returnGreeting('Hello');                     // Returns error
all.Greetings.returnGreeting("Bonjour"); // OK
all.GreetingsWithLength.returnGreeting("Hola"); // OK

import greet = all.Greetings;
greet.returnGreeting("Bonjour");
