const mongoose = require('mongoose');

const { Schema } = mongoose;

const presentationSchema = new Schema({ 
  nom: {type: String, unique: true},
  photo: String, 
  bio: String,
  experiences: String,
  competences: String,
});

const presentation = mongoose.model('presentation', presentationSchema);
exports.presentation = presentation;