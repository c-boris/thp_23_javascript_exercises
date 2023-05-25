// Demande à l'utilisateur le nombre d'étages souhaité
let userNumber = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

// Boucle pour construire la pyramide
for (let i = 1; i <= userNumber; i++) {
  let ligne = "";

  // Ajoute les espaces nécessaires avant les "#" pour aligner la pyramide
  for (let j = 1; j <= userNumber - i; j++) {
    ligne += " ";
  }

  // Ajoute les "#" pour construire chaque ligne de la pyramide
  for (let k = 1; k <= i; k++) {
    ligne += "#";
  }

  // Affiche la ligne de la pyramide sur la console
  console.log(ligne);
}