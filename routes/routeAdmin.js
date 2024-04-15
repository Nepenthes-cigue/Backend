const express = require('express');

module.exports = function routerAdmin() {
  const router = express();

  router.get('/', (req, res) => {
    res.json({ 'message': 'page admin' });
  });

  router.post('/connexion',(req,res)=>{
    const {id, mdp} = req.body;
  
    try {
      console.log(`id: ${id} - mdp: ${mdp}`);	
      res.status(200).json({'status': 'OK','content': `${id} ${mdp}`});
    }
    catch (err) {
      res.status(408).json({ 'status': 'ALREADY_EXIST', 'content': `${id} ${mdp}` });
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
      const { id } = req.params;  
      res.json(`Page edition du projet ${id}`);
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
    });

  router.get('/analyses', (req, res) => {
    res.json({ 'message': 'analyses' });
  });

  //   router.get('/:id', (req, res) => {
  //     const { id } = req.params;
  //     res.json({ 'message': `user : ${id}` });
  //   });

  return router;
};