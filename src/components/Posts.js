import Post from "./Post"

export default function Posts() {
    const postsobj = [
        { foto: "assets/meowed.svg", nome: "meowed", imagem: "assets/gato-telefone.svg", likedimg: "assets/respondeai.svg", liked: "respondeai", likes: 101503 },
        { foto: "assets/barked.svg", nome: "barked", imagem: "assets/dog.svg", likedimg: "assets/adorable_animals.svg", liked: "adorable_animals", likes: 99159 }
    ]
    return (
        <div className="posts">
            {postsobj.map(obj => (<Post key={obj.nome} foto={obj.foto} nome={obj.nome} imagem={obj.imagem} likedimg={obj.likedimg} liked={obj.liked} likes={obj.likes} />))}
        </div>
    )
}