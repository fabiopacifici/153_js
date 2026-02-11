/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(arr) {
  // create a variable to store the initials
  const initials = []

  // loop over the array of names
  for (let i = 0; i < arr.length; i++) {
    // grab the first name
    const name = arr[i]
    // for each name grab the first character
    // from the first name gram the initial
    const initial = name.charAt(0)
    console.log(initial);
  
    // push the character into the initials array
    initials.push(initial)
  }

  // return the initials array
  //console.log(initials);
  
  return initials

}

// Invoca la funzione qui e stampa il risultato in console
const initials = getInitials(names)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(initials);
