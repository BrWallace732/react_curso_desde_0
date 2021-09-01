import React, { Component } from 'react'

class ContadorClass extends Component {
    constructor(props){
        super(props)
        this.state = { contador: 0 }
    }

    componentDidMount(){
        console.log("el componenet")
        //por primera ves se ejecuta
        //llamadas a api
    }
    componentDidUpdate(){
        console.log('cambio actualizado')
        //cuando se actualiza
    }
    componentWillUnmount(){
        console.log('componente desmontado')
        //cuando desaparece el componente
        //terminar llamada a la api
    }

    sumar(cantidad){
        this.setState((estadoAnterior)=>{
            return {
                contador : estadoAnterior.contador + cantidad
            }
        })
    }
    restar(cantidad){
        this.setState((estadoAnterior)=>{
            return{
                contador : estadoAnterior.contador - cantidad
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador} </h1>
                <button onClick={() => this.sumar(4)} >+</button>
                <button onClick={() => this.restar(5)} >-</button>
            </div>
        )
    }
}

export default ContadorClass
