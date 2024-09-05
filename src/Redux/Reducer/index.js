import { 
    DETALLE_PORP, GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING, RESET_DETALLE,   
} from "../Actions/ActionsType";

const initialState = {
    propiedades: [],
    totPropiedades: 0,
    tipoOp: [],
    loading: true,
    detalleProp: {},
    isOpenModalPicture: false,
};


export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case LOADING:
        return{
            ...state,
            loading: false
        };
        case GET_PROPS:
            return {
                ...state,
                loading: false,
                propiedades: action.payload.propiedades,
                totPropiedades: action.payload.total,
            };
        case DETALLE_PORP:
            const arrProp = [...state.propiedades]; 
            let det_prop = arrProp.find(p => p.id === action.payload);            
            return{
                ...state,
                detalleProp: det_prop
            };
        case RESET_DETALLE:
            return{
                ...state,
                detalleProp: {}
            };
        case IS_OPEN_MODAL_PICTURE:
            return{
                ...state,
                isOpenModalPicture: !state.isOpenModalPicture,
            };
        default:
            return state;
    }
};