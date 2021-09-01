const button = document.querySelector("button");

button.addEventListener("click", () => {
  let count = 0;
  for (let i = 0; i < 10000000; i++) {
    count++;
  }

  console.log(count);

  const text = document.createElement("h1");
  text.innerHTML = "This has nothing to do with the count.";
  document.body.appendChild(text);
});
