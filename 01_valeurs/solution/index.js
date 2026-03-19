// Plan
//
// Récupérer le mot de passe
// Vérifier si le mdp contient ! ou ?
// Vérifier la longueur du mot de passe
// Les 2 critères doivent être satisfaits
// But : afficher si le mdp est valide ou non

// Pour toutes les lignes : 1 command par ligne

const password = prompt("Enter password") ?? ""; // 5 expressions
const hasPunctuation = password.includes("!") || password.includes("?"); // 9 expressions
const minLength = 12; // 1 expression
const isLongEnough = password.length >= minLength; // 4 expressions
const isValid = hasPunctuation && isLongEnough; // 3 expressions
const message = (isValid && "Valid") || "Invalid"; // 5 expressions

alert(message); // 3 expressions

// Évaluation par subsitution
//
// isValid // => false
// (isValid && "Valid") || "Invalid"
// (false && "Valid") || "Invalid"
// false || "Invalid"
// "Invalid"
//
// isValid // => true
// (isValid && "Valid") || "Invalid"
// (true && "Valid") || "Invalid"
// "Valid" || "Invalid"
// "Valid"
