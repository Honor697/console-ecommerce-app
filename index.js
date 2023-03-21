var prompt = require('prompt');

prompt.start();

let cart = [];
let products = [
  { id: 1, name: 'Beans', prices: 30 },
  { id: 2, name: 'Bacon', price: 70 },
  { id: 3, name: 'Rice & sauce', price: 50 },
];

console.log('Hi Welcome to my store!, Please enter your login details');

prompt.get(['username', 'email', 'password'], function(err, result) {
  console.log(`Welcome ${result.username}, You can now place an order!\n`);
  console.log('pick a number to select from the list of products\n ');
  console.log('------------------------------');

  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
  }

  products.forEach((item, idx) => console.log(`${idx + 1} ${item.name}`));

  prompt.get(['option'], (err, result) => {
    if (result.option === 1) {
      console.log('You have selected Beans');
    } else if (result.option === 2) {
      console.log('You have selected Bacon');
    } else {
      console.log('You have selected Rice & sauce')
    }

    let selected = products.find(product => product.id == result.option);

    console.log(`You have selected ${selected.name}`);
  })
});
