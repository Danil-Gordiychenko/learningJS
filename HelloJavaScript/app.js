//Primitive data types 

// String
const someText = 'Some text';
console.log(typeof someText);

//Number
const someNumber = 1;
console.log(typeof someNumber);

//Boolean
const someBoolean = false;
console.log(typeof someBoolean);

//Null
const someNull = null;
console.log(typeof someNull);

//Undefined
let someUndefined;
console.log(typeof someUndefined);

//Symbols
const someSymbols = Symbol();
console.log(typeof someSymbols);



//Reference data types 

//Array
const someArray = [1, 2, 3];
console.log(typeof someArray);

//Object Literal 
const someObjectLiteral = 
{
    firstProperty: '12',
    secondProperty: 'something'

};
console.log(typeof someObjectLiteral);

//function 
const someFunction = new Function();
console.log(typeof someFunction);

//Date
const someDate = new Date();
console.log(typeof someDate);