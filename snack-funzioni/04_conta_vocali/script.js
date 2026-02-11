/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/* function countVowels(str){
  
  // store the counter for every vowel found
  let counter = 0
  let foundVowels = []
  const vowels = ['a','e','i','o','u']

  for(let i = 0; i < str.length; i++){
    const char = str[i]
    console.log(char);
    if(vowels.includes(char)){
      foundVowels.push(char)
      counter++
    }
    
    
  }

  //console.log(counter, foundVowels, foundVowels.length);
  
  // return the counter
  return foundVowels.length

} */


const countVowels = str => {

  // store the counter for every vowel found
  let counter = 0
  let foundVowels = []
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    console.log(char);
    if (vowels.includes(char)) {
      foundVowels.push(char)
      counter++
    }

  }

  //console.log(counter, foundVowels, foundVowels.length);

  // return the counter
  return foundVowels.length

}



// Invoca la funzione qui e stampa il risultato in console
const foundVowels = countVowels(word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(foundVowels);
