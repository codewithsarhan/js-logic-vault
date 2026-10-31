let wellcomeMsg = document.querySelector("#wellmsg");
let disc = document.querySelector('#disc');

wellcomeMsg.textContent = "Wellcome Back Bro";
disc.style.backgroundColor = "green";
disc.style.color = "white";

let ageHead = document.createElement('h2');
let profileContainer = document.createElement('div');

profileContainer.style.height = "300px"
profileContainer.style.width = "300px"
profileContainer.style.backgroundColor = "lightblue"
profileContainer.style.Color = "black"

let body = document.querySelector('body');

ageHead.textContent = "Hello"


body.appendChild(profileContainer)
profileContainer.appendChild(ageHead)

let parentCn = document.querySelector('#parentCn')
let newbtn = document.createElement('button');
newbtn.textContent = "6";
profileContainer.appendChild(newbtn)
profileContainer.replaceChild(newbtn , ageHead)
