import { useState } from "react";
import "./InputText.css"

function InputText(props) {
    let placeholder = `Digite seu ${props.label} ...`;



    function aoDigitado(evento){
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="container-input-text">
            <label className="" >{props.label}</label>
            <input
                required={props.required}
                type="text"
                placeholder={placeholder}
                className=""
                value={props.valor}
                onChange = {aoDigitado}
            />
        </div>
    )
}

export default InputText;