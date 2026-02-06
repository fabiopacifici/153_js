/* 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const first_word = prompt('Type a word')
const second_word = prompt('Type another word')
let message

if (first_word.length > second_word.length) {
  // the first n is large
  message = `the fist word is longer ${second_word} ${first_word}`

} else if (second_word.length > first_word.length) {
  // the seconbd n is larger
  message = `the second word is longer ${first_word} ${second_word}`

} else {
  // equal numbs
  message = `the two words have the same length ${first_word} ${second_word}`
}


console.log(message);
