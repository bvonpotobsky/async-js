const button = document.querySelector("button");

const API = "https://restcountries.eu/rest/v2/";

async function getData() {
  const response = await fetch(API);
  const data = await response.json();
  return data;
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

button.addEventListener("click", getData);
