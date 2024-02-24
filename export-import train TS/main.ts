import { returnGreeting } from "./Greetings_module"; // imports a single function in the module

import * as allGreetingFunctions from "./Greetings_module"; // imports all exported components in the module

import { returnGreeting as returnGreetingLength } from "./Greetings-utilities_module";

returnGreeting("Hola!"); // Displays 'The message from Greeting s_module is Hola!'
allGreetingFunctions.returnGreeting("Bonjour"); // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength("Ciao!"); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
