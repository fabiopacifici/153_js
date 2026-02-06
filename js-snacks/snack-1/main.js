/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/
const first_number = Number(prompt('Type a number'))
const second_number = Number(prompt('Type a number'))
let message

if(first_number > second_number){
  // the first n is large
  message = 'the fist number is larger'

} else if (second_number > first_number) {
  // the seconbd n is larger
  message = 'the second number is larger'

} else {
  // equal numbs
  message = 'the number are equal'
}


console.log(message);
