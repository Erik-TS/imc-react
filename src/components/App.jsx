import '../App.css';
import { useState } from 'react';
import Form from './Form'
import Result from './Result';
import Calculo from '../calcImc'

function App() {

  const [resultado, setResultado] = useState({
    status: '',
    imc: ''
  })

  function handleResultado(altura, peso){
    altura = parseFloat(altura)
    peso = parseFloat(peso)
    const [status, imc, link] = Calculo(peso, altura)
    setResultado({
      status: status,
      imc: imc,
      link: link
    })
  }

  return (
    <div className="App">
      <Form loadResult={handleResultado} />
      <Result link={resultado.link} status={resultado.status} imc={resultado.imc} />
    </div>
  );
}

export default App;
