console.log('it works');
const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];


/* 
<div class="col">
  <div class="card rounded-0 border-0 bg-white">
    <img class="card-img-top" src="./assets/img/angela-caroll-chief-editor.jpg" alt="">
    <div class="card-body text-center">
      <h2 class="card-title">Angela</h2>
      <div class="role">CEO</div>
    </div>
  </div>
</div>

*/

// select the dom nodes
const rowEl = document.querySelector('section.team .row')
const formEl = document.getElementById('add-member')
const nameFieldEl = document.getElementById('name')
const roleFieldEl = document.getElementById('role')
const imageFieldEl = document.getElementById('image')


// 👇 Render the team on teh page
// loop over the array for each item render the card markup
/* let cards = ''
for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];

  // 👇 Generated the member card
   const {name, role, image} = thisMember
  console.log(thisMember);
  const markup = `
  <div class="col">
    <div class="card rounded-0 border-0 bg-white">
      <img class="card-img-top" src="./assets/img/${image}" alt="">
      <div class="card-body text-center">
        <h2 class="card-title">${name}</h2>
        <div class="role">${role}</div>
      </div>
    </div>
  </div>`
  console.log(markup); 
  
  const markup = renderMemberCard(thisMember)

  cards += markup
  
}

console.log(cards);
rowEl.innerHTML = cards */



renderTeam(teamMembers, rowEl)


formEl.addEventListener('submit', function (e) {

  // prevent the form default
  e.preventDefault()


  // 1. select the form nodes (done in the global scope 👆)
  console.log(nameFieldEl, roleFieldEl, imageFieldEl);
  // 2. read the input values
  console.log(nameFieldEl.value, roleFieldEl.value, imageFieldEl.value);


  // 3. store each input value in a variable
  const name = nameFieldEl.value
  const role = roleFieldEl.value
  const image = imageFieldEl.value

  // 4. create a new team object using the above variables
  /* ES5 Syntax
    const newTeamMember = {
      name: name,
      role: role,
      image: image
    } */

  // 🆕 ES6 Syntaxs
  const newTeamMember = { name, role, image }

  console.log(newTeamMember);


  // 5. add the object to the array (push)
  teamMembers.unshift(newTeamMember)


  // 6. update the dom and re-render the team members
  renderTeam(teamMembers, rowEl)

})
