const connectBDD = require('./mongoDB'); //appel de librairie mongoose

const express = require('express');
const server = express();
const PORT = process.env.PORT;

const routerPortfolio = require('./routes/routePortfolio.js');
const routerAdmin = require('./routes/routeAdmin.js');

//Gestionnaire des routes
server.use(express.json());

server.use('/portfolio',routerPortfolio());
server.use('/admin',routerAdmin());

// server.get('/', (req,res)=>{
//   res.send('hello world');
// });
connectBDD().then(()=>{
  server.listen (PORT, ()=>{
    console.log(`Serveur listening on port:${PORT}`);
  });
}).catch((err)=>{
  console.log(err);
});

//Lien queries : https://mongoosejs.com/docs/queries.html