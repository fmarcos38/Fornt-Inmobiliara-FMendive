import axios from "axios";
import { 
    DETALLE_PORP, FILTRA_OPERACION_TIPO,  FILTRA_PRECIO,  GET_PROPS, IS_OPEN_MODAL_PICTURE, 
    LOADING, 
    MUESTRA_DESTACADAS, RESET_DETALLE,   
} from "./ActionsType";
import { actual } from "../../urls";


//trae props
export const getProps = (limit=0, offset=0) => {
    return async function(dispatch){
        dispatch({type: LOADING});//loading
        
        const resp = await axios.get(`${actual}/propiedades?limit=${limit}&offset=${offset}`)  
        dispatch({type: GET_PROPS, payload: resp.data});    
    }
};

//filtra por operacion y tipo
export const filtraOperacionTipo = (obj) => {
    return function(dispatch){
        dispatch({type: FILTRA_OPERACION_TIPO, payload: obj});
    }
};

//muestra props destacadas
export const muestraDestacadas = (obj) => {
    return function(dispatch){
        dispatch({type:MUESTRA_DESTACADAS, payload:obj});
    }
};

//detalle prop
export const detalleProp = (id) => {
    return function(dispatch){
        dispatch({type: DETALLE_PORP, payload: id});
    }
};

//reset detalle
export const resetDetalle = () => {
    return function(dispatch) {
        dispatch({ type: RESET_DETALLE });
    }
};

//cierra Modal imagen prop
export const isOpenModalPicture = () => {
    return function(dispatch){
        dispatch({type: IS_OPEN_MODAL_PICTURE});
    }
};

//filtra por precio min y max
export const filtraPrecio =(data) => {
    return function(dispatch){
        dispatch({type: FILTRA_PRECIO, payload: data});
    }
}