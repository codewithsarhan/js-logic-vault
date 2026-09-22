// :================= "Smart Cart Invoice Generator" ===============:

const cart = [
  { name: "wireless mouse", price: 1200, quantity: 2, addedDate: "2026-09-15" },
  { name: "KEYBOARD", price: 3500, quantity: 1, addedDate: "2026-09-20" },
  { name: "usb cable", price: 450, quantity: 3, addedDate: "2026-09-10" },
];

const discountCode = "SAVE10";

for (let val of cart) {
  let firstPrt = val.name.charAt(0).toUpperCase();
  let secPrt = val.name.slice(1);
  let stroevalue = val.name;
  val.name = firstPrt.concat(secPrt);
  console.log(`Item Name :${stroevalue}`);

  let subtotal = val.price * val.quantity;
  console.log(`Subtotal :${subtotal}`);
}
