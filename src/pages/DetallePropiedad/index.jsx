import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty, resetProperty } from '../../Redux/Actions';
import { InmobiliariaContext } from '../../Context';
import Carrusel from '../../components/Carrusel';
import MapProp from '../../components/MapaProp';
import FormularioContacto from '../../components/FormularioContacto';
import ModalVideo from '../../components/ModalVideo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './estilos.css';


function DetalleProp(){

    const { id } = useParams();  //let id = props.match.params.id 
    const propiedad = useSelector(state => state.propiedad);
    //obt el tipo de operacion de la prop
    //obt el tipo de moneda
    const moneda =  propiedad?.operacion?.[0]?.precios?.[0]?.moneda; 
    //otengo el precio de la prop
    const precio =  propiedad?.operacion?.[0]?.precios?.[0]?.precio; 

    const dispatch = useDispatch();    
    const contexto = useContext(InmobiliariaContext); 
    //estado para el tooltipText
    const [showTooltipVideo, setShowTooltipVideo] = useState(false);
    //estado para el tooltipText
    const [showTooltipVolver, setShowTooltipVolver] = useState(false);
    const tooltipTextVideo = "Ver video propiedad";
    const tooltipTextVolver = "Volver a resultados";

    const handleMouseEnter = () => {
        setShowTooltipVideo(true);
    };
    const handleMouseLeave = () => {
        setShowTooltipVideo(false);
    };
    const handleMouseEnterVolver = () => {
        setShowTooltipVolver(true);
    };
    const handleMouseLeaveVolver = () => {
        setShowTooltipVolver(false);
    };

    const handleClickAtras = () => {
        window.history.back();
    };
    

    useEffect(() => {
        dispatch(getProperty(id));

        return () => { dispatch(resetProperty()); }
    }, [dispatch, id]);
    
    
    return(
        <div className='contGralDetalle'>
            <div className='cont-detail'>
                {/* datos principales */}
                <div className='info-1'>
                    <div className='cont-btns-atras-video'>
                        {/* btn-atrás */}
                        <button 
                            onClick={() => handleClickAtras()} 
                            className='btn-volver'
                            onMouseEnter={handleMouseEnterVolver}
                            onMouseLeave={handleMouseLeaveVolver}
                        >
                            <ArrowBackIcon/>
                        </button>
                        {/* msj toolTip */}
                        {
                            showTooltipVolver && <div className="tooltipVolver">{tooltipTextVolver}</div>
                        }
                        {/* btn-video */}
                        <button
                            onClick={() => contexto.handleIsOpen()}
                            className='btn-video'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <OndemandVideoIcon className='icono-video' />
                        </button>
                        {/* msj toolTip */}
                        {
                            showTooltipVideo && <div className="tooltip">{tooltipTextVideo}</div>
                        }
                    </div>
                    <div className='cont-info-titulo'>
                        {
                            propiedad.operacion?.map(o => {
                                return(
                                    <div key={o.operacion_id}>
                                        <p>{o.operacion}</p>
                                    </div>
                                )
                            })
                        }                        
                        <p> - </p>
                        <p>{moneda}{precio}</p>                                                
                    </div>
                </div>

                {/* carrusel y datos */}
                <div className='cont-imgs-info'>
                    <div className='info-imagenes'>
                        {
                            propiedad?.imagenes
                                ?
                                <Carrusel imagenes={propiedad.imagenes} />
                                :
                                <p>No img</p>
                        }
                    </div>

                    <div className='info-textos'>
                        <span>DETALLES DE LA PROPIEDAD</span>

                        <div className='cont-datos'>
                            <p>Ambientes: </p>
                            <p className='dato'>{propiedad.ambientes}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Dormitorios: </p>
                            <p className='dato'>{propiedad.dormitorios}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Baños: </p>
                            <p className='dato'>{propiedad.baños}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup Cubierta: </p>
                            <p className='dato'>{propiedad.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup Semicubierta: </p>
                            <p className='dato'>{propiedad.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup tot: </p>
                            <p className='dato'>{propiedad.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Dirección: </p>
                            <p className='dato'>{propiedad.direccion}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Barrio: </p>
                            <p className='dato'>{propiedad.barrio}</p>
                        </div>
                    </div>
                </div>

                {/* descrip prop y form contacto*/}
                <div className='cont-titulo-descripcion-form'>
                    <div className='cont-descrip'>
                        <p className='titulo-descrip-prop'>Descripción Propiedad</p>
                        {/* Renderizar HTML dentro de la descripción */}
                        <p
                            className='p-descrip'
                            dangerouslySetInnerHTML={{ __html: propiedad.descripcion }}
                        />
                    </div>
                    {/* formulario contacto */}
                    <div className='cont-formulario-detalle'>
                        <FormularioContacto />
                    </div>
                </div>
                
                {/* google map */}
                <div className='cont-map'>
                    <p>Ubicacion Propiedad</p>
                    <MapProp 
                        lat={propiedad.geoLat} 
                        lng= {propiedad.geoLong}
                    />
                </div>

                {/* Modal Video */}
                {
                    contexto.isOpenModalVideo && <ModalVideo/>
                }
            </div>
        </div>
    )
}

export default DetalleProp;