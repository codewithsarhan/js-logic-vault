// Day 10 — Game Inventory Checker

const inventory = [
  { name: "Sword", price: 1200, owned: true, level: 5 },
  { name: "Shield", price: 800, owned: false, level: 0 },
  { name: "Armor", price: 2000, owned: true, level: 3 },
  { name: "Potion", price: 150, owned: false, level: 0 }
];

let ownedItems = inventory.filter((own) => {
  return own.owned === true
})

console.log(ownedItems);

let discountPrice = inventory.map((discPrc) => {
  return discPrc.price * 0.8;
})

console.log(discountPrice);

for (let items of inventory) {
  console.log(`Item: ${items.name} , Status : ${items.owned}`);

  if (items.level >= 5) {
    console.log(`Name : ${items.name} & Level : ${items.level}`);

  } else {
    console.log(`Name : ${items.name} & Level : ${items.level}`);

  }

}
