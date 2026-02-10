/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

tools: 
- function
- prompt 
- const/let
- for (.split().reverse().join())
- if/else

function name: 
is_a_palindrom
isPlaindrom

*/




// Chiedere all’utente di inserire una parola
// - create a variable to store the user's word
const word = 'anna'

// [Split] the word in a sequence of characters into an array
// - loop over the string for each iteration
// - grab the character and push it into an split_array
/* const splitted_word = []
for(let i = 0; i < word.length; i++){
  const char = word[i]
  console.log(char);
  splitted_word.push(char)

}
console.log(splitted_word); */

function splitWord(word_to_split) {
  const splitted_word = []
  for (let i = 0; i < word_to_split.length; i++) {
    const char = word_to_split[i]
    console.log(char);
    splitted_word.push(char)

  }
  //console.log(splitted_word);
  return splitted_word
}
//       👇 splitted_word_arr here is a global variable (in the global scope)
const splitted_word_arr = splitWord(word) // ['m', 'a', ....]
//console.log(splitted_word_arr);


// [Reverse] the array of characters
// - loop over the array from the end
// - grab the character and store it into a reversed array
/* const reversed_array = []
for (let i = splitted_word_arr.length - 1; i >=0; i--){
  const char = splitted_word_arr[i]
  reversed_array.push(char)
}
console.log(reversed_array); */
//  splitted_word_arr here 👇👇 is a function's parameter (they have the same name but are two different things)
function array_reverse(splitted_word_arr) {
  const reversed_array = []
  for (let i = splitted_word_arr.length - 1; i >= 0; i--) {
    const char = splitted_word_arr[i]
    reversed_array.push(char)
  }
  //console.log(reversed_array);
  return reversed_array
}

// here slitted_word_arr is the global variable 👇
const reversed_array = array_reverse(splitted_word_arr)

//console.log(reversed_array);


// [join] the array into a string
// - loop over the reversed_array and
// - store each character back into a plain string with strings contatenation

/* let joinString = ''

for (let i = 0; i < reversed_array.length; i++) {
  const char = reversed_array[i]
  joinString += char
}
console.log(joinString); */

function join_string(arr) {
  let joinString = ''

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    joinString += char
  }
  //console.log(joinString);
  return joinString
}


const joinString = join_string(reversed_array)
//console.log(joinString);




// check if the reversed word is equal to the original word
function isPalindom(word) {
  // split the word
  const splitted_word = splitWord(word)
  //console.log(splitted_word);

  // reverse the word
  const rev_word_arr = array_reverse(splitted_word)
  //console.log(rev_word_arr);

  // join the word
  const reversed_word = join_string(rev_word_arr)
  //console.log(reversed_word);

  // make the comparison

  // if is a palindrom 
  if (word.toLowerCase() === reversed_word.toLowerCase()) {
    // - return true
    return true

  }
  return false


}


if(isPalindom(word)) {
  console.log('Your word is a palindrom', word);
  
} else {
  console.log('Your word is not palindrom', word);

}
// if true
// - its a palindrom
// otherwise
// not a palindrom





/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


*/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(x, y){
  return x + y
}

function isEvenOrOdd(numb){
  if(numb % 2 === 0){
    return 'pari'
  }
  return 'dispari'
}


// L’utente sceglie pari o dispari
// - create a variable to store the player choice
const player_choice = 'pari' // prompt('type pari/dispari')
// inserisce un numero da 1 a 5
// - create a variable to store the player number
const player_number = 4 // Number(prompt('type a number between 1 and 5'))

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// - call the getRandomNumber function to generate a number and store in a variable
const pc_number = getRandomNumber(1, 5)

// Sommiamo i due numeri
// - create a sum function
// - get the sum of the two numbers
const result = sum(player_number, pc_number)
console.log(result, player_choice, player_number, pc_number);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// - make a is_even_or_odd function
// - check if the number is even and return a pari value
// - otherwise return a dipari value
if (isEvenOrOdd(result) === player_choice.toLowerCase()){
  console.log('You win');
  
} else {
  console.log('PC wins');
  
}

// Dichiariamo chi ha vinto
// - log a message with the result