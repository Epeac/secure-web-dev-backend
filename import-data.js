const mongoose = require("mongoose");
require("dotenv").config();

const Recommandation = require("./src/recommandation/recommandation.model");

const Movie = require("./Film.json");

function buildMovie(Movie) {
  return {
    filmType: Movie.fields.type_tournage,
    filmProducerName: Movie.fields.nom_producteur,
    filmName: Movie.fields.nom,
    filmDirectorName: Movie.fields.nom_realisateur,
    realesedate: Movie.fields.annee_tournage,
    summary: Movie.fields.summary,
    opinion: Movie.fields.opinion,
    grade: Movie.fields.grade,
  };
}

async function importBulkMovie() {
  const MovieArray = Movie.map((Movie) =>
    buildMovie(Movie)
  );
  await Recommandation.insertMany(MovieArray);
}
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Import script connected to database, starting import.");
  await importBulkMovie();
  console.log("Finished importing.");
}

main();
