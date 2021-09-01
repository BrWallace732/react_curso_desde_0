import React, {useState} from 'react'
import styles from './Formulario.module.css'
import Boton from '../elementos/Boton'

const Formulario = (props) => {

    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const onChange = (e) =>{
        if(e.target.name === 'usuario'){
            setUsuario(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(usuario && password ){
            props.setsesion(true)
        } else {
            alert('no hay datos')
        }
    }
    
    return (
        <form action="" onSubmit={onSubmit} className={styles.formulario} >
            <h1>No has Iniciado Sesion</h1>
            <div>
                <label htmlFor="usuario" className={styles.label} >usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label} >password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={onChange}
                    className={styles.input}
                />
            </div>
            <div>
            <Boton largo type="submit">Iniciar Sesion</Boton>
            </div>
        </form>
    )
}

export default Formulario
