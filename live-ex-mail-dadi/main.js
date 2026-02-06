console.log('it works');

/* 
Mail
- Crea una lista di email di invitati ad una festa.
- Chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
*/
// 1. Data collection
// Crea una lista di email di invitati ad una festa.
const guests = [
  'emample1@test.it',
  'emample2@test.it', 
  'emample3@test.it', 
  'emample4@test.it', 
  'emample5@test.it',
  'emample6@test.it'
]

//Chiedi all’utente la sua email,
const user_email = 'fabio@test.it' //prompt('type your email address')

// 
let can_access = false

// 3. Logic Elaboration
for (let i = 0; i < guests.length && !can_access; i++) {
  const guest = guests[i];
  console.log(guest);
  // controlla che sia nella lista di chi può accedere,

  if(guest === user_email) {
    // i found you! welcome to the party
    can_access = true
    console.log('found');
    //break
  } 
}


// 3. Print the output
console.log(can_access);
if(can_access){
  console.log('Welcome');
  
} else {
  console.log('Go home! no party');
}


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
// 1. Data collection
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const player_number = Math.floor(Math.random() * 6) + 1
const pc_number = Math.ceil(Math.random() * 6) // Note below 👇
let game_message; 
console.log(player_number, pc_number);

// 2. Logic  elaboration
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if(player_number > pc_number) {
  // player wins
  game_message = 'You Win!🎊'
} else if (pc_number > player_number) {
  // pc wins
  game_message = 'PC Wins!🤖'

} else {
  // try again
  game_message = 'Try Again'

}


// 3. Print the output

console.log(game_message);
/* 
NB:

The Technical Reality
JavaScript uses IEEE 754 double-precision floating-point numbers (64-bit). For Math.random():

Total possible values: 2^53 (about 9 quadrillion distinct numbers in the [0, 1) range)
Probability of exactly 0: 1 in 2^53 = 1 in 9,007,199,254,740,992
In percentage: ~0.000000000000011%
What Does This Mean?
If you rolled your virtual die 1 billion times per second, you'd expect to hit exactly 0 roughly once every 285 years.

So yeah, it's technically possible but practically irrelevant. However, the floor + 1 pattern is still the correct approach because:

*/