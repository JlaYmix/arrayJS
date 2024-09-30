//task 1

let arr = [1,2,3];
arr.push(6,5,4);
console.log(arr);

arr.unshift(-3,-2,-1);
console.log(arr);

//task 2

const arr = [100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10];
arr.splice(0, 2);
console.log(arr);

arr.splice(arr.length - 3, 3);
console.log(arr);

//task 3

let arr = [1, 2, 3, 4, 5];

arr.splice(1,2);
console.log(arr);

//task 4

let arr = [1, 2, 3, 4, 5];

const safearr = arr.splice(1, 3);
console.log(safearr);

//task 5

let arr = [1, 2, 3, 4, 5];

arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

//task 6

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(arr.length - 1, 0,'c');
arr.splice(arr.length - 0, 0, 'e');
console.log(arr);

//task 7

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3, 5));

//task 8

let arr = ['first', 'second', 'third', 'fourth', 'last'];
console.log(arr.slice(1, 3));

//task 9

let arr = ['first', 'second', 'third', 'fourth', 'last'];
arr.reverse();
console.log(arr);

//task 10

let arr = [1, 2, [3, 4, [5]], 6, 7];
console.log( arr[2][2] );

const arrFlat = arr.flat(2);
console.log(arrFlat);

//task 11

let arr = [true, 'hello', 'cat', false, 2, 5];
console.log(arr.includes('secret string'));

//task 12;

let arr = ['first', 'second', 'third', 'fourth', 'last'];
const arrConcat = arr.concat(1000, 2000, [true, false]);
console.log(arrConcat);

//Bonus task 1

function arrNumbers(scaleTake) {
    let arr = ['first', 'second', 'third', 'fourth', 'last'];
    for(i = 0; i < scaleTake; i++) {
        console.log(arr[i]);
    }
}

const number = +prompt('Type number from 1 to 5: ');
const result = number;
return arrNumbers(result);

//bonus task 2

let arr = [12, 100, 25, 30, 58];
for(i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
    console.log(arr[i]);
    }
}