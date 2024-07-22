// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const temp = null
const email = undefined 

console.log(typeof(temp));
console.log(typeof(email));

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 4455667777665n
console.log(typeof(bigNumber));


// Reference Type (Non premitive)

//Array, Objects, functions

const heros = ["Shaktiman" , "doreamon" , "Bheem"];
let myObj = {
    name : "Nobita",
    age : 15,
}

const myFun = function(){
    console.log("hello world");
}

console.log(typeof(myFun));