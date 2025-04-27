// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//
//     Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);

let owu = 'owu';
console.log(owu);

let com = 'com';
console.log(com);

let ua = 'ua';
console.log(ua);

let one = 1;
console.log(one);

let ten = 10;
console.log(ten);

let inf = -999;
console.log(inf);

let num = 123;
console.log(num);

const PI = 3.14;
console.log(PI);

let e = 2.7;
console.log(e);

let f = 16;
console.log(f);

let tru = true;
console.log(tru);

let fal = false;
console.log(fal);

// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = 'John';
let middleName = 'Jonsoniuk';
let lastName = 'Doe';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);

// Додаткове для тих, хто цікавився prompt`oм

// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

let name = prompt('What is your name?');
let last = prompt('What is your Lastname?');
let age = prompt('What is your age?');

console.log(`Hi, ${name} ${last}, how are you? your have ${age} years`);
