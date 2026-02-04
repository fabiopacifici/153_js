console.log('It works');

/*
let validation = true;
const wordA = "Word A";
let wordB = "Word B";

if (validation === true) {
  let wordC = "Word C";
  let wordB = "Word Custom B";
  console.log(wordA); // Word A
  console.log(wordB); // Word Custom B
  console.log(wordC); // Word C
}

console.log(wordA); // Word A
console.log(wordB); // Word B
//console.log(wordC); // ❌
 */



/*

pari o dispari:

chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

tools:
- variables
- prompt
- Number|parseInt
- Math
- if/else
- relational operators
- console.log

*/

/* Data collection */
// - chiedere all'utente se vuole pari o dispari
const user_choice = prompt('Choose odd or even: pari | dispari')
// - chiedere all'utente un numero intero compreso tra 1 e 9
const user_numb = parseInt(prompt('Type a number between 1 and 9'))
// - Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
const pc_number = Math.floor(Math.random() * 9) + 1;

console.log(user_choice, user_numb, pc_number);


/* Elaboration */
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari

// Create a variable to store the sum the user number and pc number
const total = user_numb + pc_number
let result
// Check if the result is even
if (total % 2 === 0){
  console.log('This is pari');
  // - save the result in a variable
  result = 'pari'
  
} else {
  // Else
  console.log('This is dispari');
  // - save this result into the varaible
  result = 'dispari'

}


console.log(result);


/* Output */
// - comunicare chi ha vinto
if(result.toLowerCase() === user_choice.toLowerCase()){
  console.log('You Win');
  
} else {
  console.log('PC Wins');

}