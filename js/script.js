{
  const countSum = (currencyElement, countElement) => {
    const rateEUR = 4.64;
    const rateUSD = 4.31;
    switch (currencyElement.value) {
      case "eur":
        return (+countElement.value * rateEUR).toFixed(2);
      case "usd":
        return (+countElement.value * rateUSD).toFixed(2);
      default:
        return;
    }
  };

  const writeAnswer = (
    currencyElement,
    resultElement,
    countElement,
    answer
  ) => {
    switch (currencyElement.value) {
      case "eur":
        resultElement.innerText = `Za ${countElement.value} euro dostaniesz ${answer} zł`;
        break;
      case "usd":
        resultElement.innerText = `Za ${countElement.value} usd dostaniesz ${answer} zł`;
        break;
      default:
        resultElement.innerText = "Podano złą walutę";
    }
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const countElement = document.querySelector(".js-count");
      const currencyElement = document.querySelector(".js-currency");
      const resultElement = document.querySelector(".js-result");
      let answer = countSum(currencyElement, countElement);
      writeAnswer(currencyElement, resultElement, countElement, answer);
    });
  };

  init();
}
