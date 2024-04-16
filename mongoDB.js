const mongoose = require('mongoose'); //appel de librairie mongoose

async function connectDB() {
  try {
    await mongoose.connect(process.env.BDD);
    console.log('Connexion à la base de données réussie');
  } 
  catch (error) {
    throw error;
  }
}

module.exports = connectDB;