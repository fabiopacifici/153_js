/* 

1. Visualizzare in pagina 5 numeri casuali
2. Da lì parte un timer di 30 secondi.
3. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/


console.log('it works');

// Collect DATA
// Select the dom elements
const countdownEl = document.getElementById('countdown')
const instructionsEl = document.getElementById('instructions')
const numbersListEl = document.getElementById('numbers-list')
const answersFormEl = document.getElementById('answers-form')
console.log(countdownEl, instructionsEl, numbersListEl, answersFormEl);




// Elaboration
// 1. Visualizzare in pagina 5 numeri casuali
// - generate 5  random numbers (with a function?)
const numbersToGuess = generateNumbersToGuess(5, 1, 50)
console.log(numbersToGuess);

// - insert the numbers into the numbers-list element
numbersListEl.innerHTML = numbersToGuess



// parte un timer di 30 secondi.
// - use a set interval to start the countdown
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
let limit = 10
const intervalId = setInterval(function(){
  startCountDown(countdownEl, instructionsEl, numbersListEl, answersFormEl )
}, 1000)


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// - attach a submit event to the form
// - read the inputs values
// check if the random numbers array includes the input value
// - push the guessed numbers into a new array

// il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// - print the array length and its content



answersFormEl.addEventListener('submit', handleFormSubmit)

