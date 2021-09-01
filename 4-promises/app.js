const API = "https://restcountries.eu/rest/v2/";

const button = document.querySelector("button");

const flag = document.createElement("img");
document.body.appendChild(flag);

button.addEventListener("click", () => {
  console.log("Lets go!!!");
  fetch(API)
    .then((response) => {
      // throw a promise object
      return response.json();
      // catch the promise and work with it
    })
    .then((json) => {
      // manipulate the JSON data
      // set random src to the image
      const random = Math.floor(Math.random() * json.length);
      flag.src = json[random].flag;
      // set width
      flag.width = 400;
      console.log(flag);
      console.log("Flag added!!!");
    })
    .catch((err) => {
      console.error(err);
    });
  console.log("Done!!!");
});
