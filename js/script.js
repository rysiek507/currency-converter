let formElement = document.querySelector(".js-form");
let countElement = document.querySelector(".js-count");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) =>{
    event.preventDefault();
    if(currencyElement.value == "eur"){
        resultElement.innerText = `Za ${countElement.value} euro dostaniesz ${(+countElement.value * 4.64).toFixed(2)} zł`;
    }else if (currencyElement.value == "usd"){
        resultElement.innerText = `Za ${countElement.value} usd dostaniesz ${(+countElement.value * 4.31).toFixed(2)} zł`;
    }else {
        resultElement.innerText = "Podano złą walutę";
    }
})