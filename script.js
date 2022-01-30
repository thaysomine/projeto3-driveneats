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

    if (pratoEscolhido !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null) {
        const concluir = document.querySelector(".finalizar-pedido");
        concluir.classList.add("concluir");
        const fechar = document.querySelector(".fecharTexto")
        fechar.innerHTML = "Fechar pedido";
        fechar.classList.add("fecharTextoCentralizado");
    }
}

function selecionarBebidas(classeBotao,tipoPrato) {
    const selecionado = document.querySelector(".bebidas .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    
    bebidaEscolhida = tipoPrato;

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");

    if (pratoEscolhido !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null) {
        const concluir = document.querySelector(".finalizar-pedido");
        concluir.classList.add("concluir");
        const fechar = document.querySelector(".fecharTexto")
        fechar.innerHTML = "Fechar pedido";
        fechar.classList.add("fecharTextoCentralizado");
    }
}

function selecionarSobremesas(classeBotao,tipoPrato) {
    const selecionado = document.querySelector(".sobremesas .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    
    sobremesaEscolhida = tipoPrato;

    const botao = document.querySelector(classeBotao);
    botao.classList.add("selecionado");

    if (pratoEscolhido !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null) {
        const concluir = document.querySelector(".finalizar-pedido");
        concluir.classList.add("concluir");
        const fechar = document.querySelector(".fecharTexto")
        fechar.innerHTML = "Fechar pedido";
        fechar.classList.add("fecharTextoCentralizado");
    }
}