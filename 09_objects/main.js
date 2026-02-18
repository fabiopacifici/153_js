/* console.log('Objects');

// Object Literal
// Empty object
const cat = {
  name: 'Antifa',
  color: 'Black',
  friends: ['Anakin', 'Mando', 'Sabbia'],
  isAtHome: true
}

console.log(cat);

const person = {
  "name": '',
  "first name": '',
  lastName: '',
  height: 180,
  age: '',
  job: '',
  friends: [],
  "scheda video": 'RTX 123'
}

console.log(person);


// 👉 Access objects properties

// dot notation
console.log(cat.color);

// square brackets notation
console.log(cat['color']);
console.log(cat["color"]);



// Add/update properties 
cat.sex = 'Female'
//cat['sex'] = 'Female'
// update an existing property
cat.sex = 'Male'
cat['sex'] = 'Female'
console.log(cat);



const catSex = 'sex'

console.log(cat[catSex]); // cat['sex']

console.log(cat.catSex);


// 👉 For in

for (let key in cat) {
  console.log(key);
  //console.log(cat);
  // ❌ key is not a real property in the object
  //console.log(cat.key);
  console.log(cat[key]);

}



// 1. key = 'name' -> cat['name']
// 2. key = 'color' -> cat['color']
// 3. key = 'friends' -> cat['frinds']
// 4. key = 'isAtHome' -> cat['isAtHome']


//  📌 Multidimentional array (complex data types)

const article = {
  title: 'Learn PHP',
  content: 'lLorem, ipsum dolor sit amet consectetur adipisicing elit. Similique alias autem enim voluptate distinctio, perferendis magni vitae ullam in labore libero quas repellat facere sit. Nostrum eum possimus repellat quaerat?m',
  cover_image: 'https://picsum.photos/400/200',
  isPublic: true,
  author: 'Fabio'
}

// read the data
console.log(article);
console.log(article.title);
console.log(article['title']);


const posts = [
  {
    title: 'Learn PHP',
    content: 'lLorem, ipsum dolor sit amet consectetur adipisicing elit. Similique alias autem enim voluptate distinctio, perferendis magni vitae ullam in labore libero quas repellat facere sit. Nostrum eum possimus repellat quaerat?m',
    cover_image: 'https://picsum.photos/400/200',
    isPublic: true,
    author: 'Fabio'
  },
  {
    title: 'Learn Laravel',
    content: 'lLorem, ipsum dolor sit amet consectetur adipisicing elit. Similique alias autem enim voluptate distinctio, perferendis magni vitae ullam in labore libero quas repellat facere sit. Nostrum eum possimus repellat quaerat?m',
    cover_image: 'https://picsum.photos/400/200',
    isPublic: true,
    author: 'Fabio'
  },
  {
    title: 'Learn JS',
    content: 'lLorem, ipsum dolor sit amet consectetur adipisicing elit. Similique alias autem enim voluptate distinctio, perferendis magni vitae ullam in labore libero quas repellat facere sit. Nostrum eum possimus repellat quaerat?m',
    cover_image: 'https://picsum.photos/400/200',
    isPublic: true,
    author: 'Fabio'
  },
  {
    title: 'Learn React',
    content: 'lLorem, ipsum dolor sit amet consectetur adipisicing elit. Similique alias autem enim voluptate distinctio, perferendis magni vitae ullam in labore libero quas repellat facere sit. Nostrum eum possimus repellat quaerat?m',
    cover_image: 'https://picsum.photos/400/200',
    isPublic: true,
    author: 'Fabio'
  }
]



console.log(posts);

for (let i = 0; i < posts.length; i++) {
  // post is an object
  const post = posts[i];


  //console.log(post.title);
  //console.log(post['title']);

  const cardEl = `
      <div class="col">
        <div class="card">
          <img src="${post.cover_image}" alt="" class="card-img-top">
          <div class="card-body">
            <h3>${post.title}</h3>
          </div>
        </div>
      </div>`


      console.log(cardEl);
      

} */


const zucchine = [
  {
    type: 'type 1',
    weight: 10,
    lenght: 10
  },
  {
    type: 'type 2',
    weight: 15,
    lenght: 20
  },
  {
    type: 'type 3',
    weight: 25,
    lenght: 20
  },
  {
    type: 'type 1',
    weight: 10,
    lenght: 10
  },
  {
    type: 'type 2',
    weight: 15,
    lenght: 20
  },
  {
    type: 'type 3',
    weight: 25,
    lenght: 20
  }
]


/* for (let key in zucchine) {
  console.log(key);
  zucchine[key]
}
 */


let sum = 0
for (let i = 0; i < zucchine.length; i++) {
  const zucchinaObj = zucchine[i];
  console.log(zucchinaObj.weight);

  sum += zucchinaObj.weight
}

console.log(sum);
