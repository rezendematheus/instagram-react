import React from "react"

export default function Usuario() {

    const imgpadrao = "assets/catanacomics.svg"
    const nomepadrao = "Catana"
    const [imagem, setImagem] = React.useState(imgpadrao)
    const [nome, setNome] = React.useState(nomepadrao)

    const trocaImagem = () => {
        let novaImagem = prompt("Insira o link da sua nova imagem de perfil:")
        novaImagem ? setImagem(novaImagem) : setImagem(imgpadrao)
    }

    const trocaNome = () => {
        let novoNome = prompt("Insira o seu novo nome de usuário:")
        novoNome ? setNome(novoNome) : setNome(nomepadrao)
    }
    return (
        <div className="usuario">
            <img onClick={() => trocaImagem()} alt="foto do usuario" src={imagem} />
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    {nome}
                    <ion-icon onClick={() => trocaNome()} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}