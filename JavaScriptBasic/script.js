// let x = 'some';
// myData = [' Daniel', 'Gordiychenko', 'developer', ['Natalya', 'Ivan']];


// danielObject = {
//     name: 'Daniel', 
//     lastname: 'Gordiychenko',
//     job: 'developer', 
//     family: ['Natalya', 'Ivan']
// };

// const baseName = 'name';

// // console.log(danielObject.name);
// // console.log(danielObject['last' + baseName]);



// const userInput = prompt('What do you want to know abot Daniel? Name, lastname, job or family members');

// if(danielObject[userInput]) {
//     console.log(danielObject[userInput]);
// } else {
//     console.log('This property does not exist. Choose between: name, lastname, job or family members');
// }


// // create new properties
// danielObject.location = 'USA';
// const telega = 'telegram';
// danielObject[telega] = '@danieldefo';

// //Challenge
// //'Daniel has 2 family members and first one is Natalya.'
// const family = danielObject['family'];


// console.log(`${danielObject.name} has ${family.length} family members and first one is ${family[0]}.`);


// danielObject = {
//     name: 'Daniel', 
//     lastname: 'Gordiychenko',
//     birhtYear: 2003,
//     job: 'developer', 
//     family: ['Natalya', 'Ivan'],
//     hasDriverLicense: true,
//     // calcAge: function() {
//     //     return 2023 - this.birhtYear;
//     // }
//     calcAge: function () {
//         this.age = 2023 - this.birhtYear;
//     },
//     getResume: function ()  {
//         if(this.hasDriverLicense === true) {
//             return 'Daniel is a 19 year old and he has a driver license.';
//         } else {
//             return 'Daniel is a 19 year old and he has not a driver license.';
//         }
//     } 
// };


// // console.log(danielObject.calcAge());
// // console.log(danielObject);

// // console.log(danielObject.calcAge());
// // console.log(danielObject.calcAge());
// // console.log(danielObject.calcAge());

// danielObject.calcAge();
// console.log(danielObject.age);

// console.log(danielObject. getResume());

// 'Daniel is a 19 year old and he has a / not driver license.'

//  const objectJack =  {
//     name: 'Jack',
//     surname: 'White',
//     weight: 79,
//     height: 1.7,
//     bmi: function () {
//         return (this.bmiResult = this.weight / (this.height ** 2));
//     }

// };

// const objectMike = {
//     name: 'Mike',
//     surname: 'Black',
//     weight: 91,
//     height: 1.93,
//     bmi: function () {
//         return (this.bmiResult = this.weight / (this.height ** 2));
//     }
// };

// objectJack.bmi();
// objectMike.bmi();


// const bmiResultJack =  objectJack.bmiResult;
// const bmiResultMike = objectMike.bmiResult;


// function howIsHigher(bmiResultJack, bmiResultMike) {
//     if(bmiResultJack > bmiResultMike) {
//         return `Jack White BMI (${objectJack.bmiResult}) is higher than Mike Black (${objectMike.bmiResult})!`;
//     } else if(bmiResultJack < bmiResultMike) {
//         return `Mike Black BMI (${objectMike.bmiResult}) is higher than Jack White (${objectJack.bmiResult})!`;
//     } else {
//         return `you have the same BMI`;
//     }
// }

// console.log(howIsHigher(bmiResultJack, bmiResultMike));

// const phoneBook = {
//     list: {
//       "John": 123456789,
//       "Jane Doe": 987654321,
//       "Jim Smith": 111111111
//     },
//   };
  
//   for (const name in phoneBook.list) {
//     console.log(name); // John
//     console.log(phoneBook.list[name] ); // 123456789
//   }


// const phoneBook = {
//     list: {
//       "John": 123456789,
//       "Jane Doe": 987654321,
//       "Jim Smith": 111111111
//     },
//   };

// const coppyPhoneBook = phoneBook;

// coppyPhoneBook.list['Jack White'] = 1232123212;

// const some = 'some';
// coppyPhoneBook.list[some] = 'red';

// delete phoneBook.list["John"];

// console.log(coppyPhoneBook);
// console.log(phoneBook);



  