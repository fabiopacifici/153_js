console.log('it works');

/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


tools: 
- const/let
- prompt
- if/else
- relational operators
- console.log
- toFixed
- Number()

*/

// 1. Data collection

// - Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
const km_number = Number(prompt('Type the km you want to do'))

// - Il programma dovrà chiedere all'utente l'età del passeggero
const passenger_age = Number(prompt('Type the passenger age'))


// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price_per_km = 0.21;
console.log(km_number, passenger_age, price_per_km);

// - creo una variabile per lo sconto del 20% 0.2 (0.8)
// - creo una variabile per lo sconto del 40% 0.4 (0.6)
let discount = 0;
let message = 'Standard Ticker price: '


// 2. Elaboration

// - calcolare il prezzo totale del viaggio
let ticket_price = price_per_km * km_number
console.log(ticket_price);

// Check if the passenger age is less that 18
if(passenger_age < 18){
  // - apply 20% discount
  /* let discount_amount = ticket_price * 0.2
  console.log(ticket_price * 0.2); // discount amount
  ticket_price = ticket_price - discount_amount */
  discount = 0.2
  message = 'Minors Ticker price: '
  

} else if (passenger_age >= 65){
  // Check if the passenger age is greather than or equal 65
  // - apply 40% discount
/*   console.log(ticket_price * 0.4);
  let discount_amount = ticket_price * 0.4
  console.log(ticket_price * 0.4); // discount amount
  ticket_price = ticket_price - discount_amount */
  discount = 0.4
  message = 'Senior Ticker price: '


}
// Otherwise (standard price)
let discount_amount = ticket_price * discount
console.log(ticket_price * discount, discount);

ticket_price = ticket_price - discount_amount

// 3. Output
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
console.log(`${message} ${ticket_price.toFixed(2)}`);
