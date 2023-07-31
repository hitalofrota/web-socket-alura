import { MongoClient} from "mongodb";

const cliente = new MongoClient("mongodb+srv://hitalofrotadoidao:hitalofrotadoidao@clusterzinho.p7cyrlh.mongodb.net/?retryWrites=true&w=majority")

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco com sucesso!")

} catch(erro) {
    console.log(erro)
}

export { documentosColecao }