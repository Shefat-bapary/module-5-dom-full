const plesesList = document.getElementById('plases-container');
// console.log(plesesList.firstChild);
// console.log(plesesList.lastChild);
// console.log(plesesList.childNodes);
// console.log(plesesList.childNodes[1]);
// console.log(plesesList.childNodes[3].childNodes);
// console.log(plesesList.parentNode.nextSibling);
// console.log(plesesList.removeChild(list.firstChild));


function myFunction() {

// Create an "li" node:
const node = document.createElement("li");

// Create a text node:
// const textnode = document.createTextNode("Water");
node.innerText = "Water";

// Append the text node to the "li" node:
// node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("plases-list").appendChild(node);
}
myFunction()