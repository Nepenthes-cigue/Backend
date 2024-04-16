const express = require('express');

module.exports = function routerAdmin() {
  const router = express();

  router.get('/', (req, res) => {
    res.json({ 'message': 'page admin et analyses' });
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

  router.route('/editpresentation')
    .get((req,res)=>{
      res.json('Page edition presentation');
    })
    .post((req,res)=>{
      const {image, bio, competences, experiences} = req.body;

      try {
        console.log(`Image: ${image} - Bio: ${bio} - Competences: ${competences} - Experiences: ${experiences}`);
        res.status(200).json({ 'status': 'OK', 'content': `${image} ${bio} ${competences} ${experiences}`});
      }
      catch (err) {
        res.status(408).json({ 'status': 'ALREADY_EXIST', 'content': `${image} ${bio} ${competences} ${experiences}` });
      }
    });

  router.route('/editprojet/:titre')
    .get((req,res)=>{
      const { titre } = req.params;  
      res.json(`Page edition du projet ${titre}`);
    })

    .post((req,res)=>{
      const { titre } = req.params;
      const { descriptionIntro, descriptionComplete, motsCles, imageThumbnail, images, date} = req.body;

      try {
        console.log(`Titre: ${titre} - Description Intro: ${descriptionIntro} - Description Complete: ${descriptionComplete} - Mots Cles: ${motsCles} - Image Presentation: ${imageThumbnail} - Images: ${images} - Date: ${date}`);	
        res.status(200).json({'status': 'OK','content': `${titre} ${descriptionIntro} ${descriptionComplete} ${motsCles} ${imageThumbnail} ${images} ${date}`});
      }
      catch (err) {
        res.status(408).json({ 'status': 'ALREADY_EXIST', 'content': `${titre} ${descriptionIntro} ${descriptionComplete} ${motsCles} ${imageThumbnail} ${images} ${date}` });
      }
    })

    .delete((req,res)=>{
      const { titre } = req.params;
      try {
        console.log(`Titre: ${titre}`);	
        res.status(200).json({'status': 'OK','content':`Suppression du projet ${titre}`});
      }
      catch (err) {
        res.status(408).json({ 'status': 'ALREADY_EXIST', 'content':` ${titre}`});
      }
    });

  return router;
};