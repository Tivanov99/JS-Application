let price = document.querySelector("#Price");

let percentage= document.querySelector("#YearPercentage");

let resultElement = document.createElement('label');
resultElement.textContent = price.value * (percentage.value/100);
