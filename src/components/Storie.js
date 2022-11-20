export default function Storie(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img alt="imagem" src={props.imagem} />
            </div>
            <div className="usuario">
                {props.nome}
            </div>
        </div>
    )
}