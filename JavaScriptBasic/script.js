// let x = 'some';
// console.log('Push ups repetition 1');

// for (let rep = 1; rep <= 10; rep += 3) {
//     console.log(`Push ups repetition ${rep}`);
// }

// const user123 = ['Daniel', 'Gordiychenko', 'developer', ['parents', 'brothers', 'sisters'], true];

// const typesUser123 = [];


// for(let i = 0; i < user123.length; i++) {
//     typesUser123.push(typeof user123[i]);
    
//     console.log(user123[i]);
// }


// console.log(typesUser123);

// const birthYears = [1974, 1994, 2003, 2020, 1999];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//     ages.push(2023 - birthYears[i]);
// }

// console.log(ages);

//Continue & break 
// const user123 = ['Daniel', 'Gordiychenko', 'developer', 2, ['parents', 'brothers', 'sisters'], true];


// for(let i = 0; i < user123.length; i++) {
//     if (typeof user123[i] === 'number') break;
//     console.log(user123[i], typeof user123[i]);
// }

//backwards iteration & loop in loop

// console.log('BACWARDS ITERATION');

// const user123 = ['Daniel', 'Gordiychenko', 'developer', 2003, ['parents', 'brothers', 'sisters'], true];

// for (let i = user123.length - 1; i >= 0; i--) {
//     console.log(user123[i]);
// }

// console.log('LOOP IN LOOP');

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`Exercise ${exercise}`);

//     for (let repetition = 1; repetition <= 5; repetition++) {
//         console.log(`Repetition ${repetition}`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Push ups repetition ${rep}`);
// }

// let rep = 1;

// while (rep <= 10) {
//     console.log(`Push ups repetition ${rep}`);
//     rep ++;
// }

// let diceNumber = Math.trunc(Math.random() * 6) + 1;

// while (diceNumber !== 6) {
//     diceNumber = Math.trunc(Math.random() * 6) + 1;
//     console.log(diceNumber);
// }

// const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
// const tips = []; //чаевые
// const total = []; //общий счет 


// for (let i = 0; i < bills.length; i++) {
//     if (bills[i] < 20) {
//         tips.push(bills[i] * 0.2);
//     } else {
//         tips.push(bills[i] * 0.15);
//     }
//     total.push(bills[i] + tips[i]);
// }

// function calculateAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }


// console.log(`Total (tips + bills): ${total}`);
// console.log(`Average total = ${calculateAverage(total)}`); 