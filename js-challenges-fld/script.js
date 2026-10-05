// Smart Event Ticket System +++++++++++++++++

let programInfo = {

    username: "sarhan",
    age: 16,
    ticketType: "student",
    eventDate: new Date("2026-10-05"),
    currentDate: new Date(),
    hasMemberShip: true,

}

let ticketPrice = 0;

switch (programInfo.ticketType) {
    case "standard":
        ticketPrice = 2000;
        console.log(ticketPrice);

        break;

    case "vip":
        ticketPrice = 1500;
        console.log(ticketPrice);
        break;

    case "student":
        ticketPrice = 1200;
        console.log(ticketPrice);
        break;

    default:
        console.log("First Buy Ticket");
        break;
}

if (programInfo.age >= 18) {
    console.log("Allowed");

} else if (programInfo.ticketType === "student") {
    console.log("Allowed as a Student");

} else {
    console.log("Not Allowed Age Or Type");

}

let ticketQuanity = 5;

if (ticketQuanity <= 5) {
    console.log(`Valid Quantity ${ticketQuanity}`);

} else if (ticketQuanity > 5) {
    console.log(`Booking Invalid ${ticketQuanity}`);

} else {
    console.log("Booking Invalid");

}

let eventBooking = "";

if (programInfo.eventDate.getDate() < programInfo.currentDate.getDate()) {
    eventBooking = "Booking Invalid Event Already Complete";
    console.log(eventBooking);

} else if (programInfo.eventDate.getDate() > programInfo.currentDate.getDate()) {
    eventBooking = "Booking Continue";
    console.log(eventBooking);

} else if (programInfo.eventDate.getDate() === programInfo.currentDate.getDate()) {
    eventBooking = "Booking Allowed"
    console.log(eventBooking);

} else {
    console.log("Booking First");

}

if (programInfo.hasMemberShip === true) {
    let totalPrice = ticketPrice * ticketQuanity;
    let finalPrice = totalPrice - (totalPrice * (10 / 100));
    console.log(`Total Price After 10% discount ${finalPrice}`);

} else {
    let totalPrice = ticketPrice * ticketQuanity;
    console.log(`Total Price : ${totalPrice}`);

}

