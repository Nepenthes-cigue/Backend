const express = require('express');

//Une route pour lister les contents, en avoir 1, en créer, en supprimer 1, en modifier 1

module.exports = function routerContent(){
  const router = express();

  router.get('/presentation', (req,res)=>{
    res.json({'message':'Presentation'});
  });

  router.get('/projets', (req,res)=>{
    res.json({'message':'Liste des projets'});
  });

  router.get('/projets/:id', (req,res)=>{
    const {id}=req.params;
    res.json({'message':`Projet : ${id}`});
  });

  router.route('/contact')
    .get((req,res)=>{
      res.json({'message':'Contact'});
    })
    .post((req,res)=>{
      const {mail, objet, message} = req.body;

      try {
        console.log(`mail: ${mail} - objet: ${objet} - message: ${message}`);
        res.status(200).json({ 'status': 'OK', 'content': `${mail} ${objet} ${message}`});
      }
      catch (err) {
        res.status(408).json({ 'status': 'ALREADY_EXIST', 'content': `${mail} ${objet} ${message}` });
      }
    });

  router.get('/connexion',(req,res)=>{
    res.json({'message':'Page de connexion'});
  });

  return router;
};