console.log('It works');

/* 
Inizializziamo due parole a due variabili.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

Tools:
- variables (const/let)
- strings
- string.length
- console.log
- if/else statement

*/


// Data collection (raccolta dati)
/* const first_word = 'Mandalorian'
const second_word = 'Mandalorian' */
const first_word = prompt('Type one word')
const second_word = prompt('Type another word')
// variable declaration (only)
let message;
console.log(first_word, second_word);

// Elaboration (elaborazione della logica)

// SE (verifico se) la prima parola e' piu lunga della seconda
if (first_word.length > second_word.length) {
  // - stampo messaggio per l'utente
  //console.log("La parola 1 e' piu lunga della due");
  // assignment operaation
  message = "La parola 1 e' piu lunga della due"

} else if (second_word.length > first_word.length) {
  // ALTRIMENTI SE (altrimenti verifico se) la seconda parola e' piu lunga della prima
  // - stampo messaggio appropriato
  //console.log("La parola 2 e' piu lunga della 1");
  message = "La parola 2 e' piu lunga della 1"

} else {
  // ALTRIMENTI
  // - stampo un messaggio perche sono uguali
  //console.log("le parole sono uguali");
  message = "le parole sono uguali"

}


// Output
console.log(message);

















