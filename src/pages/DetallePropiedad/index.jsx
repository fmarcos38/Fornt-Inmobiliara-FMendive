import React, { useContext, useEffect, useState } from 'react';
import './estilos.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detalleProp, resetDetalle } from '../../Redux/Actions';
import Carrusel from '../../components/Carrusel';
import MapProp from '../../components/MapaProp';
import FormularioContacto from '../../components/FormularioContacto';
import { InmobiliariaContext } from '../../Context';
import ModalVideo from '../../components/ModalVideo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function DetalleProp(){

    const detalle_prop = useSelector(state => state.detalleProp);//propiedades[0];
    const dispatch = useDispatch();
    const { id } = useParams();  //let id = props.match.params.id 
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
        dispatch(detalleProp(id));

        return () => { dispatch(resetDetalle()); }
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
                        {
                            detalle_prop.video && (
                                <>
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
                                </>
                            )
                        }
                    </div>
                    <div className='cont-info-titulo'>
                        <p>VENTA</p>
                        <p> - </p>
                        <p>USD {detalle_prop.precio}</p>
                    </div>
                </div>

                {/* carrusel y datos */}
                <div className='cont-imgs-info'>
                    <div className='info-imagenes'>
                        {
                            detalle_prop?.imagenes
                                ?
                                <Carrusel imagenes={detalle_prop.imagenes} />
                                :
                                <p>No img</p>
                        }
                    </div>

                    <div className='info-textos'>
                        <span>DETALLES DE LA PROPIEDAD</span>

                        <div className='cont-datos'>
                            <p>Ambientes: </p>
                            <p className='dato'>{detalle_prop.ambientes}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Dormitorios: </p>
                            <p className='dato'>{detalle_prop.dormitorios}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Baños: </p>
                            <p className='dato'>{detalle_prop.baños}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup Cubierta: </p>
                            <p className='dato'>{detalle_prop.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup Semicubierta: </p>
                            <p className='dato'>{detalle_prop.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Sup tot: </p>
                            <p className='dato'>{detalle_prop.sup}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Dirección: </p>
                            <p className='dato'>{detalle_prop.direccion}</p>
                        </div>
                        <div className='cont-datos'>
                            <p>Barrio: </p>
                            <p className='dato'>{detalle_prop.barrio}</p>
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
                            dangerouslySetInnerHTML={{ __html: detalle_prop.descripcion_Detalle }}
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
                    <MapProp direccionProp={detalle_prop.direccion}/>
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