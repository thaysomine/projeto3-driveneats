let pratoEscolhido = null;
let bebidaEscolhida = null;
let sobremesaEscolhida = null;

let precoPrato;
let precoBebida;
let precoSobremesa;

let precoTotal;

let nomePrato;
let nomeBebida;
let nomeSobremesa;

// Converter 
function converte() {
    precoPrato = pratoEscolhido.getElementsByTagName("p")[2].innerText;
    precoBebida = bebidaEscolhida.getElementsByTagName("p")[2].innerText;
    precoSobremesa = sobremesaEscolhida.getElementsByTagName("p")[2].innerText;

    let soma = apenasNumeros(precoPrato) + apenasNumeros(precoBebida) + apenasNumeros(precoSobremesa)  ;
    precoTotal = (soma/100).toFixed(2);

    nomePrato = pratoEscolhido.getElementsByTagName("p")[0].innerText;
    nomeBebida = bebidaEscolhida.getElementsByTagName("p")[0].innerText;
    nomeSobremesa = sobremesaEscolhida.getElementsByTagName("p")[0].innerText;
}

// Libera botão de finalizar pedido
function liberarBotao() {
    if (pratoEscolhido !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null) {
        document.querySelectorAll(".finalizar-pedido")[0].classList.add("oculto");
        document.querySelectorAll(".finalizar-pedido")[1].classList.remove("oculto");
    }
}

// Seleciona o prato
function selecionarPratos(prato) {
    if (pratoEscolhido !== null) {
        pratoEscolhido.classList.remove("selecionado");
        pratoEscolhido.getElementsByTagName("img")[1].classList.add("oculto");
    }
    prato.classList.add('selecionado');
    prato.getElementsByTagName("img")[1].classList.remove("oculto");
    pratoEscolhido = prato;
    liberarBotao();
}
// Seleciona a bebida
function selecionarBebidas(bebida) {
    if (bebidaEscolhida !== null) {
        bebidaEscolhida.classList.remove("selecionado");
        bebidaEscolhida.getElementsByTagName("img")[1].classList.add("oculto");
    }

    bebida.classList.add('selecionado');
    bebida.getElementsByTagName("img")[1].classList.remove("oculto");
    bebidaEscolhida = bebida;
    liberarBotao();
}
// Seleciona a sobremesa 
function selecionarSobremesas(sobremesa) {
    if (sobremesaEscolhida !== null) {
        sobremesaEscolhida.classList.remove("selecionado");
        sobremesaEscolhida.getElementsByTagName("img")[1].classList.add("oculto");
    }
    sobremesa.classList.add('selecionado');
    sobremesa.getElementsByTagName("img")[1].classList.remove("oculto");
    sobremesaEscolhida = sobremesa;
    liberarBotao();
}

// mensagem de finalizar pedido
function finalizarPedido() {
    converte();

    let nome = prompt('Nome:');
    let endereco = prompt('Endereço para entrega:')

    let mensagem = `Olá gostaria de fazer o pedido:%0a- Prato: ${nomePrato}%0a- Bebida: ${nomeBebida}%0a- Sobremesa: ${nomeSobremesa}%0aPreço: R$${precoTotal}%0a%0a Nome: ${nome}%0a Endereço: ${endereco}`;
    window.open("https://wa.me/+5547992705975?text=" + mensagem);
}

// seleciona apenas os numeros
function apenasNumeros(string) 
{
    let numsStr = string.replace(/[^0-9]/g,'')
    return parseInt(numsStr);
}