import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario';
import Formulario from './components/Formulario';
import Contador from './components/Contador';
import './index.css'
import Boton from './elementos/Boton';

const App = () => {  
  const [sesion, setsesion] = useState(false)

  return (
  <div className="contenedor">
    {sesion === true ? 
    <div>
      <Usuario />
      <Contador />
      <Boton largo marginTop onClick={()=> setsesion(false) }  >Cerrar Sesion</Boton>
    </div>
    :
    <div>
      <Formulario setsesion={setsesion} />
    </div>
    }
  </div>
  )
}





ReactDOM.render(<App />, document.getElementById('root'));

