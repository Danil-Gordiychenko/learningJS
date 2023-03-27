let result;
const firstName = 'Jack';
const lastName = 'Brown';
const space = ' ';
const age = 20;
const greeting = 'Hey there!'; 
const longString = 'hi, i\'m a long string.';

//Concatination 
result = firstName + space + lastName;
result = greeting + space + 'My name is' + space+ firstName + space + ' ' +lastName + ". i'm" + space + age +space + 'years old';


//Escaping 
result = 'i\'m 34 years old.';
result = "I like \"Star wars\" movie";


//Propperties and methods

//lenght
result = 'Hello!'.length;
result = firstName.length;

//concat()
result = firstName.concat(space, lastName);
result = greeting.concat(space, 'My name is ', firstName, space, lastName);

//toCase()
result = result.toUpperCase();
result = result.toLowerCase();

//arrays index 
result = firstName[0];

//indexOf()
result = 'Hello'.indexOf('l');
result = 'Hello lol'.lastIndexOf('l');

result = firstName.indexOf('a');
result = firstName.indexOf('z');

result = 'Hello lol'.indexOf('lo');

//charAt()
result = firstName.charAt(0);
result = longString.charAt(longString.length -1);

//substring()
result = greeting.substring(4, 10);

//slice()
result = greeting.slice(4, 9);
result = greeting.slice(-6);

//split()
result = longString.split(' ');
const colors = 'red, orange, green, blue';
result = colors.split(',');

//replace()
result = colors.replace('blue', 'yellow');

//include()
result = colors.includes('blue');



console.log(result);