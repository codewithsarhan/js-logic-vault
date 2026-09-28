// QuickBite Order Summary & Bill Generator

let menuCart = [

{id : 1 , name : "sarhan" , price : 999 
, category : "beff"},

{id : 2 , name : "aliyan" , price : 199 
, category : "troast"},

{id : 3 , name : "aff" , price : 299 
, category : "chicken"},

]

let cart = [

  menuCart[1].price,
  menuCart[2].price,

]

function calculatePrice(){

cart[0] + cart[1];

}

console.log(calculatePrice());