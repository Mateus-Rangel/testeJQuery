// var $ = require('jquery')
function GetHTML(idToShow) {
  $(".focus").hide();
  $(idToShow).show();
}

function ViewHTML(idToShow, pathHtml) {
  $(".focus").hide();
  $.ajax(pathHtml).then((resp) => $(idToShow).html(resp));
  $(idToShow).show();
}

function Conteudo(id) {
  $("#htmlView").empty();
  ViewHTML("#htmlView", `./html/conteudo${id}.html`);
}

export default {
  GetHTML,
  ViewHTML,
  Conteudo,
};

// module.exports = {
//   GetHTML,
//   ViewHTML,
//   Conteudo,
// };