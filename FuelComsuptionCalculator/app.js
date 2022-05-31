let distance = document.querySelector("#distance");

let fuelLitters = document.querySelector("#litters")

let sumButton = document.querySelector("#sum");

let boddy = document.querySelector("body");



sumButton.addEventListener('click',(e)=>{
    e.preventDefault();
    let resultItem = document.createElement("label");
    resultItem.textContent= `${(fuelLitters/distance) * 100}л/100км`;
    boddy.appendChild(resultItem);

})