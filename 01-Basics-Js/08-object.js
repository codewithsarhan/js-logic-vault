
// Object Acces Trick Learn :==========================================

// let myObj = {
//   name: "sarhan ali ansari",
//   id: 1,
//   email: "sajiiai@gamail.com",
//   eduction: {
//     myeduction: {
//       firstName: "sarhan",
//       lastName: "ali",
//     },
//   },
// };


// Access any nested object using this method but one method is more better than is 
// Scroll Down And CheckOUt
// console.log(myObj.eduction.myeduction.firstName);

// This Method is More BetterThan Simple dot Notation using ? question mark one example hre
// console.log(myObj?.eduction?.myeduction?.firstName);

// Object Combine Trick Learn :====================================

let obj1 = { 1:"A" , 2:"B"}
let obj2 = { 3:"C" , 4:"D"}

// console.log(Object.keys(obj1));
// console.log(Object.entries(obj1));
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));


// let objc3 = Object.assign(obj1 , obj2)
// let objc3 = Object.assign( {} , obj1 , obj2)
// let objc3 = {...obj1 , ...obj2}
// console.log(objc3);

// So We Will Learn Object Merging Method Complete :==================


// Object Destructuring :================

// let myObject = {

// name : "sarhan" ,
// age : 15 ,
// isLoggedIn : false ,

// }

// let {isLoggedIn : login} = myObject;
// console.log(login);
