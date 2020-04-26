'use strict';

a = 5;
console.log(a);

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

// коммент 

let something;
console.log(something);

let persone ={
    name: "John",
    age: 25,
    isMarried: false
}

console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[0]);

// alert("Hello world!");

// let answer = confirm("Are you here?");

// let answer = +prompt("Есть ли вам 18?", "Да");

// console.log(typeof(answer));
// console.log(answer);

// console.log("arr" + " - object");
// console.log(4 + +" - object");

let incr =10,
    decr =10;

///  префиксная форма ++ и -- возвращает измененное значение
//  а постфиксная - старое!

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);

// % - возвращает остаток от деления

console.log(5%2);

// = - оператор присваивания
// == - оператор сравнения
// === - жесткое сравнение, включая сравнение типов, тождественное равенство

console.log("2" === 2);

let isCheked = true,
    isClose = false;

console.log(isCheked || !isClose);