// var $ = require('jquery')

var listaProdutos = [
  "Caneta",
  "Lápis",
  "Borracha",
  "Lapiseira",
  "Caderno",
  "Estojo",
];
for (let i = 0; i < listaProdutos.length; i++) {
  const element = listaProdutos[i];
  const preço = Math.random() * 10;
  const preçoFinal = `R$ ${preço.toFixed(2).replace(".", ",")}`;
  const htmlToInjectTBody = `
        <tr>
            <td>${element}</td>
            <td>${preçoFinal}</td>
        </tr>
        `;
  $("#tbody-produtos").append(htmlToInjectTBody);
}
