let distance = document.querySelector("#distance");

let fuelLitters = document.querySelector("#litters")

let resultItem = document.createElement("label");
resultItem.textContent= `${(fuelLitters/distance) * 100}л/100км`;

let boddy = document.querySelector("body");
boddy.appendChild(resultItem);