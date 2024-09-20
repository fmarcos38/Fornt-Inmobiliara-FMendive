import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import ListaPropiedades from '../../components/ListaPropiedades';
import LandingPage from '../../components/LandingPage';
import Loading from '../../components/Loading';
import BarraLateral from '../../components/Barra-Lateral';
import WhatsAppButton from '../../components/BotonWhastApp';
import Paginacion from '../../components/Paginacion';
import './styles.css';

function Home() {
    const loading = useSelector(state => state.loading);
    const allProps = useSelector(state => state.propiedades);
    const totalPropiedades = useSelector(state => state.totPropiedades);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const propiedadesPorPagina = 12; // Definir el límite de propiedades por página de forma constante
    const limit = propiedadesPorPagina;

    const [operacion, setOperacion] = useState('');  // Filtro de operación
    const [tipoPropiedad, setTipoPropiedad] = useState('todas');  // Filtro de tipo de propiedad

    // Calcula el offset basado en la página actual
    const offset = (currentPage - 1) * limit;

    // Efecto para manejar la paginación y los filtros
    useEffect(() => {
        dispatch(getProps(limit, offset, operacion, tipoPropiedad));
    }, [dispatch, currentPage, limit, offset, operacion, tipoPropiedad]);

    return (
        <div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className='cont-home'>
                        {/* landing */}
                        <LandingPage />

                        {/* contenedor filtros y lista props */}
                        <div className='cont-filtros-listaProps'>
                            {/* filtros */}
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

                            {/* lista props */}
                            <div className='cont-listaProps'>
                                <ListaPropiedades allProps={allProps} id='listaProps' />

                                <Paginacion
                                    allProps={allProps}
                                    currentPage={currentPage}
                                    onPageChange={setCurrentPage}
                                    totalPropiedades={totalPropiedades}
                                    propiedadesPorPagina={propiedadesPorPagina}
                                />
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