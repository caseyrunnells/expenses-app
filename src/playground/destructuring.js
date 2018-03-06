// Object Destructuring

// const person = {
//     name: 'Casey',
//     age: 28,
//     location: {
//         city: 'Austin',
//         temp: 66
//     }
// }

// const { name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);


// const {city, temp: temperature } = person.location;
// if (city && temperature) {
// console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// if (publisherName) {
//     console.log(publisherName);
// }

// Array Destructuring

// const address = ['10720 N Platt River Drive', 'Austin', 'Texas', '78748'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (cold)', '$2.00', '$2.45', '$2.75'];
const [coffeeType, , m] = item;

console.log(`A medium ${coffeeType} costs ${m}`);