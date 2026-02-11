// DOM Manipulation
// Il software deve chiedere all'utente il suo nome, e la fazione (jedi/sit) con due promt diversi
// Sulla pagina html deve comparire la scritta "Ciao <nome>",
// il colore del nome deve essere verde se jedi o rosso se sith

/* 
tools: 
- let/const
- prompt
- if/else
- document.getElementById
- element.style.color|element.classList.add()

*/

// Gather data
const greetEl = document.getElementById('greet')
console.log(greetEl);

const userName = prompt("What's your name?", 'Mario').trim()
console.log(userName); // Mario

const userType = prompt('What  are you? Jedi/Sith', 'Jedi').trim().toLowerCase()
console.log(userType); // jedi|sith


// Elaborate the logic
const selectedColor = userType === 'jedi' ? 'green' : 'red'
console.log(selectedColor);


// Print the output
greetEl.innerHTML = `Ciao ${userName}`
greetEl.style.color = selectedColor


// 