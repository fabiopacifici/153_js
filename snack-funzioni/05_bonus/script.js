/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/* function greetings(name){
  const now = new Date();
  //now.setHours(1)
  const currentHour = now.getHours();
  let message;
  if(currentHour <= 13){
    message = `Buongiorno ${name}`
  } else if (currentHour > 13 && currentHour <= 17) {
    message = `Buon pomeriggio ${name}`
  } else {
    message = `Buona sera ${name}`
  }

  //console.log(message);
  return message
  
} */

const greetings = name => {
  const now = new Date();
  //now.setHours(1)
  const currentHour = now.getHours();
  let message;
  if (currentHour <= 13) {
    message = `Buongiorno ${name}`
  } else if (currentHour > 13 && currentHour <= 17) {
    message = `Buon pomeriggio ${name}`
  } else {
    message = `Buona sera ${name}`
  }

  //console.log(message);
  return message

}

// Invoca la funzione qui e stampa il risultato in console
const greet = greetings(name)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
console.log(greet);
