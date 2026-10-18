// Day 11 — Game Shop Sales Analyzer 

const sales = [
  { item: "Sword", price: 1200, sold: 3 },
  { item: "Shield", price: 800, sold: 2 },
  { item: "Potion", price: 150, sold: 10 },
  { item: "Armor", price: 2000, sold: 1 }
];

sales.forEach((num) => {
  console.log("Sold Price : " + num.price * num.sold)
});


let total_Sales = sales.map(acc => acc.price);
console.log("Total Sales : " + total_Sales);


let high_sell = sales.filter(sale => sale.sold >= 5);
console.log(high_sell);

let total_Amount = sales.reduce((acc, curr) => {
  return acc + curr.price;
}, 0)
console.log("Total Amount :" + total_Amount);
