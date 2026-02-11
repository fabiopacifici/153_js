/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterNamesByInitial(names, initial){
  // add variable to store the filtered names
  const filteredNames = []

  // loop over the array of names
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    // IF check if the name starts with the initial character
    //console.log(name.startsWith(initial))
    if (name.startsWith(initial)) {
      // - push it inside the filtered names array
      filteredNames.push(name)
    }
    
  }


  // return the filtered variable
  //console.log(filteredNames);
  return filteredNames
}

// Invoca la funzione qui e stampa il risultato in console
const initials = filterNamesByInitial(names, 'A')


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

console.log(initials);
