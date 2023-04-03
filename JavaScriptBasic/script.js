'use strict';

// const list = {
//   'create a new practice task': 'In Progress',
//   'make a bed': 'Done',
//   'write a post': 'To Do',
// };

// let some = 1;

// console.log(some += 1);

// function changeStatus(prop, status) {
//   list[prop] = status;
// }

// const addTask = task =>
//   task in list ? 'Property already exists!' : (list[task] = 'To Do');

// const deleteTask = delTask =>
//   delTask in list ? delete list[delTask] : 'property not found';

// function showList() {
//   const listArrayKeys = Object.keys(list);
//   const listArrayValues = Object.values(list);

//   for (let i = 0; i < listArrayKeys.length; i++) {
//     const result = `${listArrayKeys[i]}: ${listArrayValues[i]}`;
//     console.log(result);
//   }
// }

// changeStatus('write a post', 'Done');
// addTask('have a walk');
// deleteTask('have a walk');
// showList();

// const phoneBook = {
//   list: {
//     John: 123456789,
//   },
//   add(name, number) {
//     phoneBook.list[name] = number; // изменения ищите на этой строке
//   },
// };

// // создадим копию книги
// const phoneBookCopy = Object.assign({}, phoneBook);
// // очистим список контактов
// phoneBookCopy.list = {};
// // list пуст
// console.log(phoneBookCopy); // { list: {}, add: [Function: add] }

// // добавим новый контакт
// phoneBookCopy.add('Art', '123');
// // и увидим что он не добавился в phoneBookCopy
// console.log(phoneBookCopy); // { list: {}, add: [Function: add] }
// // он добавился в phoneBook
// console.log(phoneBook); // { list: { John: 123456789, Art: '123' }, add: [Function: add] }

// function addRecord(key, value) {
//   this.list[key] = value;
// }

// const list =  {
//     list: {
//         some: 1
//     },
//     addRecord
// };

// const list2 =  {
//     list: {
//         some: 1
//     },
//     addRecord
// };

// list.addRecord('do something', 'open');
// list2.addRecord('some string', 'hi');

// console.log(list);
// console.log(list2);

// const sum = (a, b) => a + b;

// console.log(sum(1, 2));

// const some = [1, 2, 3];

// const humidities = [
//   32,
//   45,
//   29,
//   19,
//   'error',
//   58,
//   71,
//   47,
//   33,
//   'error',
//   42,
//   51,
//   49,
// ];

// for (let i = 0; i < humidities.length; i++) {
//   if (typeof humidities[i] !== 'number') {
//     humidities.splice(i, 1);
//   }
// }

// const calculateHumidities = function () {
//   const minValue = Math.min(...humidities);
//   const maxValue = Math.max(...humidities);

//   return maxValue - minValue;
// };

// console.log(calculateHumidities());

// const calculateHumiditiesAmplitide = function (h1, h2) {
//   const humidities = h1.concat(h2);
//   let max = humidities[0];
//   let min = humidities[0];

//   for (let i = 0; i < humidities.length; i++)
//     if (typeof humidities[i] !== 'number') continue;
//     else if (max < humidities[i]) {
//       max = humidities[i];
//     } else if (min > humidities[i]) {
//       min = humidities[i];
//     }

//   return max - min;
// };

// console.log(
//   calculateHumiditiesAmplitide([1, '0', 2, 3, 4, 'some string'], [10])
// );

// let num =+ prompt('Enter a number');

// console.log(isFinite(num));
// console.log(Number('123.123'));
// console.log(+'123.123');

// console.log(parseInt('100px'));
// console.log(parseFloat('100.345.123'));
// console.log(parseInt('a123'));
// console.log(parseFloat('a123'));

// console.log(7e1);
