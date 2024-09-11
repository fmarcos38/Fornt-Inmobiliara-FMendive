import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty, resetProperty } from '../../Redux/Actions';
import { InmobiliariaContext } from '../../Context';
import Carrusel from '../../components/Carrusel';
import MapProp from '../../components/MapaProp';
import FormularioContacto from '../../components/FormularioContacto';
import ModalVideo from '../../components/ModalVideo';
import IconoUbicacion from '../../Imagenes/iconoUbicacion.png';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './estilos.css';
import { formatMoney } from '../../Helps';


function DetalleProp(){

    const { id } = useParams();  //let id = props.match.params.id 
    const propiedad = useSelector(state => state.propiedad);
    //obt el tipo de moneda
    const moneda =  propiedad?.operacion?.[0]?.precios?.[0]?.moneda; 
    //otengo el precio de la prop
    const precio =  propiedad?.operacion?.[0]?.precios?.[0]?.precio; 
    const navigate = useNavigate();
    const dispatch = useDispatch();    
    const contexto = useContext(InmobiliariaContext); 
    //estado para el tooltipText
    const [showTooltipVideo, setShowTooltipVideo] = useState(false);
    //estado para el tooltipText
    const [showTooltipVolver, setShowTooltipVolver] = useState(false);
    const tooltipTextVideo = "Ver video propiedad";
    const tooltipTextVolver = "Volver atrás";

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
        navigate('/');
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
                    <div className='cont-btns-atras'>
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
                    </div>
                    {/* Titulo prop */}
                    <div className='cont-info-titulo'>
                        <span className='detalle-titulo-prop'>
                            {propiedad.tituloPublicacion} - 
                        </span>
                        <img src={IconoUbicacion} alt='' style={{width:'40px', height:'40px'}}/>
                        <span className='detalle-titulo-direccion'>                           
                            {propiedad.direccion}
                        </span>
                    </div>
                    {/* Precio y Moneda */}
                    <div className='cont-info-precio'>
                        {
                            propiedad.operacion?.map(o => {
                                return(
                                    <div key={o.operacion_id}>
                                        <p className='detalle-precio'>{o.operacion}</p>
                                    </div>
                                )
                            })
                        }                        
                        <p> - </p>
                        <p className='detalle-precio'>{moneda}{formatMoney(precio)}</p>                                                
                    </div>
                </div>

                {/* carrusel y datos */}
                <div className='cont-imgs-info'>
                    <div className='cont-imagenes'>
                        {
                            propiedad?.imagenes
                                ?
                                <Carrusel imagenes={propiedad.imagenes} />
                                :
                                <p>No img</p>
                        }
                    </div>
                    <div className='cont-form-contacto'>
                        <FormularioContacto 
                            tituloPublicacion={propiedad.tituloPublicacion}
                            codigoReferencia={propiedad.codigoReferencia}
                        />
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