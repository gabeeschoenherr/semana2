

var produto;
var quantProduto;
var quantProdutoMaior;
var i=0;


while (i!=6){
var num = Number( prompt("Escolha sua opção: (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido"));

switch (num) {
  case 1:
    produto = "Hortifruti";
    quantProduto = Number( prompt("Escolha a quantidade de itens:"));
    break;
  case 2:
    produto = "Laticínios";
    quantProduto = Number( prompt("Escolha a quantidade de itens:"));
    break;
  case 3:
    produto = "Carnes";
    quantProduto = Number( prompt("Escolha a quantidade de itens:"));
    break;
  case 4:
    produto = "Peixes";
    quantProduto = Number( prompt("Escolha a quantidade de itens:"));
    break;
  case 5:
    produto = "Aves";
    quantProduto = Number( prompt("Escolha a quantidade de itens:"));
    break;
  case 6:
    i=6;
    document.write(produto," ", quantProdutoMaior); 
    break;   
 }
 
 }

 function quant(quantProduto) {
  if(quantProdutoMaior<quantProduto){
    quantProdutoMaior = quantProduto;
  }
}
  

