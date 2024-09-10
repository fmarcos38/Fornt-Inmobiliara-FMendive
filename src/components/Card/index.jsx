import React, { useState } from 'react';
import IconoUbicacion from '../../Imagenes/iconoUbicacion.png';
import { NavLink } from 'react-router-dom';
import Favorito from '../Favoritos';
import IconoSup from '../../Imagenes/Iconos/IconoSup';
import IconoAmb from '../../Imagenes/Iconos/IconoAmb';
import IconoDormitorio from '../../Imagenes/Iconos/IconoDormitorios';
import IconoBaños from '../../Imagenes/Iconos/IconoBaños';
import './styles.css'
import { formatMoney } from '../../Helps';

function Card({ id, codigoReferencia, direccionF, descripcion, disposicion, expensas, geoLat, geoLong, cantPisos,
        rentaTemporaria, destacadaEnWeb, baños, ubicacion, operacion, imagenes, productor, tituloPublicacion,
        supCubierta, ambientes, supSemiCub, dormitorios, unidadMedida, supTotal, tipo, supDescubierta, servicios 
    }) {

    //estado para el hover
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className='contCard'>
            {/* titulo */}
            <div className='card-title'>
                <h2 className='titulo-card'>{operacion[0].operacion}</h2>
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
                        <p className='palabra-abre-detalle'>Detalle</p>
                    </div>
                </div>
            </NavLink>

            {/* info 1 */}
            <div className='card-info1'>
                <div className='cont-titulo-publicacion'>
                    <span className='tituloPublicacion'>{tituloPublicacion}</span>
                </div>
                <div className='cont-info1'>
                    <img src={IconoUbicacion} alt='iconoUbi' style={{width:'30px', height:'30px'}}/>
                    <span className='direccion-card'>
                        {/* Barrio: {ubicacion.barrio} | */} {direccionF}
                    </span>
                </div>

                <div className='cont-precio-fav'>
                    <div className='cont-precio'>
                        <p className='precio'>
                            {operacion[0].precios[0].moneda} {formatMoney(operacion[0].precios[0].precio)}
                        </p>
                    </div>
                    <div className='cont-fav'>
                        <Favorito id={id} />
                    </div>
                </div>
            </div>
            
            {/* info 2 */}
            <div className='card-info2'>
                <div className='div-info2'>
                    <p className='info2'>
                        <IconoSup />
                    </p>
                    <p className='info2'>Superficie</p>
                    <p className='info2'>{unidadMedida}</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                        <IconoAmb/>
                    </p>
                    <p className='info2'>Ambientes</p>
                    <p className='info2'>{ambientes}</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                        <IconoDormitorio/>
                    </p>
                    <p className='info2'>Dormitorios</p>
                    <p className='info2'>{dormitorios}</p>
                </div>

                <div className='div-info2'>
                    <p className='info2'>
                        <IconoBaños />
                    </p>
                    <p className='info2'>Baños</p>
                    <p className='info2'>{baños}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
