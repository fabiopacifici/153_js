console.log('it works');

/* 
Mail
- Crea una lista di email di invitati ad una festa.
- Chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
*/

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