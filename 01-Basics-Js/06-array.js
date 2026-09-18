// Today I Will Learn And Practice Array Concepts And Methods :-

// let marvelHeros = ["Ironman" , "CaptainAmerica" , "Thor" , "Hulk"];
// let dcHeros = ["Batman" , "Superman" , "Flash" , "Shazam"];



// Push Method :=
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// The push() method mutates the original array by appending another array in array.
// push() method jo hai woh jorta hai original array ko dusra array ka sath akhir mein array ka andar array.

// Concat Method :=
// let allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);
// concat method use for merge any 2 array and returns one new array
// concat method jo hai woh use hota ha koi bhi 2 array ko ek dusra ka sath jorna ka liya or wapis deta hai ek naya array.

// Spread Operator :=
// let spread_Array = [...dcHeros , ...marvelHeros];
// console.log([...dcHeros , ...marvelHeros]);
// Spread Operator used to Spread multiplie array in one array ;
// spread operator jo hai woh istemal hota hai bahut sara array ko ek sath ek array me karna ka liya

// Flat Method :=
// let nested_array = [1,2,3,[2,3,4,],4,[5,6,[7,8,]]];
// console.log(nested_array.flat(Infinity));
// Flat Method use to convert nested array into one array ;
// flat method istemal hota hai badalna ka liya jo ek ka andar ek hota hain unko ek array me karna ka liya 

// isArray Method :=

// let array = [1,2,3,4];
// console.log(Array.isArray("Array"))
// isArray Use for check value is array or not ;
// is array use hota hai talash karna ka liya ya jo keemat mili hai woh array hai ya nahi ;

// array.Form() method ;
// console.log(Array.from("tr"));
// Array Form Method Use To Convert only one string value to array;
// form mtehod array ka istemal hota hai ek srting value ko badlna ka liya array mein;

// array of method ;
// console.log(Array.of("number" , "mynumber" ));
// Array of method use for convert multiplie dataypes value into array
// Array of method use hota hai bahut sara dataypes value ko convert karna ka liya array mein;