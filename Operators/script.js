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


const weight = prompt('Enter your weight in kilogram:');
const height = prompt('Enter your height in meters:');
const areYouOverweigh = weight / (height**2);
const result = areYouOverweigh - 25;


if (areYouOverweigh <= 25) {
    alert(message = 'No, your weight is normal');
} else if (areYouOverweigh > 25) {
    alert(message = `Yes your BMI is more than normal by ${result}`);
} else {
    alert(message = 'Incorrect parameters');
}


console.log(message);