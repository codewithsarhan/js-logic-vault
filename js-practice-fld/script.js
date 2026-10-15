// Day 7 — Game Quest Manager

const quests = [
  { name: "Find Key", completed: true, reward: 100 },
  { name: "Defeat Boss", completed: false, reward: 500 },
  { name: "Collect Gems", completed: true, reward: 200 },
  { name: "Rescue NPC", completed: false, reward: 300 }
];


let total = 0;

for (let val of quests) {

  console.log(`Name : ${val.name} 
Status : ${val.completed}`);


  let rewardCalc = () => {
    total += val.reward;
  }
  rewardCalc()

  if (val.completed === true) {
    console.log("All Mission Is completed");

  } else {
    console.log("Not completed");

  }

}
console.log(`Total : ${total}`);
