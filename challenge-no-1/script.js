// Challenge #1 

let createHelloWorld = () => {

     return () => {
        return "Hello World";
    };

}
const f = createHelloWorld();
console.log(f()); 