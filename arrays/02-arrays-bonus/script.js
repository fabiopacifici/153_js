const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for(let i = teachers.length - 1; i >=0; i--){
  // read the array element first
  //console.log(teachers[i]);
  // store the array element into a dedicated variable
  //const thisTeacher = teachers[i]
  // do your ops
  reversedTeachers.push(teachers[i])  
  
}

console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];

  if(teacher.length >= 5){
    longNames.push(teacher)
  }
  
}

console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
const edIndex = teachers.indexOf('Ed')
console.log(edIndex);
teachers.splice(edIndex, 1)
//teachers.splice(teachers.indexOf('Ed'), 1)
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
// i < teachers.length || isFabioPresent === true;
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];

  if(teacher == 'Fabio'){
    console.log('I found fabio');
    isFabioPresent = true
    break;
  }
  
}
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ');
//const teachersString = teachers.toString()

console.log(teachersString);
