// Iteration 1: Names and Input
let driver = "Cécile";
console.log("The car driver's name is, " + driver);

let navigator = "Bérénice";
console.log("The navigator name is, " + navigator);

// Iteration 2: Conditionals
function longestName() {
    let result = '';
    if ( driver.length < navigator.length) {
      result = navigator;
    } if ( driver.length > navigator.length) {
      result = driver;
    } else {
      result = "Same letter number";
    }
  }
  
  console.log(longestName(${result}));


// Iteration 3: Loops
function upSep () {
    let upperCaseDriver = driver.toUpperCase;
    let separateUppercase = upperCaseDriver.split(" ");
    }
    console.log(upSep);
    
    function revNav () {
    let reverseNavigator = navigator.split(" ").reverse().joint("");
    }
    console.log(revNav)