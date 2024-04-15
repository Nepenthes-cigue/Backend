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

server.listen (PORT, ()=>{
  console.log(`Serveur listening on port:${PORT}`);
});