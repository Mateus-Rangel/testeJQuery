window.addEventListener("DOMContentLoaded", () => {
  // import "../node_modules/jquery/dist/jquery.js";
  var $ = require('jquery')
  $(".focus").hide();
  // import fn from "./functions.js";
  const fn = require('./functions.js')
  // import teste from "./teste.js";
  const teste = require('./teste.js')

  fn.GetHTML("#teste");
  teste.teste();

  $("#conteudo1").on("click", () => {
    fn.Conteudo(1);
  });

  $("#conteudo2").on("click", () => {
    fn.Conteudo(2);
  });

  $("#conteudo3").on("click", () => {
    fn.Conteudo(3);
  });
});
