//Conversion to string 

//String 
let x = String(111);
x = String(2 + 2);
x = String(true);
x = String(new Date());
x = String(['one', 'two', 'three']);


//toString
x = (35).toString();
x = (true).toString();

console.log(x);
console.log(typeof x);
console.log(x.length);


//Conversion to number 

//Number
let y = Number('5.12345');
y = Number(false);
y = Number(null);
y = Number('text');
y = Number([1, 2, 3]);

//parseInt parseFloat
y = parseFloat('123.20');

console.log(y);
console.log(typeof y);
console.log(y.toPrecision());



const first = 5;
const second = '3';
const result = x + y;

console.log(result);
console.log(typeof result);