const express = require('express'); //importando o express
const app = express(); //iniciando o express

// criar uma rota
app.get("/", function(req, res){
 res.send('<h1>Bem vindo ao Portal!</h1>') 
});
app.get("/blog/:artigo?", function(req, res){ //parametor  opcional

  var artigo = req.params.artigo;

  if(artigo){
    res.send(`<h2>Artigo ${artigo}</h2>`);
  } else {
    res.send('<h1>Bem vindo ao meu Blog!</h1>');
  }
})
app.get("/canal/youtube", function(req, res){
  var canal = req.query["canal"];
  res.send(canal);
})
app.get('/ola/:nome/:empresa', function(req, res){
  // REQ => DADOS ENVIADOS PELO USUARIO
  // RES = > RESPONSTA A SER ENVIADA PARA O USUARIO
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send(`<h1>Olá ${nome} da ${empresa}!</h1>`);
})

// Abrir o servidor é sempre a última coisa que se faz
//cria servidor, primeiro parametor é a porta, segundo uma função
app.listen(4000, function(erro){
  if(erro){
    console.log("Ocorreu um erro");
  } else {
    console.log("Servidor iniciado com sucesso");
  }
})