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