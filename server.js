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

//dans services
//BDD
// 

// exports.servicesIDPokemonBDD = async function (id) {
//   const choix_id = 28
//   const pokemons = await Pokemon.findOne({ id: choix_id })
//   return pokemons
// }

// exports.servicesSearchPokemonBDD = async function (hp, type) {
//   let query = {}
//   if (hp != undefined) {
//       query["base.HP"] = { $gte: hp } //gte = greater than or equal
//   }
//   if (type != undefined) {
//       query['type.0'] = type
//   }

//   const pokemons = await Pokemon.find(query)
//   return pokemons
// }

// exports.servicesLoginBDD = function (login, mdp) { //A REVOIR
//   data = fs.readFileSync("./users.json") //on lit le fichier  "." -> racine du projet  ".." -> retour arriere
//   const tabUsers = JSON.parse(data) //on parse le contenu du fichier -> on obtient un tableau d'objets (json)
//   const user = tabUsers.find(user => user.email == login && user.mdp == mdp) //find = boucle for qui passe dans tous les users du json, on cherche l'utilisateur dans le tableau
  
//   if (user == undefined) {
//       return {message: "Utilisateur inconnu"}
//   }
//   else {
//       return {message: "Utilisateur connu", token: hote.generateAccessToken(user)}
//   }
// }

// exports.servicesCreateUser = async function (email, mdp) {
//   let new_user = await user.create({ email: email, password: mdp });

//   return new_user
// }
// // https://mongoosejs.com/docs/7.x/docs/api/model.html#Model.create()