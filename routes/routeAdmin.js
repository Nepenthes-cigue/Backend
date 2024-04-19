const express = require('express');
const admin = require('../models/modelAdmin').admin;
const projet = require('../models/modelProjet').projet;

module.exports = function routerAdmin() {
  const router = express();

  router.get('/', (req, res) => {
    //WIP - Authentification
    //WIP - Analytics
    res.status(200).json('page Admin');
  });

  router.post('/connexion',(req,res)=>{
    const {identifiant, mdp} = req.body;
  
    try {
      console.log(`identifiant: ${identifiant} - mdp: ${mdp}`);	
      res.status(200).json({'status': 'OK','content': `${identifiant} ${mdp}`});
    }
    catch (err) {
      res.status(408).json({ 'status': 'ALREADY_EXIST', 'content': `${identifiant} ${mdp}` });
    }
  });

  router.post('/projet', async function (req,res) {
    try {
      let projet = {
        id : req.params.id,
        titre: req.body.titre,
        descriptionIntro: req.body.descriptionIntro,
        descriptionComplete: req.body.descriptionComplete,
        motCle: req.body.motCle,
        imageTh: req.body.imageTh,
        images: req.body.images,
        date: req.body.date
      };
      let monProjet = await projet.create(projet);
      console.log(monProjet);	
      res.status(200).json(monProjet);
    }
    catch (error) {
      res.status(408).json({message : error.message});
    }
  });

  router.route('/projet/:id')
    .put(async function (req,res) {
      try {
        let projet = {
          id : req.params.id,
          titre: req.body.titre,
          descriptionIntro: req.body.descriptionIntro,
          descriptionComplete: req.body.descriptionComplete,
          motCle: req.body.motCle,
          imageTh: req.body.imageTh,
          images: req.body.images,
          date: req.body.date
        };
        let monProjet = await projet.updateOne(projet);
        console.log(monProjet);	
        res.status(200).json(monProjet);
      }
      catch (error) {
        res.status(408).json({message : error.message});
      }

    })

    .delete(async function (req,res) {
      try {
        let projet = {
          id : req.params.id,
          titre: req.body.titre,
          descriptionIntro: req.body.descriptionIntro,
          descriptionComplete: req.body.descriptionComplete,
          motCle: req.body.motCle,
          imageTh: req.body.imageTh,
          images: req.body.images,
          date: req.body.date
        };
        let monProjet = await projet.deleteOne(projet);
        console.log(monProjet);	
        res.status(200).json(monProjet);
      }
      catch (error) {
        res.status(408).json({message : error.message});
      }

    });

  return router;
};