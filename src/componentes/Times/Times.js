import Cards from "../Cards/Cards";
import "./Times.css"

function Times(props) {

    return (
        props.colaboradores.length > 0 &&
        <section className="container-input-times" style={{ backgroundColor: props.corPrimaria }}>
            <input type="color" value={props.corPrimaria} onChange={evento =>props.aoMudarCorTime(evento.target.value, props.id)}/>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nomeTime}</h3>
            <div className="container-cards-times">
                {props.colaboradores.map(colaborador => {
                    return<Cards
                        id={colaborador.id}
                        key={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        time={colaborador.time}
                        aoDeletar = {props.aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Times;