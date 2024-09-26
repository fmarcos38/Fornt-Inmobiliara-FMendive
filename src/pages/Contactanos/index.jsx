import React from 'react'
import FormularioContacto from '../../components/FormularioContacto'
import './estilos.css';


function Contactanos() {
    return (
        <div className='contGralFormulario'> 
            <div style={{width:'60%'}}>
                <FormularioContacto />            
            </div>
        </div>
    )
}

export default Contactanos