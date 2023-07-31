import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const tituloDocumento = document.getElementById("titulo-documento")
tituloDocumento.textContent = nomeDocumento || "Documento sem título"

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

export { atualizaTextoEditor }