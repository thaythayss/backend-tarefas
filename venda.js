//--Dados do Pedido--

let nomeCliente = "Mao Mao";
let tipoCliente = "premium";

let nomeProduto = "Teclado Mecânico";
let precoProduto = 450.00;
let estoque = 3;
let quantidadePedido = 5;

//Tem estoque suficiente?
let estoqueOK = quantidadePedido <= estoque;

if (!estoqueOK) {
    console.log("Pedido RECUSADO - estoque insuficiente")