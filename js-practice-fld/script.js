// Day 9 — Fitness Progress Analyzer

const workouts = [
  { exercise: "Bench Press", reps: 8, target: 10 },
  { exercise: "Squats", reps: 12, target: 10 },
  { exercise: "Pull-ups", reps: 5, target: 8 },
  { exercise: "Shoulder Press", reps: 10, target: 10 }
];

workouts.map((workouts) => {
  return console.log(`Excercise  : ${workouts.exercise}
Target Reps: ${workouts.reps} 
Total Reps : ${workouts.reps}`);
})

for (let val of workouts) {
  if (val.target >= val.reps) {
    console.log(`Target Achieved : ${val.exercise}`);

  } else {
    console.log(`Target Not Achieved : ${val.exercise}`);

  }
}

for (let val in workouts) {
  console.log(val, workouts[val]);

}