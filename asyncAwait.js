const data = require("./data");

function getInscription(id) {
  let erreur = false;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inscription = data.inscriptions.filter(
        (inscription) => inscription.id == id
      )[0];
      if (!erreur) {
        resolve(inscription);
      } else {
        reject(new Error("Erreur lors de la recuperation de l'inscription"));
      }
    }, 2000);
  });
}

function getClasse(inscription) {
  let erreur = false;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let classe = data.classes.filter(
        (classe) => classe.id == inscription.idClasse
      )[0];
      if (!erreur) {
        resolve({ inscription, classe });
      } else {
        reject(new Error("Erreur lors de la recuperation de la classe"));
      }
    }, 2000);
  });
}

function getEleve(inscriptionClasse) {
  let erreur = false;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let eleve = data.eleves.filter(
        (eleve) => eleve.id == inscriptionClasse.inscription.idEleve
      )[0];
      if (!erreur) {
        resolve({
          inscription: inscriptionClasse.inscription,
          classe: inscriptionClasse.classe,
          eleve,
        });
      } else {
        reject(new Error("Erreur lors de la recuperation de l'eleve"));
      }
    }, 2000);
  });
}

(async () => {
  try {
    const inscription = await getInscription(2);
    const inscriptionClasse = await getClasse(inscription);
    const allData = await getEleve(inscriptionClasse);
    console.log(allData);
  } catch (error) {
    console.error(error);
  }
})();
