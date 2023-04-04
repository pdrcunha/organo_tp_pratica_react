import "./Botao.css"

function Botao(props) {
   
    return(
        <button className="botao-padrao">{props.texto}</button>
    )
}

export default Botao;