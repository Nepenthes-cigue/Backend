const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = new Schema({ 
  identifiant: {type: String, unique: true},
  mdp: String
});

const admin = mongoose.model('admin', adminSchema);
exports.admin = admin;