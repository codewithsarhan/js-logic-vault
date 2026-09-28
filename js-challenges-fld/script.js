// Student Grade & Performance Analyzer +++ === +++ 

let myFunction = () => {

let studentDetails = {

id : 1 ,
name : prompt("Enter Your Name") ,
student : true ,
score : Number(prompt("Enter Your Score"))

}

if (studentDetails.score >= 50) {
    
    console.log("You Passed In Exam");
    
}else{

console.log("You Failed Try Again Next Time");

}


let nameFormat = studentDetails.name.trim().toLowerCase();
console.log(nameFormat);


let scoreArray = [100,200,150,120,180];

let highestScore = Math.max(...scoreArray);
let lowestScore = Math.min(...scoreArray);
let averageScore = scoreArray.reduce((total , score) => total + score , 0);
const average = averageScore / scoreArray.length;


console.log(`High Score ${highestScore}`);
console.log(`Low Score ${lowestScore}`);
console.log(`Average Score ${average}`);

let exactDate = new Date()
exactDate.toLocaleDateString();
console.log(exactDate);

}

myFunction()