import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import ListaPropiedades from '../../components/ListaPropiedades';
import LandingPage from '../../components/LandingPage';
import Loading from '../../components/Loading';
import CotizacionDolar from '../../components/CotizacionDolar';
import BarraLateral from '../../components/Barra-Lateral';
import WhatsAppButton from '../../components/BotonWhastApp';
import './styles.css';
import Paginacion from '../../components/Paginacion';

function Home() {
    const loadding = useSelector(state => state.loading);
    const allProps = useSelector(state => state.propiedades);
    const totalPropiedades = useSelector(state => state.totPropiedades); // Suponiendo que el total viene del backend
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);  // Estado para la página actual
    const propiedadesPorPagina = 4;  // Definimos el límite de propiedades por página

    
    useEffect(() => {
        const offset = (currentPage - 1) * propiedadesPorPagina;
        dispatch(getProps(propiedadesPorPagina, offset));
    }, [dispatch, currentPage]);

    return (
        <div>
            {
                loadding ?
                (
                    <Loading/>
                    ) : (
                        <div className='cont-home'>
                            {/* landing */}
                            <LandingPage />
                            
                            {/* contenedor filtros y lista props */}
                            <div className='cont-filtros-listaProps'>
                                {/* filtros */}
                                <div className='cont-barraL'>                                    
                                    <BarraLateral />
                                </div>                               

                                {/* lista props */}
                                <div className='cont-listaProps'>
                                    <ListaPropiedades allProps={allProps} id='listaProps'/>

                                    <Paginacion 
                                        allProps={allProps}
                                        currentPage={currentPage} 
                                        onPageChange={setCurrentPage} 
                                        totalPropiedades={totalPropiedades}
                                    />
                                </div>
                            </div> 

                            {/* cotizaciones */}
                            <CotizacionDolar />

                            {/* bitón whatsApp */}
                            <WhatsAppButton/>
                        </div>
                    )
            }
        </div>
    )
}

export default Home;
