import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const tituloDocumento = document.getElementById("titulo-documento")
tituloDocumento.textContent = nomeDocumento || "Documento sem título"

const botaoExcluir = document.getElementById("excluir-documento");


selecionarDocumento(nomeDocumento);

//resgata os valores do text-área para serem enviados
const textoEditor = document.getElementById("editor-texto");

//envia o texto para o servidor
textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textoEditor.value, 
        nomeDocumento});
})

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDocumento);
})

function alertarERedirecionar(nome){
    if(nome === nomeDocumento){
        alert(`Documento ${nome} excluído com sucesso!`)
        window.location.href = "/"
    }
}

export { atualizaTextoEditor, alertarERedirecionar }