let customerName = prompt("Enter Your Name");
let productPrice = prompt("Enter Your Price");
let productQuanity = prompt("Enter Your Product Quanity");
let deliveryCharges = 200;
let discountCoupon = false;
let customerType = "Regular";
let subTotal = productPrice * productQuanity;
let finalAmount = 0;
let checkoutStatus = "Standard Checkout";

if (productPrice >= 6000) {
  discountCoupon = true;
  customerType = "Premium";
} else {
  discountCoupon = false;
  customerType = "Regular";
}

if (customerType === "Premium" && productPrice >= 6000) {
  finalAmount = subTotal - subTotal * (20 / 100);
} else if (customerType === "Premium" || productPrice >= 6000) {
  finalAmount = subTotal - subTotal * (10 / 100);
} else if (discountCoupon === true) {
  finalAmount = subTotal - subTotal * (5 / 100);
} else {
  alert("Buy First");
}

if (finalAmount >= 6000) {
  console.log("Delivery Free");
} else {
  finalAmount + deliveryCharges;
}

if (finalAmount >= 10000) {
  checkoutStatus = "Vip Checkout";
} else if (finalAmount >= 7000) {
  checkoutStatus = "Premium Checkout";
} else if (finalAmount >= 5000) {
  checkoutStatus = "Priority Checkout";
} else {
  checkoutStatus = "Standard Checkout";
}

console.log(`Customer Name : ${customerName}`);
console.log(`Customer Type : ${customerType}`);
console.log(`Subtotal Price : ${subTotal}`);
console.log(`Discount Coupon : ${discountCoupon}`);
console.log(`Delivery Charges : ${deliveryCharges}`);
console.log(`Final Amount : ${finalAmount}`);
console.log(`Checkout Status : ${checkoutStatus}`);



