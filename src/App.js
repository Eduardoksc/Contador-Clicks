
import './App.css';
import Boton from './componentes/boton';
import logo from './imagenes/Logo-Prueba.png';
import Contador from './componentes/contador';
import { useState } from 'react';


function App() {
  const [numeroClicks, setnumeroClicks] = useState(0);
  const manejarClic = () => {
    setnumeroClicks(numeroClicks + 1);
  };
  const reiniciarContador = () => {
    setnumeroClicks(0);
  };
  return (
    <div className="App">
      <div className='contenedor-principal-logo'>
        <img
          className='logo-proyecto'
          src={logo}
          alt="Logo" />
      </div>
      <div className='contenedor-principal-contador'>
        <Contador numeroClicks={numeroClicks} />
        <Boton
          texto='Clic'
          esBotondeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotondeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
