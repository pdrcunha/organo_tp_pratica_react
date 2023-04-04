import { cloneElement, useState } from "react";
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Times from "./componentes/Times/Times";
import { v4 as uuidv4 } from 'uuid';
import Footer from "./componentes/Footer/Footer";


function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Dev",
      corPrimaria: "#D9F7E9",
      corSecundaria: "#57C278"
    },
    {
      id: uuidv4(),
      nome: "Cameras",
      corPrimaria: "#E8F8FF",
      corSecundaria: "#82CFFA"
    }
  ]);

  
  function aoNovoColaboradorAdcionado(colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  }

  function aoNovoTime(novoTime) {
    setTimes([...times,novoTime]);
  }

  function aoDeletar(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function aoMudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id == id) {
        time.corPrimaria = cor;
      }
      return time;
    }
    ));
  }


  return (

    <div className='App'>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)}
        aoTimeCadastrado = {novoTime => aoNovoTime(novoTime)}
      />

      {times.map(time =>
        <Times
          nomeTime={time.nome}
          key={time.nome}
          id={time.id}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
          aoDeletar={aoDeletar}
          aoMudarCorTime={aoMudarCorTime}
        />
      )}
      <Footer/>
    </div>

  );
}

export default App;
