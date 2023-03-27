const brand = 'Toyota';
const model = 'Camry';
const color = 'grey';
const year = 2023;

let carHtml;

//Old approach(before ES6)

carHtml = '<h3>' + 'Car Description' + '</h3>' + 
'<ul>' + 
'<li>Brand' + brand + '</li>' +
'<li>Model' + model + '</li>' +
'<li>Color' + color + '</li>' +
'<li>Year' + year + '</li>' +
'</ul>';

document.body.innerHTML = carHtml;

//New approuch(template literals or template string)

carHtml = `
    <h3>Car Description</h3>
    <ul>
        <li>Brand: ${brand}</li>
        <li>Mode: ${model}</li>
        <li>Color: ${color}</li>
        <li>Year ${year}</li>
        <li>Year-2 ${2020 + 3}</li>
        <li>Doors ${getDoorsNumber()}</li>
        <li>Tax ${year < 2000 ? '20%' : '10%'}</li>
    </ul>
`;

function getDoorsNumber() {
    return 5;
}

document.body.innerHTML = carHtml;