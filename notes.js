'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}. Thank you.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 'always', // Open 24 hours
    close: 24,
  },
};

/////////////////////////////////
// Maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 1100)
  .set('close', 2300)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 2100;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// //////////////////////////////////
// // Sets

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Pasta',
//   'Risotto',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Braed'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear(); clears the entire set
// console.log(ordersSet); // No indexes in a Set

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// let staffUnique = new Set(staff);
// console.log(staffUnique);
// staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// console.log(new Set('abcdefghijklmnopqrstuvwxyz').size);

//////////////////////////////////
// Looping objectives: Object MediaKeySession, values and entries

// Property NAMES

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// ///////////////////////////////
// // Optional Chaining

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // with optional chaining:

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }
// // use ?? above not || as it isnt effected by the nullish value

// // Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exitst');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exitst');

// // Arrays
// const users = [{ name: 'jonas', email: 'hello' }];

// console.log(users[0]?.name ?? 'User array empty');

////////////////////////////////
// Enhanced Object Literals

////////////////////////////////
// For-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [a, b] of menu.entries()) {
//   console.log(`${a + 1}: ${b}`);
// }

// console.log([...menu.entries()]);

// ////////////////////////////////
// // Logical Assignment Operator
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND addignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//////////////////////////////////////
// Nullish Coalescing Operator ??
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null adn undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// //SPREAD, because on the right side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on the left side of the =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood);

///////////////////////////////////////////
// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

///////////////////////////////////////////
// // functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 4, 8, 3, 2, 8, 7, 5);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('Mushrooms', 'Olives', 'Onions', 'Ham');
// restaurant.orderPizza('Mushrooms');

// console.log('----OR------');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('-----AND------');

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

//////////////////////////////////////////
// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mush', 'Spin');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// ///////////////////////////////////////
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

/////////////////////////////////////
// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//////////////////////////////////////
// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

////////////////////////////////////////
// // nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

//////////////////////////////////////
// // // destructuring assignment
// // const [x, y, z] = arr;
// // console.log(x, y, z);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // // const temp = main;
// // // main = secondary;
// // // secondary = temp;
// // // console.log(main, secondary);

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // console.log(restaurant.order(2, 0));

//////////////////////////////////////
// // // Receive 2 return values from a function
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

////////////////////////////////////
// // // destructuring nested arrays
// // const nested = [2, 4, [5, 6]];
// // // const [i, , j] = nested;
// // // console.log(i, j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

/////////////////////////////////////
// // // defaults values
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

//////////////////////////////////////
// // The spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// const newArr1 = [1, 2, arr];
// console.log(newArr);
// console.log(newArr1);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // bit similar to destructuring, doesnt override stuff

/////////////////////////////////////////
// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

//////////////////////////////////////////
// // join 2 arrays
// const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(wholeMenu);
// console.log(...wholeMenu);

// // iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log(...str);

// // real world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Let's make pasta! Ingredient 2?"),
// //   prompt("Let's make pasta! Ingredient 3?"),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients); // ES6 syntax - much better than the above

///////////////////////////////////////
// //Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
