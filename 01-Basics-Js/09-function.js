// Today I Will Learn Function In JavaScript :============

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);

// You Log Many Time But Your Time Waste This methhod use function to your work is easy and clear

// Function Made By Function Kewords And is use :===

// function myNumbers (){

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);

// }

// myNumbers()


// Parameters And Arrguments in funcion :====


// function myFunction (num1 , num2){

//     return num1 + num2

// }

// console.log(myFunction(2,3))

// ===::: Today I Will Discuss About Function In Js :::===

// Firstly Discuss Access Multiplie value in js :==

// function spreadValueFunction (...num1){

// return num1

// }

// console.log(spreadValueFunction(100,200,300,400,500,600));


let myObject = {

    name: "Sarhan ALi Ansari",
    class: 11,

}

function accessObject(myAccessObject) {

return console.log(`My Name is ${myAccessObject.name} 
and my CLass is ${myAccessObject.class}`);


}

// accessObject(myObject)
// accessObject({

//     name : "khalid" ,
//     class : 14 ,

// })


let myArray = [100,200,300,400,500,600,700];

function accessArray (arrayAccess){

return console.log(arrayAccess[4]);

}

// accessArray(myArray)
// accessArray([10,20,30,40,50,60,60])