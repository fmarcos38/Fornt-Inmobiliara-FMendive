import React  from 'react'
import './styles.css';
import logo from '../../Imagenes/Logo-Flor-2.jpg';

function LandingPage() {

    return (
        <div className='contGralLanding'>   
            {/* cont texto 1 */}
            <div className='cont-sup'>
                <div className="sub-cont-sup left-slide">
                    <p className="texto-sup">
                        <b>
                            Somos una empresa con presencia en el Mercado Inmobiliario de Mar del Plata desde 1972.
                            En estos años hemos asesorado a empresas de primer nivel Nacional e Internacional,
                            así como a pymes y particulares
                        </b>
                    </p>
                </div>
            </div>            
            
            {/* cont logo */}
            <div className='cont-logo-landing'>
                <div className='sub-cont-logo-landing'>
                    <img src={logo} alt='' className='logo-landing'/>
                </div>
            </div>
            
            
            {/* cont texto 2 */}            
            <div className='cont-inf'>
                <div className="sub-cont-inf right-slide">
                    <p className="texto-inf">
                        <b>
                            Navegá por nuestras propiedades.
                            Encontrá tu proximo hogar, local para tu negocio,
                            o si estás buscando invertir, tenemos desarrollos propios.
                        </b>
                    </p>
                </div>
            </div>

            {/* texto inferior */}    
            <div className='cont-texto-socalo'>
                <p>Conocé nuestras Ptopiedades</p>
            </div>        
        </div>
    )
}

export default LandingPage;

