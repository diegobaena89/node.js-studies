//carrega o móduclo HTTP do node na variável http
//este móduclo já vem inserido no Node
var http = require("http");

//criar servido http na máquina, na porta 8181
http.createServer(function(requisicao, resposta){
  resposta.end("<h1> Bem Vindo ao site! </h1><br><h4>Navegar pelo site</h4><hr />");
}).listen(8181); //pode colocar qualquer núemro
console.log("O servidor está rodando");
