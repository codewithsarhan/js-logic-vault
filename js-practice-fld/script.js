const cart = [
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1200, quantity: 1 },
  { name: "Headphones", price: 800, quantity: 3 }
];

let total = 0;

cart.forEach((item) => {
  total = item.price * item.quantity;
});

console.log("Total:", total);

const cheapItems = cart.filter((item) => {
 return  item.price < 1000;
});

console.log("Cheap Items:", cheapItems);

const names = cart.map((item) => item.name.toUpperCase());

console.log("Names:", names);

if (total > 3000) {
  console.log("Free Delivery");
} else {
  console.log("Delivery Charges Apply");
}