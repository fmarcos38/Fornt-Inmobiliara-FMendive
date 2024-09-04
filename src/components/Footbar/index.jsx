import React from 'react';
import './styles.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Logo from '../../Imagenes/Logo-Flor-2.jpg';
import { Link } from 'react-router-dom';

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
                                <p>CONTACTANOS</p>
                            </h2>
                            <p>
                                Belgrano 2214 - Mar del Plata
                                <br></br>
                                Teléfono (0223) 4915977
                                <br></br>
                                Whatsapp +54 9 (223) 6349596
                                <br></br>
                                info@belluccipropiedades.com
                                <br></br>
                            </p>
                        </li>
                        {/* Links */}
                        <li>
                            <h2>
                                <p>Links</p>
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
                            <h2><p>Seguinos</p></h2>
                            <div className='cont-iconos-redes'>
                                <a href='https://www.instagram.com/florm.bienesraices/'>
                                    <InstagramIcon className='icono-redes-foot' />
                                </a>
                                <a href='http://api.whatsapp.com/send?phone=2234422665'>
                                    <WhatsAppIcon className='icono-redes-foot' />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>         
        </footer>
    )
}

export default Footbar;