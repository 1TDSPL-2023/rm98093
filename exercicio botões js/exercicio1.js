const botao = document.getElementById("btn");
const corpo = document.getElementById("body");
const botaoForm = document.getElementById("btnForm");
var inputForm = document.getElementById("idForm");

botao.addEventListener("click", () => {
    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    corpo.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});

function adicionar() {
    const linha = document.createElement("li");
    let txtLinha = document.getElementById("texto");
    list.appendChild(txtLinha);
    linha.getElementById("lista").appendChild(txtLinha);
    
}

function mudarImg() {
    document.getElementById("img").src = "./img/maxresdefault.jpg"

}

function alterarTexto() {
    document.getElementById("btn").innerHTML = "pedrinho lindo"

}

function esconderBotao() {
    document.getElementById("btn").style.display = "none"
}

function aparecerBotao() {
    document.getElementById("btn").style.display = "block"
}