// JS Challenge — Gym Workout Analyzer

const exercises = ["Bench Press", "Squat", "Lat Pulldown", "Shoulder Press", "Bicep Curl"];

const reps = [10, 8, 12, 6, 15];

let total_Reps = 0;
let highest_Reps = reps[0];
let lowest_Reps = reps[0];

for (let rep of reps) {

    total_Reps += rep

    if (rep > highest_Reps) {
        highest_Reps = rep;
    }

    if (rep < lowest_Reps) {
        lowest_Reps = rep
    }
}

let average_Reps = total_Reps / reps.length;

console.log(`Total Reps : ${total_Reps}`);
console.log(`Average : ${average_Reps}`);
console.log(`Highest Reps : ${highest_Reps}`);
console.log(`Lowest Reps : ${lowest_Reps}`);

let highReps = Math.max(...reps);
let lowestReps = Math.min(...reps);

console.log(`Good : ${highReps}`);
console.log(`Need Improvement : ${lowestReps}`);
