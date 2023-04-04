import "./Cards.css"

function Cards(props) {


    return (
        <div className="container-card">
            <div className="deletar" onClick={evento => props.aoDeletar(props.id)}>X</div>
            <div className="card">
                <img src={props.imagem} alt={props.nome} className="image-colab" />
                <p className="nome">{props.nome}</p>
                <p className="cargo">{props.cargo}</p>
            </div>
        </div>
    )
}

export default Cards;