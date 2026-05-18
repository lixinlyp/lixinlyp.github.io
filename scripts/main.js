/* const myHeading = document.querySelector("img");
myHeading.onclick = function () {
  const mySrc = myHeading.getAttribute("src");
  if (mySrc === "images/website-screenshot.png") {
    myHeading.setAttribute("src", "images/2.png");
  } else {
    myHeading.setAttribute("src", "images/website-screenshot.png");
  }
}
 */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  console.log(typeof(myName));
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};