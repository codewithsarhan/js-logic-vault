// Day 4 — Gaming XP Tracker

const xpEarned = [120, 250, 180];
const currentXP = 400;
const targetXP = 1000;

let totalXp = 0;

for (let val of xpEarned) {
    totalXp = totalXp += val;
}

let totalCurr = totalXp + currentXP;

let target = "";

if (totalCurr >= targetXP) {
    target = "Target Complete"
} else {
    target = "Target Incomplete"
}

let xpCheckerFunction = () => {

    console.log(`Exp Earned : ${xpEarned}
Current Exp : ${currentXP}
Target Xp : ${targetXP}
Total Exp : ${totalXp}
Total Current : ${totalCurr}`);


}
xpCheckerFunction();