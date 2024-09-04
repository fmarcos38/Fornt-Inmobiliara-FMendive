import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import ListaPropiedades from '../../components/ListaPropiedades';
import LandingPage from '../../components/LandingPage';
import Loading from '../../components/Loading';
import CotizacionDolar from '../../components/CotizacionDolar';
import BarraLateral from '../../components/Barra-Lateral';
import WhatsAppButton from '../../components/BotonWhastApp';
import './styles.css';

function Home() {

    const loadding = useSelector(state => state.loading);
    const allProps = useSelector(state => state.propiedades);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProps());
    }, [dispatch]);

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

export default Home