// start with strings, numbers and booleans
/*
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Bob';
let name2 = name;
console.log(name, name2);
name = 'Marley';
console.log(name, name2);
*/
    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    //const team = players;

    //console.log(players, team);

    // You might think we can just do something like this:
    //team[3] = 'Boby';
    /*
    team(4) ["Wes", "Sarah", "Ryan", "Boby"]
players(4) ["Wes", "Sarah", "Ryan", "Boby"]
*/
    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
   // const team2 = players.slice();
    //const team3 = [].concat(players);
   // team3[3] = 'Zizi';
   // console.log(team3, players);

    // one way

    // or create a new array and concat the old one in

    // or use the new ES6 Spread
   //const team4 = [...players];
   // team4[3] = 'Yupi';
   // console.log(team4);

   const team5 = Array.from(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    //const captain = person;
   // captain.number = 55; 
    const cap = Object.assign({}, person, {number: 88, age: 69});

    // how do we take a copy instead?

    // We will hopefully soon see the object ...spread
    const cap1 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const dan = {
        name: 'Dan',
        age: 44,
        social: {
            teitter: '@danniel',
            facebook: 'dan.dev'
        }
    };
    console.clear();
    console.log(dan);

    const dev = Object.assign({}, dan);
    const dev2 = JSON.parse(JSON.stringify(dan));
    
