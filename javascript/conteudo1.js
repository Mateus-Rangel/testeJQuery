// var $ = require('jquery')

$("#testeConteudo").html("isso é um teste de conteudo dinamico");

$("#salvar").on("click", () => {
  $("#nomes").append(`<div>Nome: ${$("#nome").val()}</div>`);
  $("#nome").val("");
});
