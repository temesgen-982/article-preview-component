const button = document.querySelector("button");
const tooltip = document.querySelector(".share-options");

function showTooltip(){
    tooltip.classList.toggle("hidden");
    button.classList.toggle("btn-dark");
}

button.addEventListener('click', showTooltip);