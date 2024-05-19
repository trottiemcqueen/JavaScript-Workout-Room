// pizza service delivery
const orderList = document.getElementById("orders");
const readyList = document.getElementById("outgoing");

// orders
const marinara = document.createElement("li");
marinara.innerHTML = "1 Pizza Marinara";
orderList.appendChild(marinara);

// outgoing
const pepperoni = document.createElement("li");
pepperoni.innerHTML = "3 Pizza Pepperoni w/ extra cheese";
readyList.appendChild(pepperoni);



// new message button
function display() {
  let bodyElement = document.getElementById("parent");
  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Let's get to work!";
  bodyElement.appendChild(paragraph);
}
paragraph.onclick = display;
