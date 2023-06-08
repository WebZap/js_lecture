"use strict";


//!_________ VARIABLES_____//
/// varios of variables
// var product;
// let item;
// const sale = 20;

/// Declare variable with value

// let productItem;
// productItem = 'Chair';

/// Declare constant variable

// const productNumber = 20

//!----------Practice---------!//

// let age;
// age = prompt('How old are you');
// alert(age);

// let productPrice = prompt('Pr20ice of product');
// alert(productPrice);

//!________________DATA TYPES_____________//
// 1)Number = 1 --- 1.99 --- infinity --- NaN
// 2)BigInt = 2313131313123131232132131231231n
// 3)String = "Vasa"; "Petya was on work"; (`${name}` decalare variable in string);
// 4)Boolean = true/false;
// 5)Null = means empty this variable. Nothing.
// 6)Undefined = means the variable without value;
// 7)Object = -!-
// 8)Symbol = -!-

// === JavaScript dynamically types language.
// === -----------let product = "chair";
// === -----------product = 5;
// === -----------alert(typeof product); //'number'

// In JavaScript we can convert data types
// Three types of transformation:
// Methods :
// --------- String. === String(123) // "123";

/* --------- Boolean. === =!= */

// --------- Number. === Number("123") // 123
// ----------------------Number("123.4") // 123.4
// ----------------------Number("123,4") // NaN
// ----------------------Number("") //0
// ----------------------Number(null) //0
// ----------------------Number(undfined) //NaN
// ----------------------Number(true) //1
// ----------------------Number(false) //0


//!-------------OBJECT -----------!/
// const user = {
//     name : 'Bob',
//     age = 32;
// }

//! ___________Base operators__________ !//
// Operator - it's symbol which tell the computor which action
// need to perform

// 1) Addition +
// 2) Substraction - 
// 3) Division /
// 4) Multiplication *
// 5) The absolute value of number %
// 6) Exponent **
// 7) Increment i++
// 8) Decrement ++i
// ----------------- i++ Return the current value, and then increase by 1
// ----------------- i-- Return the current value, and then reduce by 1
// ----------------- ++i Increase value bu 1, then return it
// ----------------- --i Reduce value bu 1, then return it
// 9) Assigment = 
// ----------------- += x = x+4 and same continue with other operators

//!----------Practice---------!//

// let age = Number(prompt('How old are you')); // 20
// let up = 17;
// let result = age + up; // 20+17
// alert(result); // 37

// --- short entry ---//
// let age = Number(prompt('How old are you'));
// alert(age + 17);

// let age = Number(prompt('How old are you'));
// let result = age + 17;
// alert(`Through 17 years you\'ll be ${result} years old`);