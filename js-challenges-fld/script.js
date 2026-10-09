// Day 1 — Shopping Budget Checker 

const budget = 2000;
const prices = [450, 300, 650, 250, 500];

let total = 0;


for (let i = 0; i < prices.length; i++) {


    total += prices[i];



}

console.log(total);

let wallet = 0;

if (total <= budget) {
    console.log("You Buy Under Budget");
    wallet = total - budget;
    console.log(`You Budget : ${budget} Your Total ${total} Money No Need ${wallet}`);



} else {
    console.log("You Buy Outer Budget Need More");
    wallet = total - budget;
    console.log(`You Budget : ${budget}, Your Total : ${total} , Money Need : ${wallet}`);


}

let shoppingData = () => {

    console.log(`Budget : ${budget}, Buying Item Prices : ${prices}, 
Total Item Prices : ${total} `);


}

shoppingData()