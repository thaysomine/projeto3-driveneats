let pratoEscolhido = null;
let bebidaEscolhida = null;
let sobremesaEscolhida = null;

function selecionarPratos(classeBotao,tipoPrato) {
    const selecionado = document.querySelector(".pratos .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    pratoEscolhido = tipoPrato;

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");
}

function selecionarBebidas(classeBotao,tipoPrato) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    
    bebidaEscolhida = tipoPrato;

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");
}

function selecionarSobremesas(classeBotao,tipoPrato) {
    const selecionado = document.querySelector(".sobremesas .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    
    sobremesaEscolhida = tipoPrato;

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");
}

