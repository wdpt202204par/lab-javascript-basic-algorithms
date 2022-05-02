// Iteration 1: Names and Input
const hacker1 = "Simon";
const hacker2 = "Adriana";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name. It has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the driver has the longest name. It has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

        // 3.1. Spaced uppercase
        let spacedUpperCase     = "";
        let i = 0;

        for (i = 0; i < hacker1.length; i++) {
                spacedUpperCase += hacker1[i].toUpperCase() + " ";
        }

        console.log(spacedUpperCase);

        // 3.2. Reversed string
        let reversedString      = "";

        for (i = hacker2.length - 1; i >= 0; i--) {
                reversedString += hacker2[i];
        }

        console.log(reversedString);

        // 3.3. Lexicographic order
        const comparison = hacker1.localeCompare(hacker2);

        if (comparison > 0) {
                console.log("Yo, the navigator goes first definitely.");
        } else if (comparison < 0) {
                console.log("The driver's name goes first.");
        } else {
                console.log("What?! You both have the same name?");
        }

        // 3.3. (BIS) Lexicographic order (extra implementations without using localeCompare())

        /* The following code walks through string1 and string2 with a "while" loop until a difference is found or the shortest
         * name was completely walked through.
         *
         * Three different cases are then considered: 
         * 1. equality: both names were completely walked through without finding any difference (and the last read letter is
         * "undefined" for both of them),
         * 2. prefix: no difference was found at the end of the loop and the loop reached "undefined" for the shortest name only,
         * 3. regular inferiority: a difference was found and the shortest name comes before the longest in the lexicographic order,
         * 4. every other case: the longest name comes first in the lexicographic order.
         * 
         * Cases 2. and 3. are mutualized in a single condition.
         */

        /* The actual letter-by-letter comparison (with "<") has to be performed on "normalized" strings with homogeneous
         * letter case ('A' < 'a' but 'Adriana' and 'adriana' should be equal in lexicographic order).
         */
        let name1, name2;

        name1   = hacker1.toLowerCase();
        name2   = hacker2.toLowerCase();

        // Getting the shortest/longest name
        let shortest = name1, longest = name2;

        if (name2.length < name1.length) {      // Switching in case name1 is longer than name2
                shortest    = name2;
                longest     = name1;
        }    

        i = 0;
        while (shortest[i] === longest[i]) {
                i++;
        }

        // Case 1: equality (last letter is "undefined" for both names at the same time)
        if (shortest[i] === longest[i]) {
                console.log ("What?! You both have the same name?");
        // Case 2 and 3: prefix or shortest < longest 
        } else if (shortest[i] === undefined || name1[i] < name2[i]) {
                console.log("The driver's name goes first.");
        // Case 3: 
        } else {
                console.log("Yo, the navigator goes first definitely.");
        }

// Bonus 1
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in augue sit amet elit imperdiet luctus. 
Sed a dignissim nulla, vel pulvinar sapien. Donec vestibulum massa lobortis venenatis varius. Duis convallis nulla et nunc 
efficitur lacinia. Pellentesque aliquet quam in dolor molestie volutpat. Nullam efficitur, elit eu consequat pulvinar, lorem 
metus vehicula tortor, a sagittis nunc urna eu risus. Aenean est magna, mollis quis odio vel, vehicula venenatis arcu. Cras 
in lacus sapien. Donec eu ultrices erat, a bibendum ipsum. Donec fermentum erat quis leo interdum volutpat. Quisque semper 
volutpat dignissim. Sed aliquam diam ac tortor efficitur fermentum. Aenean quam nibh, vulputate et facilisis vel, molestie 
sit amet purus. Quisque placerat luctus dolor, eu porttitor nisl euismod a. 

Nullam consectetur ipsum interdum nisi interdum, ut congue tortor tempor. Curabitur placerat scelerisque tempor. In tincidunt 
ipsum quis consequat feugiat. Vivamus iaculis magna id purus ultricies varius. Duis luctus, ante vitae lobortis tincidunt, arcu 
diam dapibus magna, consequat tristique purus nulla quis urna. Nam venenatis purus urna. Sed consectetur tempor purus a aliquam. 
Etiam nec nisl vestibulum, laoreet mauris eu, placerat augue. Donec porttitor mauris ipsum, quis pellentesque leo rhoncus non. 

Cras ullamcorper ligula non diam semper, eget hendrerit dui egestas. Nam gravida eleifend consequat. Integer laoreet semper diam 
a accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vel faucibus 
sem. Nulla turpis turpis, volutpat rhoncus purus a, egestas vestibulum enim. Curabitur eleifend lorem ac ipsum dictum malesuada. 
Fusce at nibh dapibus, vehicula sapien nec, laoreet nisl. Vivamus non elit eu tortor maximus dignissim in ut risus. Vestibulum 
blandit ultrices cursus. Nam vulputate magna non nisl condimentum, et consequat sem placerat.`;

        // Counting the words
        i = 0;
        let words = 1;
        while (loremIpsum[i]) {
                if (loremIpsum[i] === " ") {
                        words++;
                }
                i++;
        }

        console.log(`${words} words.`);

        // Counting the "et" occurences
        i = 0;
        let et = 1;
        while (loremIpsum[i]) {
                if (loremIpsum[i] === " ") {
                        if (loremIpsum.slice(i + 1, i + 4) === "et ") {
                                et++;
                        }
                }
                i++;
        }

        console.log(`${et} "et" occurences.`);

//Bonus 2
let phraseToCheck       = "A man, a plan, a canal, Panama!";
let lowerCase           = phraseToCheck.toLowerCase()
normalized              = "";

i = 0;
while (lowerCase[i]) {      // phraseToCheck[k] === undefined when k exceeds phraseToCheck.length
        switch (lowerCase[i]) {
                case " ": case ",": case ".": case ";": case ":": case "?": case "!":   // All characters to be stripped off
                        break;
                default:
                        normalized += lowerCase[i]; // Resulting string with no ponctuation, spaces and only lowercase characters
        }
        i++;
}

// Reversing the normalized string
reversedString  = "";
for (i = normalized.length - 1; i >= 0; i--) {
        reversedString += normalized[i];
}

// Palindrome = normalized and reversedString are the same
if (normalized === reversedString) {
        console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
        console.log(`"${phraseToCheck}" is not a palindrome.`);
}