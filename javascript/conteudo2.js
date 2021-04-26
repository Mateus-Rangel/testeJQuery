// var $ = require('jquery')
var count;
var couter;
var timer;
var timerOn;


count = 0;
$("#contador").html(count);
couter = () => {
  count++;
  $("#contador").html(count);
};

$("#testeConteudo2").html("isso é um teste de conteudo dinamico 2");

$("#iniciar").on("click", () => {
  if(timer && timerOn) return
  timer = setInterval(couter, 1000);
  timerOn = true;
});

$("#parar").on("click", () => {
  clearInterval(timer);
  timerOn = false;
});

$("#resetar").on("click", () => {
  count = 0;
  $("#contador").html(count);
});

setInterval(() => {
  console.log(timer)
}, 100);