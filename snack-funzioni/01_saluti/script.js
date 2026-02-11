/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * Greets a user
 * Given a name it greets a user
 * @param {String} name The name of the user to greet
 * @returns {String}
 */
/* function greetings(name) {
  // create a variable to store the greeting message
  const greet = `Ciao ${name}`
  // returns it
  return greet

} */

// Arrow function expanded version
/* const greetings = name => {
  // create a variable to store the greeting message
  const greet = `Ciao ${name}`
  // returns it
  return greet

} */

// Arrow function short version
//const greetings = name => `Ciao ${name}`



// Invoca la funzione qui e stampa il risultato in console
const user_message = greetings('Fabio')


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(user_message);
