let distance = document.querySelector("#distance");

let fuelLitters = document.querySelector("#litters")

let sumButton = document.querySelector("#sum");

let boddy = document.querySelector("body");


sumButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let resultItem = document.createElement("label");
    resultItem.textContent= `${((Number(fuelLitters.value)/Number(distance.value)) * 100).toFixed(2)}л на 100км`;
    boddy.appendChild(resultItem);

    CreateFile();

    });