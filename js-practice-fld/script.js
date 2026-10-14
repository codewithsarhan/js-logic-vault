// Day 6 — Game Inventory Checker

const inventory = {
    sword: 1,
    potions: 4,
    coins: 250,
    armor: 1
};

const requiredItems = ["sword", "potions", "shield"];

for (let inVal in inventory) {

    console.log(inVal, inventory[inVal]);


}


for (let reqVals of requiredItems) {

    console.log(reqVals);

    if (reqVals in inventory) {
        console.log(`Owned Items : ${reqVals}`);

    } else {
        console.log(`Missing Items : ${reqVals}`);

    }

}

