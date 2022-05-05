// Iteration 1: Names and Input
let driver = "Cécile";
console.log("The car driver's name is, " + driver);

let navigator = "Bérénice";
console.log(`The navigator name is, ${navigator}`);

// deux versions d'appel de variable. je préfère la version backstick car plus naturelle dans la gestion du guillemet. Elle évite de créer de façon non usuelle, un espace entre la variable appelée et le string précédent.//


// Iteration 2: Conditionals

    if (driver.length < navigator.length) {
      console.log(`The longest name is ${navigator}.`);
    } else if (driver.length > navigator.length) {
      console.log(`The longest name is ${driver}.`);
    } else {
      console.log("Same letter number");
    }

// attention, erreur à cause des backsticks (``). Pour appeler une variable avec ${}, nous devons obligatoirement utiliser les backsticks. Dans ma version, inutile de déclarer une variable intermédiaire pour la longueur des variables 'driver' et 'navigator'.//


// Iteration 3: Loops

let result = '';

  for (let i = 0; i < navigator.length; i++) {
    result += navigator[i].toUpperCase();

if (i !== navigator.length-1) {
    result += " ";
  }
}
console.log(result);

// la boucle 'for' commence par expliquer ses paramètres ou fontionnement. Ex : 'let i = 0' veut dire que nous commençons du début ; "navigator.length" signifie que notre limite est le nombre de caractères de la variable navigator ; "i++" explique un sens de la bouble qui dans notre cas est croissant. //
// nous déclarons des limites de départ et de fin ainsi qu'un sens d'exécution. //
// la suite += permet de traiter chaque caractère d'une chaine à la suite en y intégrant le résultat choisi. Exemple, je veux rajouter un séparateur entre chaque lettre d'un nom de famille. //


let reverse = "";
for (let i = navigator.length - 1; i >= 0; i--) {
  reverse += navigator[i];
}
console.log(reverse);

// dans cet exemple je démarre ma boucle en prenant en compte le nombre de caractères de Bérénice soit 8, auquel je soustrait 1. Le décompte commence donc à 7 et finira à 0. Le 0 est donc considéré comme un caractère "let i = 8 - 1". Comme "i >= 0" celà signifie qu'il s'arrete à 0 et ne peut pas être négatif. "i--" signifie un sens décroissant.//


let localeComparison = driver.localeCompare(navigator);
if (localeComparison < 0) {
  console.log("The driver's name goes first.");
} else if (localeComparison > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both got the same name?");
}

// localeCompare sert à créer un ordre alphanumérique entre deux chaines. Ceci permet de faire un classement.//


//// peut-on décider de n'utiliser que les backsticks ? ////
//// peut-on se passer des apostrophes comme équivalent guillemet sans être hors conventions ? ////
//// réserver les guillemets orthographique pour les seules "citations" est-il envisageable ? ////
//// peut-on décider de ne jamais utiliser le var par simplicité ? ////