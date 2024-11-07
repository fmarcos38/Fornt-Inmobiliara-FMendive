import React from 'react';
import { NavLink } from 'react-router-dom';
import logoTexto from '../../Imagenes/logoTexto.png';
import './estilos.css';


function LandingB() {
    return (
        <div className='cont-texto-imagenes'>
            <div className='subCont-textos'>
                <p className="texto-somos">SOMOS</p>
                <img src={logoTexto} alt='' className='logoTexto' />
                <p className="texto-sup">
                    Nos dedicamos a realizar gestiones inmobiliarias, con un enfoque en propiedades de diseño único.
                    <br />
                    Creemos en la importancia de caminar juntos hacia el cumplimiento de tus objetivos, para que sientas nuestro respaldo en cada paso del proceso.
                </p>
                <NavLink to={'/contacto'}>
                    <button className='btn-contactanos-home'>Contactanos</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LandingB