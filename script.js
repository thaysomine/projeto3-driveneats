let pratoEscolhido = 0;
let bebidaEscolhida = 0;
let sobremesaEscolhida = 0;

function selecionarPratos(classeBotao) {
    const selecionado = document.querySelector(".pratos .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");

}

function selecionarBebidas(classeBotao) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    
    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");

}

function selecionarSobremesas(classeBotao) {
    const selecionado = document.querySelector(".sobremesas .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    
    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");

}

