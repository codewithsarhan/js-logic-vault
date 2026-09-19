// Today I Will Learn Object in Depth : So Let's get started !!!

// let mySym = Number(133)

// let myObject = {

// name : "sarhan" ,
// age : 16 ,
// [mySym] : "sane" ,
// class : 11 ,
// email : "sarhanaliansarigoogle.com" ,
// skill : "website Development" ,

// }

// let secondObj = Object.create(null);

// console.log(myObject);
// console.log(secondObj);

// console.log(myObject.age);
// console.log(myObject[mySym]);
// console.log(mySym);
// console.log(typeof myObject[mySym]);
// console.log(myObject[mySym]);

// You Access Any String key or Outside Object Value to kindly use not dot . always use square bracket []
// This Example Is In top

// let myObject = {

// name : "sarhan" ,
// age : 16 ,
// mySym : "sane" ,
// class : 11 ,
// email : "sarhanaliansarigoogle.com" ,
// skill : "website Development" ,
// wellcomeMsg  : function(){

// console.log(`Ths is Object ${this.age}`);

// }

// }

// myObject.age = 18 ;
// Object.freeze(myObject)
// console.log(myObject.name = "azur");

// myObject.wellcomeMsg()

// ++++++++++++++++++++++++++++ In English Review +++++++++++++++++++++++++++++

// Today, I learned about JavaScript Objects in depth. First, I learned that JavaScript has two main ways to create objects: Object Literals and the Object Creation Method (Object.create()).

// Object Literals are non-singleton objects, which means we can create multiple copies of them. On the other hand, the constructor method is used when we want to follow a singleton-like pattern. Developers prefer Object Literals 99% of the time because they are simple, easy to write, and use key-value pairs.

// We can access object keys and values in two ways:

// Dot Notation (.): You write the object name followed by a dot, and you can directly access the keys.

// Square Bracket Notation ([]): Since JavaScript internally treats all keys as strings or Symbols, we use square brackets [] when we work with Symbol keys, dynamic variables, or property names with spaces.

// Next, I learned about the Object.freeze() method. This is a very useful method because once you pass an object into Object.freeze(myObject), its values cannot be modified or updated anymore.

// Finally, when we write a function (method) inside an object and want to access other keys of that same object, we simply use the this keyword (for example, this.keyName).
