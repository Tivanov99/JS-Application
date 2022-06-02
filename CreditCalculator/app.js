let price = document.querySelector("#Price");

let percentage = document.querySelector("#YearPercentage");

let months = document.querySelector("#Months");

let button = document.querySelector("#Interest");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let resultDiv = document.querySelector("#resultPlace");

  if (resultDiv.childNodes.length > 0) {
    while (resultDiv.childNodes.length > 0) {
      resultDiv.lastChild.remove();
    }
  }

  let priceValue = price.value;
  let percentageValue = percentage.value;
  let monthsValue = months.value;

  if (
    priceValue != "" &&
    !isNaN(priceValue) &&
    percentageValue != "" &&
    !isNaN(percentageValue) &&
    monthsValue != "" &&
    !isNaN(monthsValue)
  ) {
    let yearInterest = document.createElement("h2");
    yearInterest.textContent = `Годишната лихвата в лева е : ${
      (price.value * (percentage.value / 100)) / (months.value / 12)
    }лв`;
    yearInterest.classList.add("result");

    let brElement = document.createElement("br");

    let monthsInterest = document.createElement("h2");
    monthsInterest.textContent = `Месечната лихвата в лева е : ${
      (price.value * (percentage.value / 100)) / months.value
    }лв`;
    monthsInterest.classList.add("result");

    resultDiv.appendChild(yearInterest);
    resultDiv.appendChild(brElement);
    resultDiv.appendChild(monthsInterest);
  } else {
    let errorMessage = document.createElement("h2");
    errorMessage.textContent = "Невалидни входни данни!";
    errorMessage.classList.add("error-message");
    resultDiv.appendChild(errorMessage);
  }
});
