document.writeln('hello')
// select the dom node
/* const listUl = document.querySelector('.list')
console.log(listUl); */


const cats = [
  'Anakin',
  'Mando',
  'Grogu',
  'Gaza',
  'Sabbia',
  'Antifa',
  'Jabba',
  'Cookie',
  'Mutina',
]


// (plain string) Option 1
/* let items = ''

for (let i = 0; i < cats.length; i++) {
  const cat = cats[i];
  const li = `<li>${cat}</li>`
  console.log(li);
  items += li  
}

console.log(items);
listUl.innerHTML = items
 */

// DOM API (real html nodes)

/* for (let i = 0; i < cats.length; i++) {
  const cat = cats[i];
  const liEl = document.createElement('li')
  liEl.append(cat)
  console.log(liEl);
  listUl.appendChild(liEl)
  
} */




const rowUl = document.querySelector('.row')

/*   let colsItems = ''

  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    const colStr = `
    <div class="col">
      <div class="card">
        <img class="card-img-top" src='https://picsum.photos/400/200' alt='' />
        <div class="card-body">
          <h3>${cat}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, reprehenderit!s</p>
        </div>
      </div>
    </div>
    `
    colsItems += colStr
    //console.log(colStr);
    
  }

console.log(colsItems);
rowUl.innerHTML = colsItems */




// Option 3

for (let i = 0; i < cats.length; i++) {
  const cat = cats[i];
  const colStr = `
    <div class="col">
      <div class="card">
        <img class="card-img-top" src='https://picsum.photos/400/200' alt='' />
        <div class="card-body">
          <h3>${cat}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, reprehenderit!s</p>
        </div>
      </div>
    </div>
    `
  


  rowUl.insertAdjacentHTML('afterbegin', colStr )

}