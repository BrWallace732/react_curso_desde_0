import React, {useState} from 'react'

import Boton from '../elementos/Boton'

const Contador = () => {
    const [contador, setContador] = useState(0)

    const sumar = (cantidad)=>setContador(contador+cantidad)
    const restar = (cantidad)=>setContador(contador-cantidad)

    return (
        <div>
            <h1>Contador: {contador} </h1>
            <Boton negro marginRight onClick={()=> sumar(5)}>+</Boton>
            <Boton negro onClick={()=> restar(5)}>-</Boton>
        </div>
    )
}

export default Contador
