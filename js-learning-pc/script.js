let week = document.querySelector(".parent");
console.log(week.children);
console.log(week.firstElementChild.innerHTML);
console.log(week.lastElementChild.innerHTML);

for(let i = 0 ; i < week.children.length ; i++){

console.log( "today weak day" , week.children[i].innerHTML);

}

let monday = week.children[0];
console.log(monday.nextElementSibling.innerHTML);
console.log(monday.nextElementSibling.previousElementSibling.innerHTML);

if (week.children.length === week.childNodes.length) {
    console.log("Its Equal");
    
}else{
    console.log("Its Not Equal");
    
}