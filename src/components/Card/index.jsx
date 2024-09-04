import React, { useState } from 'react'
import './styles.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import iconoSup from '../../Imagenes/icono-superficie.svg';
import iconoAmb from '../../Imagenes/icono-ambientes.svg';
import iconoDor from '../../Imagenes/icono-dormitorios.svg';
import iconoBañ from '../../Imagenes/icono-banos.svg';
import { NavLink } from 'react-router-dom';
import Favorito from '../Favoritos';

function Card({ id, codigoReferencia, direccion, descripcion, disposicion, expensas, geoLat, geoLong, cantPisos,
        rentaTemporaria, destacadaEnWeb, baños, ubicacion, operacion, imagenes, productor, tituloPublicacion,
        supTechada, ambientes, supSemiCub, dormitorios, unidadMedida, bañoSuit, supTotal, tipo, supDescubierta, servicios 
    }) {

    //estado para el hover
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className='contCard'>
            {/* titulo */}
            <div className='card-title'>
                <h2>{operacion[0].operacion}</h2>
            </div>

            {/* img + animacion + abre detalle */}
            <NavLink to={`/detalle/${id}`} className='navLink-car'>
                <div
                    onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)}
                >
                    {/* imagen */}
                    <div className='card-image'>
                        <img className='card-img' src={imagenes[0].original} alt='not found' />
                    </div>

                    {/* msj detalle si hay hover */}
                    <div className={`detail ${showDetail ? 'show' : ''}`}>
                        <p className='p-detalle'>Detalle</p>
                    </div>
                </div>
            </NavLink>

            {/* info 1 */}
            <div className='card-info1'>
                <div className='cont-info1'>
                    <LocationOnIcon />
                    <p className='direcc'>
                        Barrio: {ubicacion.barrio} |
                        Direcc: {direccion}
                    </p>
                </div>
                <p className='descrip'>{tituloPublicacion}</p>

                <div className='cont-precio-fav'>
                    <p className='precio'>
                        {
                            operacion[0].operacion === 'venta' ?
                            <strong>USD {operacion[0].precios[0].precio}</strong> :
                            <strong>$ {operacion[0].precios[0].precio}</strong>
                        }
                    </p>
                    <Favorito id={id} />
                </div>
            </div>
            
            {/* info 2 */}
            <div className='card-info2'>
                <div className='div-info2'>
                    <p className='info2'>
                        <img src={iconoSup} alt='' style={{ 'width': '20px', 'height': '20px', 'color': 'black', 'marginTop': '5px' }} />
                    </p>
                    <p className='info2'>Superficie</p>
                    <p className='info2'>{unidadMedida}</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                        <img src={iconoAmb} alt='' style={{ 'width': '20px', 'height': '20px', 'marginTop': '5px' }} />
                    </p>
                    <p className='info2'>Ambientes</p>
                    <p className='info2'>{ambientes}</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                        <img src={iconoDor} alt='' style={{ 'width': '20px', 'height': '20px', 'marginTop': '5px' }} />
                    </p>
                    <p className='info2'>Dormitorios</p>
                    <p className='info2'>{dormitorios}</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                        <img src={iconoBañ} alt='' style={{ 'width': '20px', 'height': '20px', 'marginTop': '5px' }} />
                    </p>
                    <p className='info2'>Baños</p>
                    <p className='info2'>{baños}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
