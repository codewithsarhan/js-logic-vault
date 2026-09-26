// Fitness Tracker

const userDetails = {
  name: "Sarhan",
  age: 16,
  weight: 48,
  height: 174,
  todayDate: new Date(),
  joinDate: new Date("2026-06-01")
};

const workoutTimes = [120, 80, 90, 100, 94];

// Total workout minutes calculate karna
const totalWorkoutMinutes = workoutTimes.reduce(
  (accumulator, current) => accumulator + current, 
  0
);

// Calories burn calculate karna (Function)
function calculateCalories(minutes) {
  const totalCalories = minutes * 7.5;
  return Math.round(totalCalories);
}

// BMI / Mass calculate karna
function calculateBMI() {
  const heightInMeters = userDetails.height / 100;
  const bmi = userDetails.weight / (
  heightInMeters * heightInMeters);
  return bmi.toFixed(1);
}

// Gym join kiye hue kitne din ho gaye
function calculateJoinDays(joinDate, todayDate) {
  const timeDifference = Math.abs(todayDate - joinDate);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.floor(timeDifference / millisecondsPerDay);
}

// Results output
const totalCaloriesBurnt = calculateCalories(totalWorkoutMinutes);
const totalDays = calculateJoinDays(userDetails.joinDate, userDetails.todayDate);

console.log(`Hello ${userDetails.name}, you have worked out for a total of ${totalWorkoutMinutes} minutes and burnt ${totalCaloriesBurnt} calories. Keep it up!`);
console.log(`Your BMI is: ${calculateBMI()}`);
console.log(`You have been consistent for ${totalDays} days since joining!`);