// E-Commerce Product Catalog Processor

// Server se milne waale mixed product lists
const electronics = ["Laptop", "Smartphone", "Headphones"];
const accessories = ["Smartwatch", "Power Bank"];

// Kuch complex / nested data
const rawCategories = ["Tech", ["Mobile", ["Gadgets"]], "Audio"];

// Server response ki non-array string value
const singleCategory = "Gaming";

// Multiple random product metrics (different datatypes)
const score1 = 98;
const score2 = "Top Rated";
const score3 = true;

let flat_Raw_Category = rawCategories.flat(2);
console.log(flat_Raw_Category);

let allProducts = accessories.concat(electronics);
console.log(allProducts);

let single_Category_Element = Array.from(singleCategory);
console.log(single_Category_Element);
 
let combineScore = [score1 ,score2 , score3];
console.log(combineScore);

console.log(Array.isArray(allProducts));

accessories.push(electronics);
console.log(accessories);

// Today I Will Comlplete This Challenge With Fun And Logic :=