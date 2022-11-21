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
        <div className="usuario" data-test="user">
            <img onClick={() => trocaImagem()} alt="foto do usuario" src={imagem} data-test="profile-image"/>
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    <span data-test="name">{nome}</span>
                    <ion-icon onClick={() => trocaNome()} name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}