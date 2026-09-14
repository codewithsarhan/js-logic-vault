// Challenge #1

// let createHelloWorld = () => {

//      return () => {
//         return "Hello World";
//     };

// }
// const f = createHelloWorld();
// console.log(f());

// Challenge #2

// let createCounter =  (n) => {

//     return () => {

//         return n++

//     }

// }

// Challenge #3

// let expect = (val) => {
//   return {
//     toBe: (val2) => {
//       if (val === val2) {
//         return true;
//       } else {
//         throw new Error("Not Equal");
//       }
//     },

//     notToBe: (val2) => {
//       if (val !== val2) {
//         return true;
//       } else {
//         throw new Error("Equal");
//       }
//     },
//   };
// };

// Challenge #4

// let createCounter = (init) => {
  
// let currVal = init;

//   return {
//     increment: () => {
//       return ++currVal;
//     },

//     decrement: () => {
//       return --currVal;
//     },

//     reset: () => {

//       currVal = init ;  
//       return currVal;
//     },
//   };
// };

// Challenge # 5


// var map = (arr , fn) => {

// let emptyArray = [ ] ;

// for(let i = 0 ; i < arr.length ; i++){

// let result = fn(arr[i] , i)    
// emptyArray.push(result)

// }    

// return emptyArray ;

// }

// Challenge no 6 ;

// let name = "  ali hassan "
// let age = 25 ;
// let isStudent = true ;

// let nameValue = name.trim().toUpperCase();

// let afterAge = age + 5 ;

// console.log(`Student Name Is ${nameValue} Its Age ${age} and after 5 years ${afterAge}`);

