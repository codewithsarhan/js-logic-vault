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

// Challenge no 7 ;

// let item1Price = " ₹ 499.99 ";
// let item2Price = "1200.50USD";
// let couponCode = "SAVE20";
// let userDiscountInput = "20"; 
// let shippingFee = null;
// let taxRate = undefined;

// let item1 = item1Price.replace("₹", "").trim();
// let cnvrtItm1 = new Number(item1);
// console.log(cnvrtItm1);

// let item2 = item2Price.replace("USD", "").trim();
// let cnvrtItm2 = new Number(item2);
// console.log(cnvrtItm2);

// let subTotal = (cnvrtItm1 += cnvrtItm2);
// console.log(subTotal);

// let userDiscount = new Number(userDiscountInput);
// console.log(userDiscount);

// if (shippingFee === null) {
//   console.log("Dilvery Free");
// }

// let finalPrice;

// if (taxRate === undefined) {
//   finalPrice = Math.max(0, subTotal - userDiscount).toFixed(2);
// }

// console.log(finalPrice);

// if (finalPrice >= 1500) {
//   console.log("Eligible for Premium Cashback");
// } else {
//   console.log("Standard Checkout");
// }
