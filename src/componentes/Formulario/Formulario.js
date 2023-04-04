import { useState } from "react";
import Botao from "../Botao/Botao";
import InputText from "../InputText/InputText";
import Select from "../Select/Select";
import "./Formulario.css"
import { v4 as uuidv4 } from 'uuid';
import InputColor from "../InputColor/InputColor";



function Formulario(props) {

    
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("");

    function aoSalvar(event){
        event.preventDefault();
        props.aoColaboradorCadastrado({
            id : uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setNome("");
        setCargo("");
        setImagem("");
        setTime("")
    }
    function timeNovo(event){
        event.preventDefault();
        props.aoTimeCadastrado({
            id : uuidv4(),
            nome:nomeTime,
            corPrimaria:corTime
        })
        setNomeTime("");
        setCorTime("");
    }

    return (
        <section className="container-form-center">
            <form className="formulario-add-member" onSubmit={aoSalvar}>
                <h2>Preencha com os dados do colaborador.</h2>
                <InputText
                    required={true}
                    label="Nome"
                    valor={nome}
                    aoAlterado={newVAlor => setNome(newVAlor)}
                />
                <InputText
                    required={true}
                    label="Cargo"
                    valor={cargo}
                    aoAlterado={newVAlor => setCargo(newVAlor)}
                />
                <InputText
                    required={true}
                    label="Link da imagem"
                    valor={imagem}
                    aoAlterado={newVAlor => setImagem(newVAlor)}
                />
                <Select
                    required={true}
                    label="Times"
                    itens= {props.times}
                    valor={time}
                    aoAlterado={newVAlor => setTime(newVAlor)}
                />
                <Botao
                    texto="Criar Card"
                />
            </form>
            <form className="formulario-add-member" onSubmit={timeNovo}>
                <h2>Preencha dados do time.</h2>
                <InputText
                    required
                    label="Nome"
                    placeholder ="Preencha com o nome do time"
                    valor={nomeTime}
                    aoAlterado={newVAlor => setNomeTime(newVAlor)}
                />
                <InputColor
                    required
                    label="Cor do time"
                    placeholder =""
                    valor={corTime}
                    aoAlterado={newVAlor => setCorTime(newVAlor)}
                />
                <Botao
                    texto="Criar Time"
                />
            </form>
        </section>
    )
}

export default Formulario;