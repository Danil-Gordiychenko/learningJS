// const x = 2 + 10 / 2;
// const y = 10 - x > 10;

// console.log(x);
// console.log(y);

// let x, y;
// console.log(x, y);
// x = y =  10 + 5 - 3 * 4;
// console.log(x, y);

// let x = 6;
// let y = 3;
// x += 7;
// x -= 2;
// x *= 3;
// x /= 2;

// x++;
// x--;
// y = x++;

// console.log(x);
// console.log(y);

// let i = 1;
// while (i < 20) {
//     console.log(i);
//     i++;
// }

// let result;


// const age = 18;
// const isAdult = age >= 18;

// if(isAdult === true) {
//     console.log('You can wath this video');
// }

// const age = 17;

// if(age >= 18) {
//     console.log('You can wath this video');
// } else {
//     // console.log('You can\'t wath this video');
//     const yearsLeft = 18 - age;
//     console.log(`You are young. You can wath this video after ${yearsLeft} years latter`);
// }

// const birthYear = 2003;
// const yearNow = 2020;
// const age = yearNow - birthYear;


// let answer;

// if (age >= 16) {
//     answer = 'yes';
// } else {
//     answer = 'no';
// }

// console.log(`Am i adult? - ${answer}`);


// const color = 'red';

// if (color === 'green') {
//     console.log('go!');
// } else if (color === 'yellow') {
//     console.log('wait!');
// } else if (color === 'red') {
//     console.log('stop!');
// } else {
//     console.log('Incorrect color');
// }


// const weight = prompt('Enter your weight in kilogram:');
// const height = prompt('Enter your height in meters:');
// const areYouOverweigh = weight / (height**2);
// const result = areYouOverweigh - 25;


// if (areYouOverweigh <= 25) {
//     alert(message = 'No, your weight is normal');
// } else if (areYouOverweigh > 25) {
//     alert(message = `Yes your BMI is more than normal by ${result}`);
// } else {
//     alert(message = 'Incorrect parameters');
// }


// console.log(message);

// JavaScript falsy values:
// 0, '', undefined, null, NaN, false

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log(Boolean(1));
// console.log(Boolean('hi'));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(3.5));

// const age = 0;

// if (age){
//     console.log('Person was born.');
// } else {
//     console.log('Person was not born yet.');
// }

// let weight;

// if (weight) {
//     console.log('weight is defined');
// } else {
//     console.log('weight is not defined');
// }

// AND, OR, NOT

// AND &&
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && false); //false

// OR ||
// console.log(true || true); //true
// console.log(true || false || false); //true
// console.log(false || false); //false

// NOT !
// console.log(!true); //false
// console.log(!false); //true 

// const hasMoney = false;
// const isAdult = true;

// if (hasMoney || isAdult) {
//     console.log('You can buy the dring.');
// } else {
//     console.log('You can not buy the dring.');

// }

// const hasMoney = true;
// const isWithParent = false;

// if (hasMoney || isWithParent) {
//     console.log('You can buy the orange.');
// } else {
//     console.log('You can not buy the orange.');

// }

// const hasMoney = true;
// const isAdult = true;
// const isCompletelyDrung  = false;


// if (hasMoney && isAdult && !isCompletelyDrung) {
//     console.log('You can buy the dring.');
// } else {
//     console.log('You can not buy the dring.');
// }



// if (color === 'green') {
//     console.log('go!');
// } else if (color === 'yellow') {
//     console.log('wait!');
// } else if (color === 'red') {
//     console.log('stop!');
// } else {
//     console.log('Incorrect color');
// }
// const color = 'green';


// switch(color) {
//     case 'green':
//         console.log('go!');
//         break;
//     case 'yellow':
//         console.log('get ready!');
//         break;
//     case 'red':
//         console.log('stop!');
//         break;
//     default:
//         console.log('Incorrect color');
// }

// const weekday = 'Friday';

// switch (weekday) {
//     case 'Monday':
//         console.log('keep calm and pretent it is not monday');
//         break;
//     case 'Tuesday':
//         console.log('keep calm and pretent it is not Thursday');
//         break;
//     case 'Wednesday':
//         console.log('keep calm and pretent it is not Wednesday');
//         break;
//     case 'Thursday':
//         console.log('keep calm and pretent it is not Thursday');
//         break;
//     case 'Friday':
//         console.log('keep calm and pretent it is not Friday');
//         break;
//     case 'Sartuday':
//         console.log('keep calm and pretent it is not Sartuday');
//         break;
//     case 'Sunday':
//         console.log('keep calm and pretent it is not Sunday');
//         break;
//     default:
//         console.log('incorrect parameters');
// }


// // Expression:
// 2 + 2
// 37
// true && false

// // Statements:
// const number = 10;
// if(number > 0 ) {
//     const text = 'the number is positive';
// }

// console.log(`${number -2} is also positive number.`);


// const money = 100;
// const cost = 105;

// money >= cost ? console.log('You can buy it.') : console.log('You can not buy it.');

// const canYouBuyIt = money >= cost ? 'You can buy it.' : 'You can not buy it.';
// console.log(canYouBuyIt);

// let canYouBuyIt1;

