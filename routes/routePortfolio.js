const express = require('express');

const projet = require('../model/modelProjet').projet;
const presentation = require('../model/modelPresentation').presentation;

module.exports = function routerContent(){
  const router = express();

  router.get('/presentation', async function (req,res) {
    const maPresentation = await presentation.find({});
    console.log(maPresentation);
    res.status(200).json({maPresentation});
  });

  router.get('/projets', async function (req,res) {
    const mesProjets = await projet.find({});
    console.log(mesProjets);
    res.status(200).json(mesProjets);
  });

  router.get('/projets/:id', async function (req,res) {
    const titre = req.params.titre;
    const unProjet = await projet.findOne({titre: titre});
    res.status(200).json(unProjet);
  });

  // WIP --> Pour les stats ------------------------------------//

  // router.route('/contact')
  //   // .get(async function (req,res){
  //   //   res.json({'message':'Contact'});
  //   // })
  //   .post(async function(req,res){
  //     const {mail, objet, message} = req.body;

  //     try {
  //       console.log(`mail: ${mail} - objet: ${objet} - message: ${message}`);
  //       res.status(200).json({ 'status': 'OK', 'content': `${mail} ${objet} ${message}`});
  //     }
  //     catch (err) {
  //       res.status(408).json({ 'status': 'ALREADY_EXIST', 'content': `${mail} ${objet} ${message}` });
  //     }
  //   });

  return router;
};