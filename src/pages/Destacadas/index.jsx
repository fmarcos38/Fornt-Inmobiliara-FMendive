import React from 'react';
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import BarraLateral from '../../components/Barra-Lateral';


function PropsDestacadas() {

    const props = useSelector(state => state.propiedades);
    const destacadas = props.filter(p => p.destacada === true);
    

    return (
        <div className='cont-prop-Venta'>
            <h1>Propiedade Destacadas</h1>
            {/* contenedor filtros y lista props */}
            <div className='cont-filtros-listaProps'>
                {/* filtros */}
                <div className='cont-barraL'>
                    <BarraLateral muestraVentaAlq={true}/>
                </div>

                {/* lista props */}
                <div className='cont-listaProps'>
                    <ListaPropiedades allProps={destacadas} id='listaProps' />
                </div>
            </div>
        </div>
    )
}

export default PropsDestacadas