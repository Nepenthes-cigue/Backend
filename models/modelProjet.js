const mongoose = require('mongoose');

const { Schema } = mongoose;

const projetSchema = new Schema({ 
  id : {type: Number, unique: true},
  titre: {type: String, unique: true},
  descriptionIntro: String, 
  descriptionComplete: String,
  motCle: [String],
  imageTh: String,
  images: [String],
  date: Date
});

const projet = mongoose.model('projets', projetSchema);
module.exports = projet;

//Mettre image dans discord (ou github c'est mieux), ouvrir le lien dans le navigateur, et le mettre dans le code /!\Mauvaise pratique