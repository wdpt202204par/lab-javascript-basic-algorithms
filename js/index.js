// Iteration 1: Names and Input
let hacker1 = "Jossuha"
console.log(`The driver's name is ${hacker1}`) //1.2

let hacker2 = "Cécile"
console.log(`The navigator's name is ${hacker2}`) //1.4

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The drivers has the longest name, it has ${hacker1.length} characters`) //2.1
} else if (hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`) //2.1
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) //2.1
}

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

if (hacker1 < hacker2){
  console.log(`The driver's name goes first.`) //3.3
} else if (hacker2 < hacker1){
  console.log(`Yo, the navigator goes first definitely.`) //3.3
} else {
  console.log(`What?! You both have the same name?`) //3.3
}

// Bonus 1
lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis mollis lacinia. Maecenas ac faucibus orci. Donec sollicitudin lacus sit amet egestas tempor. Integer eu nisi tempus, facilisis dui vel, tristique libero. Donec dapibus mauris dui, id convallis mi commodo ut. Quisque ultricies arcu vel nulla euismod auctor. Duis eu tortor ipsum. Sed sed finibus risus. Curabitur elementum tellus in metus eleifend, a auctor massa lacinia. Ut faucibus enim sit amet lorem dictum vulputate. Aenean tincidunt non lacus eu interdum. Fusce ultricies et mauris et tristique. Proin quis lectus et ex porttitor aliquam sed sed ligula.

Etiam nec sodales urna, vel consequat est. Aenean tincidunt tellus vitae elit accumsan facilisis. Mauris euismod nisl quam, at ultricies nibh tincidunt eget. Curabitur augue erat, consectetur tristique metus vitae, viverra ultricies leo. Nulla bibendum ac sapien id ullamcorper. Sed vel euismod massa. Maecenas ut sem ac dolor fermentum lobortis in interdum arcu.

Maecenas eu nibh ut mi tempor hendrerit. Aliquam pellentesque est a lacinia viverra. Integer blandit eros a fermentum lobortis. Fusce ultricies eros ut lacus condimentum, nec ultrices tortor consectetur. Phasellus ut rutrum nulla, ut mollis velit. Proin non aliquam velit. Etiam elementum tincidunt lacinia. Maecenas ac velit sed erat faucibus mattis quis posuere arcu. Nunc pulvinar sem id laoreet scelerisque. Nulla eget sapien ut nisl sollicitudin tempor. Fusce pharetra in lacus sit amet volutpat.`

console.log(lorem.slice().length) // Bonus 1