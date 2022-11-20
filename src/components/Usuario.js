export default function Usuario() {
    let imagemPadrao = "assets/catanacomics.svg"
    return (
        <div className="usuario">
            <img alt="foto do usuario" src={imagemPadrao} />
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    Catana
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}