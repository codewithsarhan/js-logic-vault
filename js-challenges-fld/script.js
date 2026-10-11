// Day 3 — E-commerce Order Checker 

const prices = [800, 450, 600];
const budget = 2000;
const deliveryFee = 150;

let total = 0;

for (let val of prices) {

    total = total += val;

}


let finalPrice = total + deliveryFee;


let bugetTracker = "";

if (finalPrice <= budget) {
    bugetTracker = "Buy Item Under budget"

} else {
    bugetTracker = "Budget Out"

}

let finalBill = () => {

    console.log(`Prices :- ${prices}
Budget :- ${budget}
DeliveryFee :- ${deliveryFee}
Total Bill :- ${total}
Final Prices :- ${finalPrice}
Budget Tracker :- ${bugetTracker} `);


}

finalBill();