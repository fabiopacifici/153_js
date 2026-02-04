console.log('it works');
/* 

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

tools: 
- for loop
- if/else
- var/let
- modulus operator %
- relational operators
- logical operator

*/

// Scrivi un programma che stampi i numeri da 1 a 100,
for (let i = 1; i <= 100; i++) {


  // i % 3 === 0 && i % 5 === 0
  // sia multipli di 3 che di 5 stampi FizzBuzz
  if (i % 15 === 0) {
    // print fizzbuzz
    console.log('fizzbuzz');

  } else if (i % 3 === 0) {
    //per i multipli di 3 stampi “Fizz” al posto del numero
    // print fizz
    console.log('fizz');

  } else if (i % 5 === 0) {
    // print buzz
    // per i multipli di 5 stampi Buzz
    console.log('buzz');

  } else {
    // print the number
    console.log(i);
  }

}

