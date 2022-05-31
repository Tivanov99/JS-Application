let price = document.querySelector("#Price");

let percentage= document.querySelector("#YearPercentage");

let months = document.querySelector("#Months");

let button = document.querySelector("#Interest");



let resultElement = document.createElement('label');

resultElement.textContent = (months / 12) *  (price.value * (percentage.value/100));


