import React from "react"
export default function Post(props) {
    const [curtido, setCurtido] = React.useState("")
    const [curtidas, setCurtidas] = React.useState(props.likes)
    const [heart, setHeart] = React.useState("heart-outline")
    function curtir(){
        curtido ? setCurtido("") : setCurtido("curtido")
        curtido ? setCurtidas(curtidas-1) : setCurtidas(curtidas+1)
        curtido ? setHeart("heart-outline") : setHeart("heart")
    }
    return (
        <div className="post">
        <div className="topo">
            <div className="usuario">
                <img src={props.foto} alt={props.nome}/>
                {props.nome}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img src={props.imagem} alt={props.imagem}/>
        </div>

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon onClick={() => curtir()} class={curtido} name={heart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={props.likedimg} alt={props.liked}/>
                <div className="texto">
                    Curtido por <strong>{props.liked}</strong> e <strong>outras {curtidas.toLocaleString('pt-BR')} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )

}