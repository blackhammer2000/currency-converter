const bidCurrencyAmount = document.querySelector("[data-bid-currency-amount]");
const bidCurrencySymbol = document.querySelector("[data-bid-currency-symbol]");
const askCurrencySymbol = document.querySelector("[data-ask-currency-symbol]");
const convertButton = document.querySelector("[data-convert-button]");
const resultsDisplay = document.querySelector("[data-results-display]");

convertButton.addEventListener("click", convert);

function convert() {
  //fetch the exchange rates api.

  const API_KEY = "hG4zpDl68CjYrmgJmOTm6DHn";
  const EXCHANGE_RATES_API = `https://www1.oanda.com/rates/api/v2/rates/spot.json?api_key=${API_KEY}&base=${bidCurrencySymbol.value}&quote=${askCurrencySymbol.value}`;
  fetch(EXCHANGE_RATES_API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const { bid } = data.quotes[0];
      const convertedAmount = bidCurrencyAmount.value * bid;

      resultsDisplay.textContent = `${
        bidCurrencyAmount.value
      } ${bidCurrencySymbol.value.toUpperCase()} is equal to ${convertedAmount} ${askCurrencySymbol.value.toUpperCase()}.`;
    })
    .catch((error) => console.error(error));
}
