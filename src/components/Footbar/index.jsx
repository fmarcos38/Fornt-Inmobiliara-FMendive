import React from 'react';
import { Link } from 'react-router-dom';
import IconoInstagram from '../../Imagenes/icononInstagram.png';
import IconoWhatsApp from '../../Imagenes/iconoWhatsApp.png';
import Logo from '../../Imagenes/LogoHome.png';

import './styles.css';

function Footbar() {
    return (
        <footer className='contFooter'>
            <div className="footer">
                <div className='divF'>
                    {/* logo */}
                    <a href='/home'>
                        <img src={Logo} alt='' className='logo-footbar' />
                    </a>
                    <ul>
                        {/* Contactanos */}
                        <li>
                            <h2>
                                <p className='titulo-col-foot'>Encontranos en</p>
                            </h2>
                            <p className='info-contactos'>
                                Belgrano 2214 - Mar del Plata
                            </p>

                            <p className='info-contactos'>
                                Teléfono (0223) 4915977
                            </p>

                            <p className='info-contactos'>
                                Whatsapp +54 9 (223) 6349596
                            </p>

                            <p className='info-contactos'>
                                info@belluccipropiedades.com
                            </p>

                        </li>
                        {/* Links */}
                        <li>
                            <h2>
                                <p className='titulo-col-foot'>Links</p>
                            </h2>
                            <div className='divLinks'>
                                <Link to={'/venta'} className='link-footbar'>Ventas</Link>
                                <Link to={'/alquiler'} className='link-footbar'>Alquileres</Link>
                                <Link to={'/destacadas'} className='link-footbar'>Destacadas</Link>
                                <Link to={'/contacto'} className='link-footbar'>Contacto</Link>
                                <Link to={'/nosotros'} className='link-footbar'>Nosotros</Link>
                            </div>
                        </li>
                        {/* Redes */}
                        <li>
                            <h2>
                                <p className='titulo-col-foot'>Seguinos</p>
                            </h2>
                            <div className='cont-iconos-redes'>
                                <a href='https://www.instagram.com/florm.bienesraices/'>
                                    <img src={IconoInstagram} alt='' className='icono-redes-foot'/>
                                </a>
                                <a href='http://api.whatsapp.com/send?phone=2234422665'>
                                <img src={IconoWhatsApp} alt='' className='icono-redes-foot'/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>    
            
            <div className='cont-info-derechos'>
                <p className='info-derechos'>
                    Todas las medidas enunciadas son meramente orientativas, las medidas exactas serán las que se expresen en el respectivo título de propiedad de cada inmueble. Todas las fotos, imagenes y videos son meramente ilustrativos y no contractuales. Los precios enunciados son meramente orientativos y no contractuales..
                    © 2024 Mendive Negocios Inmobiliario.
                </p>
            </div>
        </footer>
    )
}

export default Footbar;