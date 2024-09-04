import React from 'react';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import BarraLateral from '../../components/Barra-Lateral';


function PropsAlquiler() {

    const props = useSelector(state => state.propiedades);
    const soloEnAlq = props.filter(p => p.operacion === 'alquiler');
    

    return (
        <div className='cont-prop-Venta'>
            <h1>Propiedade en Alquiler</h1>
            {/* contenedor filtros y lista props */}
            <div className='cont-filtros-listaProps'>
                {/* filtros */}
                <div className='cont-barraL'>
                    <BarraLateral muestraVentaAlq={false}/>
                </div>

                {/* lista props */}
                <div className='cont-listaProps'>
                    <ListaPropiedades allProps={soloEnAlq} id='listaProps' />
                </div>
            </div>
        </div>
    )
}

export default PropsAlquiler