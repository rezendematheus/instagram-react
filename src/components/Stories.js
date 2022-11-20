import Storie from "./Storie.js"


export default function Stories() {
    const usuarios = [{ imagem:"assets/9gag.svg", nome: "9gag" }, { imagem: "assets/meowed.svg", nome: "meowed" }, { imagem: "assets/barked.svg", nome: "barked" }, { imagem: "assets/nathanwpylestrangeplanet.svg", nome: "nathanwpylestrangeplanet" }, { imagem: "assets/wawawicomics.svg", nome: "wawawicomics" }, { imagem: "assets/respondeai.svg", nome: "respondeai" }, { imagem: "assets/filomoderna.svg", nome: "filomoderna" }, { imagem: "assets/memeriagourmet.svg", nome: "memeriagourmet" }]
    return (
        <div className="stories">
            {usuarios.map(user => (<Storie key={user.nome} imagem={user.imagem} nome={user.nome} />))}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}