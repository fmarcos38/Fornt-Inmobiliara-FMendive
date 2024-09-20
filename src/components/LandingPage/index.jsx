import React  from 'react'
import logo from '../../Imagenes/LogoHome.png';
import './styles.css';

function LandingPage() {

    return (
        <div className='contGralLanding'>   
            {/* cont texto 1 */}
            <div className='cont-sup'>
                <div className="sub-cont-sup left-slide">
                    <p className="texto-sup">
                        Nos dedicamos a realizar gestiones inmobiliarias, con un enfoque en propiedades de diseño único.
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
                <p className="texto-sup-inf">
                        Creemos en la importancia de caminar juntos hacia el cumplimiento de tus objetivos, para que sientas nuestro respaldo en cada paso del proceso.
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

