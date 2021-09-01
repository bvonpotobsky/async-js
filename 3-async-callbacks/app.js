// Async
function showImage(url, type, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = type;

  xhr.onload = function () {
    callback(xhr.response);
  };
  xhr.send();
}

function createImage(blob) {
  const objectURL = URL.createObjectURL(blob);
  const imageElement = document.createElement("img");
  imageElement.src = objectURL;
  document.body.appendChild(imageElement);
}

showImage("apple.png", "blob", createImage);

// Sync
const fruits = ["Orange", "Apple", "Kiwi"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
