const name = "abc"
const repoCount = 50

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ABCD-EFGH-IJklm-nop')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));


console.log(gameName.indexOf('A'));

const newString = gameName.substring(0 , 5)
console.log(newString);

 const anotherString = gameName.slice(-1)
console.log(anotherString);

const newString1 = "   abc   "
console.log(newString1.trim());

const url = "http://abc%20xyz.com"
console.log(url.replace('%20' , '-'))

console.log(url.includes('abc'));

console.log(gameName.split('-'));