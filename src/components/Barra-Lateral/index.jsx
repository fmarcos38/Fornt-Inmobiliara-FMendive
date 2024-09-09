import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProps, } from '../../Redux/Actions';
import './estilos.css'; 
/* import FiltraPrecio from '../FIltroRangoPrecio'; */


const BarraLateral = () => {

    //estado para check venta/alq
    const [operacion, setOperacio] = useState('');
    const dispatch = useDispatch();
    
    const handleFilterChange = (event) => {
        const { value } = event.target;
        setOperacio(value === operacion ? '' : value);
    };

    const handleClick = (e) => {
        switch (e.target.id) {
            case 'depto':
                dispatch(getProps(0, 0, operacion, 'Departamento'));
                break;
            case 'casa':
                dispatch(getProps(0, 0, operacion, 'Casa'));
                break;
            case 'ph':
                dispatch(getProps(0, 0, operacion, 'PH'));
                break;
            case 'local':
                dispatch(getProps(0, 0, operacion, 'Local'))
                break;
            case 'terreno':
                dispatch(getProps(0, 0, operacion, 'Terreno'))
                break;
            case 'oficina':
                dispatch(getProps(0, 0, operacion, 'Oficina'))
                break;
            case 'cochera':
                dispatch(getProps(0, 0, operacion, 'Cochera'))
                break;
            case 'destacada':
                //dispatch(getProps(0, 0, operacion, 'destacadaEnWeb'))//ver tema destacada
                break;
            case 'todas':
                dispatch(getProps());
                break;
            default:
                break;
        }
    };

    useEffect(() => {        
            if(operacion === ''){ 
                dispatch(getProps()); 
            }
            if(operacion !== ''){ 
                dispatch(getProps(0, 0, operacion));                
            }
    }, [dispatch, operacion]);

    return (
        <div className='cont-barra' >
            <div className='cont-titulo-filtro'>
                <p>Filtros Propiedades</p>
            </div>

            <div className='opc-venta-alq'>
                <div className='cont-venta-alq'>
                <label className='label-filtro-tipo-operacion'>VENTA</label>
                <input 
                    id='Venta'
                        type="checkbox" 
                        value="Venta" 
                        checked={operacion === 'Venta'} 
                        onChange={handleFilterChange}
                        className='input-check-venta'
                    />
                <label className='label-filtro-tipo-operacion'>ALQUILER</label>
                <input 
                    id='Alquiler'
                        type="checkbox" 
                        value="Alquiler" 
                        checked={operacion === 'Alquiler'} 
                        onChange={handleFilterChange}
                        className='input-check-alq' 
                />
                </div>
                
                <div className='cont-venta-alq'>
                <label className='label-filtro-tipo-operacion'>ALQUILER TEMPORAL.</label>
                <input
                    id='Alquiler Temporal'
                    type="checkbox"
                    value="Alquiler Temporal"
                    checked={operacion === "Alquiler Temporal"}
                    onChange={handleFilterChange}
                    className='input-check-alq'
                />
                </div>
            </div>

            <div className='cont-btn-filtros'>
                <button className='boton-filtros' id='depto' onClick={(e) => handleClick(e)}>Deptos</button>
                <button className='boton-filtros' id='casa' onClick={(e) => handleClick(e)}>Casas</button>
                <button className='boton-filtros' id='ph' onClick={(e) => handleClick(e)}>PH</button>
                <button className='boton-filtros' id='local' onClick={(e) => handleClick(e)}>Locales</button>
                <button className='boton-filtros' id='terreno' onClick={(e) => handleClick(e)}>Terrenos</button>
                <button className='boton-filtros' id='oficina' onClick={(e) => handleClick(e)}>Oficinas</button>
                <button className='boton-filtros' id='cochera' onClick={(e) => handleClick(e)}>Cocheras</button>
                <button className='boton-filtros'  id='destacada' onClick={(e) => handleClick(e)}>Destacadas</button>
                <button className='boton-filtros' id='todas'  onClick={(e) => handleClick(e)}>Todas</button>
            </div>

            {/* <FiltraPrecio operacion={operacion}/> */}
        </div>        
    );
};

export default BarraLateral;
