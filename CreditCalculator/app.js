let price = document.querySelector("#Price");

let percentage= document.querySelector("#YearPercentage");

let months = document.querySelector("#Months");

let button = document.querySelector("#Interest");

button.addEventListener('click',(e)=>{
    e.preventDefault();

    let resultElement = document.createElement('label');
    resultElement.textContent = `${(months.value / 12) *  (price.value * (percentage.value/100))}`;
    resultElement.classList.add('result');

    let resultDiv= document.querySelector("#resultPlace");
    resultDiv.appendChild(resultElement);
})





