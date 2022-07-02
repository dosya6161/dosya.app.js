// // // 1. Вывод в консоль.

console.log("Hello from JS!");


// // // 2. Переменные. 

let username = 'Mark';
console.log(username);
 
// // // 3. Типы переменные.

// //  Новый стандарт:

// // let - переменная

// // const - константа P = 3.14

// // Let - может менять значение во время работы программы. 

let username = 'Марк';
console.log(username);

username = 'Егор';
console.log(username);


// // const - не может менять значение. 

const yearofbirth = 1990

     /*-------------------------------------------------*/
let name,age;

age  = 'Yurik'
name = 'dosya' 
console.log(name,age)


// var - старый формат объявления переменной
//Вотличие оm Letuconst имеем функциональную область видимости,
// ане блочную

let age = 30; // Число 
console.log(age)

let ismerrid = true; // Логическое значение true/false

let someVariable = 'Some Volue'; // сейчас someVariable типа String
someVariable = 50; // сейчас someVariable типа number
someVariable = true;  // сейчас someVariable типа Boolean

// //  Оператор typeof
const someName = true; 
console.log(typeof someName)

// Bigint - создает большие числы!
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991 + 9007199254740991)

/* Symbol - это уникальное примитивное значение,
 Позволяет добавлять уникальное свойства к объекту,
с уверенность что он не перезапишет никакое друшое  свойство*/
let number = (2*4*8);
console.log(number)

let fruits = [2 * 4 * 6];
console.log(fruits.length);

console.log([1, 4, 3, 0, 4, 5, 4].filter(element => !(element % 2)).reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0))

var arr = [1, 2, 3, 4, 5];

arr.forEach(number => console.log(number * 2));