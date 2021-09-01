import React from 'react'
import {Titulo} from './Titulo'
import styled from 'styled-components'



const  Usuario = () => {  


    const pais = null
    const amigos = ['alejandro', 'Manuel', 'Cesar']

    return(
    <div>
        <Titulo usuario="carlos" color="blue"/>
        <Parrafo>Tu lista de amigos es:</Parrafo>
            {pais && <p> Tu eres de: {pais} </p> }
        <ul>
            {amigos.map((amigo, index) => <li key={index} >{amigo} </li> )}
        </ul>
    </div>
    )
}

const Parrafo = styled.p`
    margin: 10px 0;
`


export default Usuario
