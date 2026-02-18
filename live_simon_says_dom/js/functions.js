/**
 * # Generate Random Number
 * This function generates a single random number within the range
 * @param {Number} min The min number in the range
 * @param {Number} max The max number in the range
 * @returns {Number}
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * # Generate Numbers to guess
 * This function is responsible of generating random numbers within the limit and range
 * @param {Number} limit The max number of random numbers to generate
 * @param {Number} min the min number of the range to generate
 * @param {Number} max The max number in the range to generate
 * @returns {Array}
 */
function generateNumbersToGuess(limit, min, max) {
  const numbersToGuess = []
  while (numbersToGuess.length < limit) {
    const randNumber = generateRandomNumber(min, max)
    if (!numbersToGuess.includes(randNumber)) {
      numbersToGuess.push(randNumber)
    }
  }
  return numbersToGuess
}


/**
 * Starts the count down and shows on the page
 * @param {Object} countdownEl 
 * @param {Object} instructionsEl 
 * @param {Object} numbersListEl 
 * @param {Object} answersFormEl 
 */
function startCountDown(countdownEl, instructionsEl, numbersListEl, answersFormEl) {

  console.log('Counter', limit);
  limit--

  if (limit === 0) {
    // - stop the interval

    clearInterval(intervalId)
    // - numeri scompaiono
    numbersListEl.classList.add('d-none')
    // - hide counter
    countdownEl.classList.add('d-none')
    // - hide instructions
    instructionsEl.innerHTML = 'Type the numbers that you remember'
    // - appaiono invece 5 input
    answersFormEl.classList.remove('d-none')

  }

  countdownEl.innerHTML = limit



}


function handleFormSubmit(e) {
  e.preventDefault()

  console.log(numbersToGuess);
  const inputElements = document.querySelectorAll('#answers-form input')
  console.log(inputElements);

  const guessedNumbers = []

  for (let i = 0; i < inputElements.length; i++) {
    const element = inputElements[i];
    const guessNumb = Number(element.value)

    if (numbersToGuess.includes(guessNumb)) {
      guessedNumbers.push(guessNumb)
    }
  }

  console.log(guessedNumbers);
  // Out put
  // - hide the form
  answersFormEl.classList.add('d-none')
  // - show the numbers list with the guessed numbers
  numbersListEl.classList.remove('d-none')
  numbersListEl.innerHTML = guessedNumbers
  // - show the instructions with a final message
  instructionsEl.innerHTML = `You guessed ${guessedNumbers.length} numbers`
}
