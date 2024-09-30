//Створити масив [ 1, 2, 3 ]. Додати до нього в кінець наступні значення : 6, 5 , 4. Після цього до нього же додати у початок значення: -3, -2, -1

let arr = [1,2,3];
arr.push(6,5,4);
console.log(arr);

arr.unshift(-3,-2,-1);
console.log(arr);

//Створити масив [ 100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10 ]. Видалити перші два та остані три елементи цього масиву.

const arr = [100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10];
arr.splice(0, 2);
console.log(arr);

arr.splice(arr.length - 3, 3);
console.log(arr);

// Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на [1, 4, 5].

let arr = [1, 2, 3, 4, 5];

arr.splice(1,2);
console.log(arr);

//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice записати у новий масив елементи [2, 3, 4].

let arr = [1, 2, 3, 4, 5];

const safearr = arr.splice(1, 3);
console.log(safearr);

//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr = [1, 2, 3, 4, 5];

arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(arr.length - 1, 0,'c');
arr.splice(arr.length - 0, 0, 'e');
console.log(arr);

//Створити масив [1, 2, 3, 4, 5]. За допомогою методу slice зробити копію масива зі значеннями [4, 5]

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3, 5));

//Створити масив ['first', 'second', 'third', 'fourth', 'last']. Зробити копію зі значеннями  ['second', 'third'].

let arr = ['first', 'second', 'third', 'fourth', 'last'];
console.log(arr.slice(1, 3));

//Створити масив ['first', 'second', 'third', 'fourth', 'last']. Перетворити його на масив ['last', 'fourth', 'third', 'second', 'first']

let arr = ['first', 'second', 'third', 'fourth', 'last'];
arr.reverse();
console.log(arr);

//Створити масив [1, 2, [3, 4, [5]], 6, 7]. Створити на його основі масив [1, 2, 3, 4, 5, 6, 7]

let arr = [1, 2, [3, 4, [5]], 6, 7];
console.log( arr[2][2] );

const arrFlat = arr.flat(2);
console.log(arrFlat);

//Створити масив з довільними значенням та перевірити, чи є у ньому елемент, який є рядком 'secret string'.


let arr = [true, 'hello', 'cat', false, 2, 5];
console.log(arr.includes('secret string'));

//Створити масив ['first', 'second', 'third', 'fourth', 'last']. Створити новий масив методом concat якому передати наступні параметри: 1000, 2000, [true, false];

let arr = ['first', 'second', 'third', 'fourth', 'last'];
const arrConcat = arr.concat(1000, 2000, [true, false]);
console.log(arrConcat);

//Створити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль

function arrNumbers(scaleTake) {
    let arr = ['first', 'second', 'third', 'fourth', 'last'];
    for(i = 0; i < scaleTake; i++) {
        console.log(arr[i]);
    }
}

const number = +prompt('Type number from 1 to 5: ');
const result = number;
return arrNumbers(result);

//Створити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву з парними індексами послідовно в консоль

let arr = [12, 100, 25, 30, 58];
for(i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
    console.log(arr[i]);
    }
}
