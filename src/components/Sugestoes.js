import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const sugestoes = [
        { imagem: "assets/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { imagem: "assets/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { imagem: "assets/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imagem: "assets/adorable_animals.svg", nome: "adorable_animals.svg", razao: "Segue você" },
        { imagem: "assets/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
    ]
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map(sugestao => (<Sugestao key={sugestao.nome} imagem={sugestao.imagem} nome={sugestao.nome} razao={sugestao.razao} />))}
        </div>
    )
}