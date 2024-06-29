let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let value = Number(score)
console.log(typeof(value));
console.log(value);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false = 0

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Sadhna"));
console.log(Boolean(""));

// 1 => true ; 0 => false
// "" => false
// "Sadhna" => true


console.log(typeof(String(33)));
