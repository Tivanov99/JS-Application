let price = document.querySelector("#Price");

let percentage= document.querySelector("#YearPercentage");

let months = document.querySelector("#Months");

let button = document.querySelector("#Interest");

button.addEventListener('click',(e)=>{
    e.preventDefault();
    let resultDiv= document.querySelector("#resultPlace");
    
    if(resultDiv.childNodes.length > 1){
        resultDiv.lastChild.remove();
        resultDiv.lastChild.remove();
    }

    let yearInterest = document.createElement('label');
    yearInterest.textContent = `Годишната лихвата в лева е : ${(price.value * (percentage.value/100))}лв`;
    yearInterest.classList.add('result');

    let brElement = document.createElement('br');

    let monthsInterest = document.createElement('label');
    monthsInterest.textContent = `Месечната лихвата в лева е : ${(price.value * (percentage.value/100))/months.value}лв`;
    monthsInterest.classList.add('result');

    resultDiv.appendChild(yearInterest);
    resultDiv.appendChild(brElement);
    resultDiv.appendChild(monthsInterest);
})





