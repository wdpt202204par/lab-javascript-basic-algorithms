// Iteration 1: Names and Input
let hacker1 = "Jossuha"
console.log(`The driver's name is ${hacker1}`) //1.2

let hacker2 = "Cécile"
console.log(`The navigator's name is ${hacker2}`) //1.4

// Iteration 2: Conditionals


// Iteration 3: Loops// Iteration 1: Names and Input
let hacker1Loop = ""
for (let i = 0; i < hacker1.length; i++){
  hacker1Loop = hacker1Loop + hacker1[i].toUpperCase() + " "
}
console.log(hacker1Loop) //3.1

let hacker2Loop = ""
for (let i = hacker2.length - 1; i >= 0; i--){
  hacker2Loop = hacker2Loop + hacker2[i]
}
console.log(hacker2Loop) //3.2