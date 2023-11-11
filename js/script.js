function count() {
  const formElement = document.querySelector(".js-form");
  const countElement = document.querySelector(".js-count");
  const currencyElement = document.querySelector(".js-currency");
  const resultElement = document.querySelector(".js-result");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    switch (currencyElement.value) {
      case "eur":
        resultElement.innerText = `Za ${countElement.value} euro dostaniesz ${(
          +countElement.value * 4.64
        ).toFixed(2)} zł`;
        break;
      case "usd":
        resultElement.innerText = `Za ${countElement.value} usd dostaniesz ${(
          +countElement.value * 4.31
        ).toFixed(2)} zł`;
        break;
      default:
        resultElement.innerText = "Podano złą walutę";
    }
  });
}
count();
