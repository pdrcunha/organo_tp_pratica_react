import { useState } from "react";
import "./InputColor.css"

function InputColor(props) {
    let placeholder = `Digite seu ${props.label} ...`;



    function aoDigitado(evento){
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="container-input-color">
            <label className="" >{props.label}</label>
            <input
                required={props.required}
                type="color"
                defaultValue={props.valorPadrao}
                placeholder={placeholder}
                className=""
                value={props.valor}
                onChange = {aoDigitado}
            />
        </div>
    )
}

export default InputColor;