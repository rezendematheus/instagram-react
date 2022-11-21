import React from "react"
export default function Post(props) {
    const [curtido, setCurtido] = React.useState("")
    const [curtidas, setCurtidas] = React.useState(props.likes)
    const [heart, setHeart] = React.useState("heart-outline")
    const [salvo, setSalvo] = React.useState("")
    const [bookmark, setBookmark] = React.useState("bookmark-outline")
    function curtir(){
        curtido ? setCurtido("") : setCurtido("curtido")
        curtido ? setCurtidas(curtidas-1) : setCurtidas(curtidas+1)
        curtido ? setHeart("heart-outline") : setHeart("heart")
    }
    function salvar(){
        salvo ? setSalvo("") : setSalvo("salvo")
        salvo ? setBookmark("bookmark-outline") : setBookmark("bookmark") 
    }
    function apenasCurtir(){
        curtido ? setCurtidas(curtidas) : setCurtidas(curtidas+1)
        curtido ? setCurtido("curtido") : setCurtido("curtido")
        curtido ? setHeart("heart") : setHeart("heart")
    }
    return (
        <div className="post" data-test="post">
        <div className="topo">
            <div className="usuario">
                <img src={props.foto} alt={props.nome} data-test="post-image"/>
                {props.nome}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img onClick={()=>apenasCurtir()} src={props.imagem} alt={props.imagem}/>
        </div>

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon onClick={() => curtir()} class={curtido} name={heart} data-test="like-post"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon onClick={() => salvar()} class={salvo} name={bookmark} data-test="save-post"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={props.likedimg} alt={props.liked}/>
                <div className="texto">
                    Curtido por <strong>{props.liked}</strong> e <strong>outras <strong data-test="likes-number">{curtidas.toLocaleString('pt-BR')}</strong> pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    )

}