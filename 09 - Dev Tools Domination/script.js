

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!!', 'some variables');

// Styled with %c
console.log('%c Here is some text', 'font-size: 40px; background: red; text-shadow: 10px 10px 5px blue')

// warning!
console.warn('Warning!!!');

// Error :|
console.error('Error.shit!');

// Info
console.info('JS only hoists declaration, not initializations');

// Testing. Give a message only if statement is false
const p = document.querySelector('p');
console.log(p);
console.assert(p.classList.contains('×BREAK×DOWN×'), 'That is wrong!!!');

//console.assert(1 === "1", 'This is wrong!');
// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    //console.group(`${dog.name}`); 
    //or we can use groupCollapsed to  group all strings
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Slav');
console.count('Slav');
console.count('Slav');
console.count('Slav');
console.count('John');
console.count('John');
console.count('Slav');
console.count('Slav');
console.count('John');

// timing
console.time('fetching data');
fetch('http://api.github.com/users/webos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

//output array with objects in a table
console.table(dogs);