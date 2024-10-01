import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import { Link } from 'react-router-dom';
import ListaPropiedades from '../../components/ListaPropiedades';
//import LandingPage from '../../components/LandingPage';
import Landing2 from '../../components/Landing2';
import Loading from '../../components/Loading';
import BarraLateral from '../../components/Barra-Lateral';
import WhatsAppButton from '../../components/BotonWhastApp';
import Paginacion from '../../components/Paginacion';
import logoTexto from '../../Imagenes/logoTexto.png';
import imgHome1 from '../../Imagenes/imgHome1.jpg';
import imgHome2 from '../../Imagenes/imgHome2.jpg';
import './styles.css';


function Home() {
    
    const loading = useSelector(state => state.loading);
    const [isFixed, setIsFixed] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Para controlar la visibilidad
    const [operacion, setOperacion] = useState('');
    const [tipoPropiedad, setTipoPropiedad] = useState('todas');
    const [currentPage, setCurrentPage] = useState(1);
    const allProps = useSelector(state => state.propiedades);
    const totalPropiedades = useSelector(state => state.totPropiedades);
    const dispatch = useDispatch();
    
    const propiedadesPorPagina = 12;
    const limit = propiedadesPorPagina;    
    const offset = (currentPage - 1) * limit;

    //efecto para iniciar la Pag desd la parte SUPERIOR
    useEffect(() => {
        // Desplaza la página hacia la parte superior cuando el componente se monta
        window.scrollTo(0, 0);
      }, []); // El array vacío asegura que se ejecute solo al montar el componente
    
    // Efecto para manejar la paginación y los filtros
    useEffect(() => {
        dispatch(getProps(limit, offset, operacion, tipoPropiedad));
    }, [dispatch, currentPage, limit, offset, operacion, tipoPropiedad]);

    // Efecto para fijar el div "textos"
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const imagenesFondo = document.getElementById('imagenes-fondo');
            const imagenesHeight = imagenesFondo ? imagenesFondo.offsetHeight : 0;

            if (scrollY >= 700 && scrollY < 3000 + imagenesHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }

            if (scrollY >= 1700 + imagenesHeight) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className='cont-home'>
                        {/* landing */}
                        <Landing2 />

                        <div className='cont-texto-imagenes'>
                                {isVisible && (
                                    <div className={`textos-home ${isFixed ? 'fixed' : ''}`} id="textos">
                                        <div className='subCont-textos'>
                                            <p className="texto-somos">SOMOS</p>
                                            <img src={logoTexto} alt='' className='logoTexto' />
                                            <p className="texto-sup">
                                                Nos dedicamos a realizar gestiones inmobiliarias, con un enfoque en propiedades de diseño único.
                                                <br />
                                                Creemos en la importancia de caminar juntos hacia el cumplimiento de tus objetivos, para que sientas nuestro respaldo en cada paso del proceso.
                                            </p>
                                            <Link to={'/vender'}>
                                                <button className='btn-contactanos-home'>Contactanos</button>
                                            </Link>                                            
                                        </div>
                                    </div>
                                )}
                                <div className='cont-imgenes-fondo' id="imagenes-fondo">
                                    <div className='cont-sup-img'>
                                        <div className='cont-fondo-img'>
                                            <img src={imgHome1} alt='' className='img-fondo' />
                                        </div>
                                        <div className='cont-fondo-oscuro'></div>
                                    </div>
                                    <div className='cont-inf-img'>
                                        <div className='cont-fondo-oscuro'></div>
                                        <div className='cont-fondo-img'>
                                            <img src={imgHome2} alt='' className='img-fondo' />
                                        </div>
                                    </div>
                                </div>
                        </div>

                        {/* contenedor filtros y lista props */}
                        <div className='cont-titulo-filtros-props'>
                            <div className='cont-titulo-conoce-propiedades'>
                                <h2 className='titulo-conoce-propiedades'>Conocé nuestras Propiedades</h2>
                            </div>
                            <div className='cont-filtros-listaProps'>
                                    <div className='cont-barraL'>
                                        <BarraLateral
                                            muestraVentaAlq={'true'}
                                            limit={limit}  // Aquí pasamos el valor de limit al componente BarraLateral
                                            offset={offset} // También pasamos el offset
                                            setCurrentPage={setCurrentPage}
                                            setOperacion={setOperacion}
                                            setTipoPropiedad={setTipoPropiedad}  // Nuevo prop para manejar tipoPropiedad
                                        />
                                    </div>

                                    <div className='cont-listaProps'>
                                        <ListaPropiedades allProps={allProps} id='listaProps' />
                                        {
                                            allProps[0] &&
                                            <Paginacion
                                            allProps={allProps}
                                            currentPage={currentPage}
                                            onPageChange={setCurrentPage}
                                            totalPropiedades={totalPropiedades}
                                            propiedadesPorPagina={propiedadesPorPagina}
                                        />
                                        }
                                    </div>
                            </div>
                        </div>

                        {/* botón WhatsApp */}
                        <WhatsAppButton />
                    </div>
                )
            }
        </div>
    );
}

export default Home;