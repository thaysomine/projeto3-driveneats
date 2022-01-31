let pratoEscolhido = null;
let bebidaEscolhida = null;
let sobremesaEscolhida = null;

let precoPrato = null;
let precoBebida = null;
let precoSobremesa = null;

// Libera nosso botão
function liberarBotao() {
    if (pratoEscolhido !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null) {
        const concluir = document.querySelector(".finalizar-pedido");
        concluir.classList.add("concluir");
        const fechar = document.querySelector(".fecharTexto")
        fechar.innerHTML = "Fechar pedido";
        fechar.classList.add("fecharTextoCentralizado");
    }
}

// Seleciona o prato
function selecionarPratos(classeBotao,tipoPrato,preco) {
    const selecionado = document.querySelector(".pratos .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    pratoEscolhido = tipoPrato;
    precoPrato = preco;

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");

    liberarBotao();
}

function selecionarBebidas(classeBotao,tipoPrato,preco) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    
    bebidaEscolhida = tipoPrato;
    precoBebida = preco;

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");

    liberarBotao();
}

function selecionarSobremesas(classeBotao,tipoPrato,preco) {
    const selecionado = document.querySelector(".sobremesas .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    
    sobremesaEscolhida = tipoPrato;
    precoSobremesa = preco;

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");

    liberarBotao();
}

function finalizarPedido() {
    let mensagem = "Olá gostaria de fazer o pedido: \n" +
    "- Prato: " + pratoEscolhido + "\n" + 
    "- Bebida: " + bebidaEscolhida + "\n" +
    "- Sobremesa: " + sobremesaEscolhida + "\n";

    window.open("https://wa.me/+5547992705975?text=" + mensagem);
}