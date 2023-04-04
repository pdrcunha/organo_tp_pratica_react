import "./Select.css"

function Select(props) {

    let placeholder = `Digite seu ${props.label} ...`;
    return(
        <div className="container-input-select">
            <label className="" >{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value="" key="" hidden></option>
                {props.itens.map(item =><option key={item}>{item}</option> )}
            </select>
        </div>
    )
}

export default Select;