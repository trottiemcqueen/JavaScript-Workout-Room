

//const image = document.createElement("img");

function display() {
  let bodyElement = document.getElementById("parent");
  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Let's get to work!";
  bodyElement.appendChild(paragraph);
}
paragraph.onclick = display;
