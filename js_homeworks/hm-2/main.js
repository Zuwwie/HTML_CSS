// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let arr = [1, 2, 3, 4, 5, 6, 7, 'js', true, false, 10];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.


let obj1 = {
    title: 'kolobok',
    pageCount: 313,
    genre: 'story'
}

let obj2 = {
    title: 'ripka',
    pageCount: 232,
    genre: 'tails'
}

let obj3 = {
    title: 'shadov',
    pageCount: 568,
    genre: 'drama'
}

// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let obj4 = {
    title: 'kolobok',
    pageCount: 313,
    genre: 'story',
    authors: ['vasiya', 'petya']
}

let obj5 = {
    title: 'ripka',
    pageCount: 232,
    genre: 'tails',
    authors: ['ann', 'yaryna']

}

let obj6 = {
    title: 'shadov',
    pageCount: 568,
    genre: 'drama',
    authors: ['vova', 'victor']
}

// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [{
    name: 'ann',
    username: 'ann123',
    password: 'password'
}, {
    name: 'vova',
    username: 'vova432',
    password: 'passwordqer'
}, {
    name: 'nazar',
    username: 'nazik',
    password: 'naik3284'
}, {
    name: 'kate',
    username: 'moon',
    password: 'ajknsdjkas'
}, {
    name: 'vika',
    username: 'vika11',
    password: 'passworddd'
}, {
    name: 'vika',
    username: 'dogvika',
    password: 'password'
}, {
    name: 'ann',
    username: 'annqqq123',
    password: 'hbgkhj'
}, {
    name: 'oksana',
    username: 'mak5555',
    password: 'june2020'
}, {
    name: 'max',
    username: 'max007',
    password: 'password007'
}, {
    name: 'max',
    username: 'minecraft',
    password: 'loveminecraft'
}, {
    name: 'orest',
    username: 'orestBest',
    password: 'orestTheBest'
},]

console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);


// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let weather = [{
    day: 'Monday', temp: [3, 7, 2]
}, {
    day: 'Tuesday', temp: [3, 7, 2]
}, {
    day: 'Wednesday', temp: [3, 7, 2]
}, {
    day: 'Thursday', temp: [3, 7, 2]
}, {
    day: 'Friday', temp: [3, 7, 2]
}, {
    day: 'Saturday', temp: [3, 7, 2]
}, {
    day: 'Sunday', temp: [3, 7, 2]
}
];

// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = -3;

x !== 0 ? console.log('Вірно', x) : console.log('Невірно');

// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).

let time = 45;

if (time < 15) {
    console.log('першу', time);
} else if (time >= 15 && time < 30) {
    console.log('другу', time);
} else if (time >= 30) {
    console.log('третю', time);
} else if (time >= 45) {
    console.log('четверту', time);
}

// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю)

let day = 12;

if (day < 10) {
    console.log('першу', day);
} else if (day >= 10 && day < 20) {
    console.log('другу', day);
} else if (day >= 20 && day < 31) {
    console.log('третю', day);
} else {
    console.log('error')
}

// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNum = 2;

// let dayNum = +prompt('enter day number');

switch (dayNum) {
    case 0:
        console.log('eat');
        console.log('go to work');
        console.log('sleep');
        break;
    case 1:
        console.log('eat');
        console.log('go to work');
        console.log('sleep');
        break;
    case 2:
        console.log('eat');
        console.log('go to work');
        console.log('sleep');
        break;
    case 3:
        console.log('eat');
        console.log('go to work');
        console.log('sleep');
        break;
    case 4:
        console.log('eat');
        console.log('go to work');
        console.log('sleep');
        break;
    case 5:
        console.log('eat');
        console.log('go to work');
        console.log('sleep');
        break;
    case 6:
        console.log('eat');
        console.log('go to jym');
        console.log('play dota')
        console.log('sleep');
        break;
    case 7:
        console.log('eat');
        console.log('go to church');
        console.log('walk')
        console.log('sleep');
        break;
    default:
        console.log("Please enter a day number from 0 to 7!");
}

// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.


let one = 10, two = 20;

if (one === two) {
    console.log(`${one} = ${two}`);
} else one > two ? console.log(`${one}`) : console.log(`${two}`);

// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x2 = undefined;
console.log(x2);
x2 ? console.log(`not bad`) : x2 = 'default';
console.log(x2);

// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration' > 5]) {
    console.log('Супер')
}
if (coursesAndDurationArray[1]['monthDuration' > 5]) {
    console.log('Супер')
}
if (coursesAndDurationArray[2]['monthDuration' > 5]) {
    console.log('Супер')
}
if (coursesAndDurationArray[3]['monthDuration' > 5]) {
    console.log('Супер')
}
if (coursesAndDurationArray[4]['monthDuration' > 5]) {
    console.log('Супер')
}
if (coursesAndDurationArray[5]['monthDuration' > 5]) {
    console.log('Супер')
}

