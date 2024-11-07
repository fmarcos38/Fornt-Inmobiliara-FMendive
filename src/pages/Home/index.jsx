import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import ListaPropiedades from '../../components/ListaPropiedades';
import LandingA from '../../components/LandingA';
import Loading from '../../components/Loading';
import BarraLateral from '../../components/Barra-Lateral';
import WhatsAppButton from '../../components/BotonWhastApp';
import Paginacion from '../../components/Paginacion';
import LandingB from '../../components/LandingB';
import './styles.css';
import LandingC from '../../components/LandingC';


function Home() {
    
    const loading = useSelector(state => state.loading);
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


    return (
        <div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className='cont-home'>
                        {/* landing */}
                        <LandingA />
                        <LandingB />
                        <LandingC />

                        {/* contenedor filtros y lista props */}
                            <div className='cont-barraLateral-Y-listaProps'>
                                <div className='cont-barraLateral' >
                                    <BarraLateral
                                        muestraVentaAlq={'true'}
                                        limit={limit}  // Aquí pasamos el valor de limit al componente BarraLateral
                                        offset={offset} // También pasamos el offset
                                        setCurrentPage={setCurrentPage}
                                        setOperacion={setOperacion}
                                        setTipoPropiedad={setTipoPropiedad}  // Nuevo prop para manejar tipoPropiedad
                                    />
                                </div>
                                <div className='cont-listaProps-Y-paginacion'>
                                    <h1 className='titulo-lista-props'>Conocé nuestras Propiedades</h1>
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

                        {/* botón WhatsApp */}
                        <WhatsAppButton />
                    </div>
                )
            }
        </div>
    );
}

export default Home;