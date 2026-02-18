/**
 * # Render Member card
 * Render a sinle team member given its object
 * @param {Object} thisMember 
 * @returns {String}
 */
function renderMemberCard(thisMember) {
  const { name, role, image } = thisMember
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
  return markup
}

/**
 * # Renders all members 
 * Renders from the given array into the provided dom node
 * @param {Array} teamMembers 
 * @param {HTMLElement} rowEl
 * @returns {void}
 */
function renderTeam(teamMembers, rowEl) {
  let cards = ''
  for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];

    const markup = renderMemberCard(thisMember)

    cards += markup

  }
  rowEl.innerHTML = cards
}
