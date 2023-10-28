const data = require("./data");

function getInscription(id, callback) {
  let erreur = false;
  setTimeout(() => {
    let inscription = data.inscriptions.filter(
      (inscription) => inscription.id == id
    )[0];
    callback(inscription, erreur);
  }, 2000);
}

function getClasse(id, callback) {
  let erreur = false;
  setTimeout(() => {
    let classe = data.classes.filter((classe) => classe.id == id)[0];
    callback(classe, erreur);
  }, 2000);
}

function getEleve(id, callback) {
  let erreur = false;
  setTimeout(() => {
    let eleve = data.eleves.filter((eleve) => eleve.id == id)[0];
    callback(eleve, erreur);
  }, 2000);
}

getInscription(1, (inscription, erreur) => {
  if (erreur) {
    console.error(new Error("Erreur lors de la récupération de l'inscription"));
  } else {
    getClasse(inscription.idClasse, (classe, erreur) => {
      if (erreur) {
        console.error(new Error("Erreur lors de la récupération de la classe"));
      } else {
        getEleve(inscription.idEleve, (eleve, erreur) => {
          if (erreur) {
            console.error(
              new Error("Erreur lors de la récupération de la classe")
            );
          } else {
            console.log({ inscription, classe, eleve });
          }
        });
      }
    });
  }
});
