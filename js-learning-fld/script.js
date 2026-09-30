// IIFE Concept Learn Today
// What Is IIFE  ? 
// IFFE ka means hota hain koi function apna bnaya woh emediatly run hona chaye bas ushi cheez ko iife kheta hain
// IFFE ka bhi 2 types hain named IIFE or Unnamed IIFE samjhe
// OR iife dono condition me kaam karta hai matlab normal function bhi or arrow function bhi 

(function fam(){
    console.log("This Is Named Iife");
})();

(function unFam(name){
    console.log(`This is my ${name}`);
})("sarhan");

(()=>{
console.log(`This Is Unamed IIFE`);
})();

((unname)=>{
console.log(`This Is Unnamed ${unname}`);
})("-");