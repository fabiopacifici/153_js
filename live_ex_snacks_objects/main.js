console.log('it woks');


/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.



*/
const bikes = [
  {
    name: "Cannondale 1",
    weight: 10
  },
  {
    name: "Cannondale 2",
    weight: 8
  },
  {
    name: "Cannondale 3",
    weight: 6
  },
  {
    name: "Cannondale 4",
    weight: 14
  },
  {
    name: "Cannondale 5",
    weight: 25
  }
]



let lightest_bike = bikes[0]

for (let i = 0; i < bikes.length; i++) {
  const bike = bikes[i];
  console.log(bike.weight);
  if (bike.weight < lightest_bike.weight) {
    lightest_bike = bike
  }

}


const lightestBikeEl = document.getElementById('lightest_bike')
console.log(lightest_bike);
lightestBikeEl.innerHTML = `<h1>${lightest_bike.name}</h1><strong>Weight:</strong><span>${lightest_bike.weight}</span>`





/*
Snack2**
1 Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.



2.Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

3. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/


const teams = [
  {
    name: 'team 1',
    points: 0,
    fouls: 0
  },
  {
    name: 'team 2',
    points: 0,
    fouls: 0
  },
  {
    name: 'team 3',
    points: 0,
    fouls: 0
  },
  {
    name: 'team 4',
    points: 0,
    fouls: 0
  },
  {
    name: 'team 5',
    points: 0,
    fouls: 0
  },
  {
    name: 'team 6',
    points: 0,
    fouls: 0
  },
  {
    name: 'team 7',
    points: 0,
    fouls: 0
  }

]
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



for (let i = 0; i < teams.length; i++) {
  const thisTeam = teams[i];

  console.log(thisTeam);
  thisTeam.points = getRandomInteger(1, 100)
  thisTeam.fouls = getRandomInteger(1, 50)


}


console.log(teams);
// 3. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const newTeams = []
const rowEl = document.querySelector('section .row')

for (let i = 0; i < teams.length; i++) {
  const thisTeam = teams[i];
  const name = thisTeam.name
  const fouls = thisTeam.fouls

  // 📌 Short syntax objects literals
  /*  ES5 Syntax
   const newTeamObj = {
      name: name,
      fouls: fouls
    } */

  // ES6 Syntax
  const newTeamObj = {
    name,
    fouls
  }
  newTeams.push(newTeamObj)


  const markup = `
  <div class='col'>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${thisTeam.name}</h4>
        <p class="card-text">Fouls: ${thisTeam.fouls}</p>
      </div>
    </div>
  </div>
  `

  rowEl.insertAdjacentHTML('beforeend', markup)


}


console.log(newTeams);


// 📌 Dynamic Keys
/* 
let name = 'Paolo';
let age = 30;
let email = 'paolo@email.it';

const nameKey = prompt('Type a key you want to add');
const value= prompt('Type the value you want to associate to the previous key')
console.log(nameKey, value);


const student = {
  name: name,
  [nameKey]: value, // age: age
  email: email
};

console.log(student);
 */

// 📌 Destructuring

// 👉 Objects
const movie = {
  name: 'starwars',
  length: 120,
  genre: 'fantasy'
}


const movieName = movie.name
const movielength = movie.length
const movieGenre = movie.genre

const {name, genre} = movie

console.log(name, genre);


// 👉 Array
const movies = [
  'Matrix',
  'Avatar',
  'Starwars'
]

const [matrixMovie, , starwarsMovie] = movies
console.log(matrixMovie, starwarsMovie );
