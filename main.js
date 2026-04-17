
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
       
        const botaoAtivo = document.querySelector(".botao.ativo");
        const textoAtivo = document.querySelector(".aba-conteudo.ativo");

        if (botaoAtivo) botaoAtivo.classList.remove("ativo");
        if (textoAtivo) textoAtivo.classList.remove("ativo");

        botao.classList.add("ativo");
        textos[indice].classList.add("ativo");
    });
});

const tempos = [
    new Date("2026-12-31T00:00:00"),
    new Date("2026-08-01T00:00:00"),
    new Date("2026-10-15T00:00:00"),
    new Date("2026-12-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    const tempoAtual = new Date();
    const tempoFinal = tempoObjetivo - tempoAtual;


    if (tempoFinal < 0) {
        return "Prazo Encerrado";
    }

    const segundos = Math.floor((tempoFinal / 1000) % 60);
    const minutos = Math.floor((tempoFinal / 1000 / 60) % 60);
    const horas = Math.floor((tempoFinal / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(tempoFinal / (1000 * 60 * 60 * 24));

    const formataNumero = (numero) => String(numero).padStart(2, '0');

    return `${dias} dias ${formataNumero(horas)} horas ${formataNumero(minutos)} minutos ${formataNumero(segundos)} segundos`;
}

function atualizaCronometro() {
    contadores.forEach((contador, indice) => {
        contador.textContent = calculaTempo(tempos[indice]);
    });
}


function iniciar() {
    atualizaCronometro(); 
    setInterval(atualizaCronometro, 1000);
}

iniciar();
