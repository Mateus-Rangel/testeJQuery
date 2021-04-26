import "../node_modules/jquery/dist/jquery.js";
$(".focus").hide();
import fn from "./functions.js";
import teste from "./teste.js";


fn.GetHTML("#teste");
teste.teste();
// fn.ViewHTML("#htmlView", "./html/conteudo1.html");

$("#conteudo1").on("click", () => {
  fn.Conteudo(1);
});

$("#conteudo2").on("click", () => {
  fn.Conteudo(2);
});

$("#conteudo3").on("click", () => {
  fn.Conteudo(3);
});
