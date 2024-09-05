import React, { useState } from 'react'
import './styles.css';
import { propiedades } from '../../Helps/propiedades';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenModalPicture } from '../../Redux/Actions';
import Modal from '../../components/Modal';

function Carrusel({imagenes}) {

    const prop = propiedades[0];
    const [indexImgActual, setIndexImgActual] = useState(0);
    const dispatch = useDispatch();    
    const isOpen = useSelector(state => state.isOpenModalPicture);

    const handleClickPrev = () => {
        if(indexImgActual === 0){ return }
        else{
            setIndexImgActual(indexImgActual - 1);
        }
    };
    const handleClickNext = () => {
        if(indexImgActual === prop.imagenes.length -1){ return }
        else{
            setIndexImgActual(indexImgActual + 1);
        }
    };
    /* funcion para mostrar la img selecc de las de abajo */
    const handleClick = ( index ) => {
        setIndexImgActual(index);
    };
    const handleOpenModal = () => {
        dispatch(isOpenModalPicture());
    };
    
    return (
        <div className='contGralCarrusel'>
            <div className='cont-img-btns'>
                {/* btn atrás */}
                <button className='btn-carrusel-prev' onClick={() => handleClickPrev()}>
                    <ArrowBackIosNewIcon />
                </button>

                {/* imagen a mostrar */}
                <img src={prop.imagenes[indexImgActual]} alt='' className='img-carrusel' onClick={() => handleOpenModal()}/>

                {/* btn prox */}
                <button className='btn-carrusel-next' onClick={() => handleClickNext()}>
                    <ArrowForwardIosIcon />
                </button>
            </div>

            {/* cont imagenes pequeñas */}
            <div className='cont-imgs-peq'>
            {
                prop.imagenes.map((img, index) => (
                    <img
                        key={index}
                        src={img} 
                        alt={`Thumbnail ${index}`}
                        className={index === indexImgActual ? "active" : ""}
                        onClick={() => handleClick(index)}
                    />
                ))
            }
            </div>

            {/* Modal img */}
            {
                isOpen && (
                    <div className='modal-overlay'>
                        <Modal /* imgProp={prop.imagenes[indexImgActual]} */imagenes={prop.imagenes}/>
                    </div>
                )
            }
            
        </div>
    )
}

export default Carrusel