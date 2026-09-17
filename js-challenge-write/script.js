// Smart Event Pass & Booking Manager ;

let userNamePrompt = prompt("Enter Your Name");
let promoCode = prompt("Enter Promo Code");

let userName = userNamePrompt.toLowerCase().trim();
console.log(userName);

if (promoCode === "coding2026") {
  console.log(`Promo Code Match : ${promoCode}`);
} else {
  console.log(`Incorrect Promo Code`);
}

let ticketPrice = 1500;
let luckyDraw = Math.floor(Math.random() * (25 - 5 + 1) + 5);
let ticktFnlPrc = ticketPrice - ticketPrice * (luckyDraw / 100);
console.log(ticktFnlPrc);

let startDate = new Date("2026-09-17");
let futureDate = new Date("2026-10-1");

let diffTim = futureDate - startDate;
let diffDays = diffTim / (1000 * 60 * 60 * 24);

console.log(`${diffDays.toFixed(0)} Days Later`);

let allBooking = [];

let bookingObject = {
  userName,
  diffDays,
  promoCode,
  ticktFnlPrc,
};

let objectPush = allBooking.push(bookingObject);
console.log(objectPush);
console.log(allBooking[0]);

