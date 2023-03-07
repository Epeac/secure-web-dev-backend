const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  filmType: String,
  filmProducerName: String,
  filmName: String,
  filmDirectorName: String,
  realeasedate: Date,
  summary: String,
  opinion:String,
  grade: Number,
});

const Recommandation = mongoose.model("Recommandation", MovieSchema);

module.exports = Recommandation;
