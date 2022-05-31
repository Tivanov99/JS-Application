let price = document.querySelector("#Price");

let percentage= document.querySelector("#YearPercentage");

let months = document.querySelector("#Months");

let button = document.querySelector("#Interest");

button.addEventListener('click',(e)=>{
    e.preventDefault();
    let resultDiv= document.querySelector("#resultPlace");
    
    resultDiv.lastChild.remove();

    let resultElement = document.createElement('label');
    resultElement.textContent = `Лихвата в лева е : ${(months.value / 12) *  (price.value * (percentage.value/100))}лв`;
    resultElement.classList.add('result');

    resultDiv.appendChild(resultElement);
})





