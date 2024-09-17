// Iteration 1: Names and Input
let hacker1 = "Julio";

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Roberto";

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) ;
} else {
    console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops
let stored = " ";

for (let i = 0; i < hacker1.length; i++){
    
    stored += hacker1[i] + " ";
    
}
console.log(stored.toUpperCase());

let reverseStored = " ";

for (let j = hacker1.length - 1; j >= 0 ; j--){
    
    reverseStored += hacker1[j];
    
}
console.log(reverseStored);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}