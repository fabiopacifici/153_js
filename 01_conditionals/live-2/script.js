console.log('It works');
/* 
età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

tools:
- variables (const/let)
- prompt
- relational operators (>)
- if/else 

*/


// data collection
const first_age = Number(prompt('Type an age, ie. 20'))
const second_age = parseInt(prompt('Type another age. ie. 40'))
let message;
//console.log(typeof first_age, first_age, typeof second_age, second_age, 40);


// elaboration

// IF la prima eta e' maggiore della seconda 
if(first_age > second_age){
  // - stampa messaggio opportuno
  message = 'First person older than the second'
} else if (first_age < second_age) {
  // ELSE IF altrimenti se la seconda eta e' maggiore della prima
  message = 'Second person older than the first'
  
  
} else {
  // ELSE altrimenti sono uguali
  message = 'Same age'
  
}

// output
console.log(message);
console.log(person_name);

