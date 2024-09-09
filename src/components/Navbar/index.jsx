import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import IconoUbicacion from '../../Imagenes/iconoUbicacion.png';
import IconoMail from '../../Imagenes/iconoMail.png';
import IconoInsta from '../../Imagenes/icononInstagram.png';
import IconoWhatssApp from '../../Imagenes/iconoWhatsApp.png';
import Logo from '../../Imagenes/logoTexto.png';
import './styles.css';


function NavbarConRedes() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            {/* nav superiro */}
            <div className='navSup'>
                <div className='redes'>
                    <div className='col1'>
                        <img src={IconoUbicacion} alt='ubi' className='iconoInstaNew'/>
                        <p>Sarmiento 2323</p>
                        <LocalPhoneIcon className='iconoContact'/>
                        <p>2234422665</p>
                        <img src={IconoMail} alt='ubi' className='iconoInstaNew'/>
                        <p>florm@gmail.com</p>
                    </div>

                    <div className='col2'>
                        <a href='https://www.instagram.com/florm.bienesraices/'>
                            <img src={IconoInsta} alt='icoInsta' className='iconoInstaNew'/>                        
                        </a>
                        <a href='http://api.whatsapp.com/send?phone=2234422665'>
                            <img src={IconoWhatssApp} alt='icoInsta' className='iconoInstaNew'/>
                        </a>
                    </div>
                </div>
            </div>
            {/* nav inf */}
            <div className='navInf'>
                <div className='cont-nav-inf'>
                    <div className='colInf-1'>
                        {/* logo */}                        
                        <NavLink to='/' >
                            <img src={Logo} alt='img not found' className='logo' /> 
                        </NavLink>
                    </div>
                    {/* menu SOLO Pantalla Grande*/}
                    <div className='colInf-2'>                        
                        <ul className='ul-menu-izq'>
                            <li>
                                <NavLink to='/venta' >
                                    Venta
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/alquiler' >
                                    Alquileres
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/destacadas'>
                                    Destacadas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contacto' >
                                    Contacto
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/nosotros' >
                                    Nosotros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/favoritos' >
                                    Favoritos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* menu hambur y desplegable P.Chica */}
                    <div className='colInf-3'>
                        {/* menu hambur P.Chica */}
                        <div
                            className={`menu-icon ${isOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* menu desplegable P.chica*/}
                        <div className="menu-desplegable">
                            {
                                isOpen && (
                                    <ul className='na-lista-pChica'>
                                        <li className='items-pChica'>
                                            <Link to='/' className='link-navbar'>Home</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/venta' className='link-navbar'>Venta</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/alquiler' className='link-navbar'>Alquiler</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/alqTemp' className='link-navbar'>Alquiler Temporario</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/destacadas' className='link-navbar'>Destacadas</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/favoritos' className='link-navbar'>Favoritos</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/contacto' className='link-navbar'>Contacto</Link>
                                        </li>
                                        <li className='items-pChica'>
                                            <Link to='/nosotros' className='link-navbar'>Nosotros</Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarConRedes;