// if(money >= cost) {
//     canYouBuyIt1 = 'You can buy it.';
// } else {
//     canYouBuyIt1 = 'You can not buy it.';
// }

// console.log(canYouBuyIt1);

// console.log(`you can ${money >= cost ? '' : 'not'} buy it`);



// const age = prompt('Enter your age:');
// const canBuyIt = age >= 18 ? 'You can buy it.' : 'You can not buy it.';


// alert(canBuyIt);
// console.log(canBuyIt);

// const foneBook = {
//     'Daniel': 12345,
//     'Rafael Disko': 13579,
//     'Katie Brown': 97531
// };

// foneBook['Stacie'] = 87321;
// foneBook['Daniel'] = 123456;
// delete foneBook['Katie Brown'];



// console.log(foneBook['Rafael Disko']);
// console.log(foneBook);
// array = [1, 2, 3, 4, 'some text'];

// const phoneBook = {
//     list: {
//       "John": 123456789,
//       "Jane Doe": 987654321,
//       "Jim Smith": 111111111,
//       array: 222222222
//     },
//     log() {
//           console.log(this.list); // в этом случае this.list === phoneBook.list
//     }
//   };

// phoneBook.log(); // { John: 123456789, 'Jane Doe': 987654321, 'Jim Smith': 111111111 }
// console.log(phoneBook.list);

// 'use strict';


// let hasCertificate = false;
// const passExam = true;

// if(passExam) hasCertificate = true;
// if(hasCertificate) console.log('Wow!');


// const interface = 'video';
// const package = 'MyPackege';

// 'use strict';


// function printText() {
//   console.log('Hellow to everyone!');
// }

// printText();
// printText();
// printText();

// function colorizer(item, color, number) {
//   const colorizedItem = `The ${item} is ${color}. The code of the color is #${number}`;
//   // console.log(colorizedItem);
//   return colorizedItem;
// }

// const messageFromColorizer = colorizer('ball', 'white', 111111);
// console.log(`We have the followin mesage: ${messageFromColorizer}`);

// const messageFromColorizer2 = colorizer('table', 'green', 100000);
// console.log(`We have the followin mesage: ${messageFromColorizer2}`);


// 'use strict';


// function getAge1(birthYear, yearNow) {
//   return yearNow - birthYear;
// }

// const myAge1 = getAge1(2003, 2023);
// console.log(myAge1);


// const getAge2 = function (birthYear, yearNow) {
//   return yearNow - birthYear;
// };

// const myAge2 = getAge2(2003, 2023);
// console.log(myAge2);



// const getAge3 = (birthYear, yearNow) => yearNow - birthYear;

// const myAge3 = getAge3(2003, 2023) ;
// console.log(myAge3);


// function mainSome(some, main) {
//   const result = some - main;
//   return result;
// }

// const expressionFunction =  function(some, main) {
//   const result = some - main;
//   return result;
// };

// const arrayFunction =  (some, main) => some - main;

// const canBuyIt = (birthYear, yearNow) => {
//   const age = yearNow - birthYear;
//   const isPersonOlderThan21 = age >= 21 ? 'You can buy alcohol' : 'You can not buy alcohol';
//   return isPersonOlderThan21;
// };

// const agePerson = canBuyIt(2003, 2023);
// console.log(agePerson);


// function colorMixer(color1, color2) {
//   const newColor = `${color1} + ${color2}`;
//   return newColor;
// }


// function colorizer(item, color1, color2) {
//   const color = colorMixer(color1, color2);
//   const colorizedItem = `The ${item} is ${color}.`;
//   return colorizedItem;
// }


// console.log(colorizer('book', 'white', 'red'));

// 'use strict';


const getAverage =  (firstMonth, seconsMonth, ThirdMonth) => Math.round((firstMonth + seconsMonth + ThirdMonth) / 3);

const dept1AverSales = getAverage(51000, 29842, 38501);
const dept2AverSales = getAverage(70533, 50121, 33899);


// function printBonus(dept1AverSales, dept2AverSales) {
//   const numberDept =  dept1AverSales > dept2AverSales ? '1' : '2'; 
//   const deptDifference = Math.abs(dept1AverSales - dept2AverSales);
//   const deptDifferencePercent = dept1AverSales > dept2AverSales ? (deptDifference / dept2AverSales) * 100 : (deptDifference / dept1AverSales) * 100;
//   const resultDeptDifference = `Dept ${numberDept} will get a bonus of ${deptDifferencePercent}%`;
//   return resultDeptDifference;
// }

function printBonus(dept1AverSales, dept2AverSales) {
  if(dept1AverSales > dept2AverSales && dept1AverSales >= 1.3 * dept2AverSales) {
    const percent = (dept1AverSales - dept2AverSales) / dept2AverSales *100;

    console.log(`Dept 1 will get a bonus of ${percent}%`); 

  } else if(dept2AverSales > dept1AverSales && dept2AverSales >= 1.3 * dept1AverSales) {
    const percent = (dept2AverSales - dept1AverSales) / dept1AverSales *100;

    console.log(`Dept 2 will get a bonus of ${percent}%`);

  } else {

    console.log(`No bonus in this quarter.`);
  }
}


printBonus(dept1AverSales, dept2AverSales);

