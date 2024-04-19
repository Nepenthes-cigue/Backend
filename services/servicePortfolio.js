// const projet = require('../models/projet').projet;
// const presentation = require('../models/presentation').presentation;

// exports.servicesPresentation = async function (req,res) {
//   const mapresentation = await presentation.find({});
//   console.log(mapresentation);
//   res.status(200).json(mapresentation);
// };

// exports.servicesProjet = async function (req,res) {
//   const projets = await projet.find({});
//   console.log(projets);
//   res.status(200).json(projets);
// };

// exports.servicesProjetID = async function (req,res) {
//   const titre = req.params.titre;
//   const projets = await projet.findOne({titre: titre});
//   console.log(projets);
//   res.status(200).json(projets);
// };

//Dans les routes 
// router.get('/presentation', services.servicesPresentation);
// router.get('/projets/:id', service.servicesProjetID);
