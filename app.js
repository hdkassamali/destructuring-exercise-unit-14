// Object Destructuring 1
// numPlanets prints 9. yearNeptuneDicsovered prints 1846.

// Object Destructuring 2
// discoveryYears: {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Object Destructuring 3
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'Your name is Alejandro and you like purple'
// getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green'
// getUserData({}) // 'Your name is undefined and you like green.

// Array Destructuring 1
// Maya
// Marisa
// Chi

// Array Destructuring 2
// "Raindrops on roses"
// "whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Array Destructuring 3
// [10, 30, 20]

// ES2015 Refactoring
// ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
// ES2015 Object Destructuring
const {numbers: {a, b}} = obj

// ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015 One-Line Array Swap with Destructuring

[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})