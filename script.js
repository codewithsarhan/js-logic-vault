function wallet(ownerName , balance){

this.ownerName = ownerName;
this.balance = balance;

console.log(this.ownerName);
console.log(this.balance);



}

const newUser = new wallet("Jamshaid" , 10000);
const secUser = new wallet("Bully" , 100000000000000000);

wallet()
