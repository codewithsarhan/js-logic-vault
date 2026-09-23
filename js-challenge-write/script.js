//  ++++++++++++++++++++ Smart Student Report Card ++++++++++++++++++++

let student = {
  name: "Sarhan",
  age: 16,
  subject: ["Math", "English", "Science"],
};

let marks = [85, 90, 78];

let maxScore = Math.max(...marks);
console.log(maxScore);

let averageMarks = Math.round(
  marks.reduce((sum, num) => sum + num, 0) / marks.length,
);
console.log(averageMarks);

let todayDate = new Date();
let dateString = todayDate.toDateString();

function generateReport() {
  return `Student Name: ${student.name} | Max MArks : ${maxScore} | Avg : ${averageMarks} Today Date : ${dateString}`;
}

console.log(generateReport());

