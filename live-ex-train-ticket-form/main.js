/* 

Descrizione:**
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

**MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console. 

**MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

**MILESTONE 3:**
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.


*/

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Data collection
// select the dom nodes (form)
const formEl = document.querySelector('form')
const nameField = document.getElementById('passenger-name')
const ageRangeField = document.getElementById('age-range')
const kmField = document.getElementById('km')
const buttonEl = document.querySelector('button')

// select the dom nodes (ticket)
const ticketSection = document.querySelector('.ticket')
const name = document.getElementById('name')
const offer = document.getElementById('offer')
const wagon = document.getElementById('wagon-number')
const cpCode = document.getElementById('cp-code')
const ticket = document.getElementById('ticket-price')
console.log(name, offer, wagon, cpCode, ticket);

// Elaborate the logic

/* 
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/
formEl.addEventListener('submit', function (e) {
  e.preventDefault()


  const nameValue = nameField.value;
  const kmValue = Number(kmField.value);
  const ageRangeValue = ageRangeField.value;
  //console.log(nameValue, kmValue, ageRangeValue);
  let ticketPrice = kmValue * 0.21;
  let offerName = 'Standard Ticket'
  //console.log(ticketPrice);
  let cpNumb = getRandomInteger(90000, 99999)
  let wagonNumb = getRandomInteger(1, 10)

  if (ageRangeValue === 'minor') {
    // apply 20% discount 
    const discount = ticketPrice * 0.2
    offerName = 'Minor ticket price'
    console.log(discount);
    ticketPrice -= discount


  } else if (ageRangeValue === 'senior') {
    // apply 40% discount
    const discount = ticketPrice * 0.4
    offerName = 'Senior ticket price'
    console.log(discount);
    ticketPrice -= discount
  }

  // Print the output
  ticketSection.classList.remove('d-none')
  // output
  console.log(ticketPrice, offerName);
  name.innerHTML = nameValue
  offer.innerHTML = offerName
  // call the function directly
  wagon.innerHTML = getRandomInteger(1, 10)
  cpCode.innerHTML = getRandomInteger(90000, 99999)
  // or use a variable instead
  /*
  wagon.innerHTML = wagonNumb
  cpCode.innerHTML = cpNumb
  */

  ticket.innerHTML = ticketPrice.toFixed(2)



})



