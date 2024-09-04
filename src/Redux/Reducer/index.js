import { 
    DETALLE_PORP, FILTRA_OPERACION_TIPO, GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING, MUESTRA_DESTACADAS, 
    RESET_DETALLE, FILTRA_PRECIO, 
} from "../Actions/ActionsType";

const initialState = {
    propiedades: [],
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
                propiedades: action.payload,
            };
        case FILTRA_OPERACION_TIPO: 
            let propsF = [...state.propiedades];
            const {operacion, tipo} = action.payload;

            propsF = propsF.filter(p => {
                if(operacion && tipo){
                    return p.operacion === operacion && p.tipo === tipo;
                }else if(operacion){
                    return p.operacion === operacion;
                }else if(tipo){
                    return p.tipo === tipo;
                }else{
                    return propsF;
                }
            });  
            
            return{
                ...state,
                propiedades: propsF,
            };
        case FILTRA_PRECIO:
            const allPropsP = [...state.propiedades];
            let resultPropsPrecio = allPropsP.filter(prop => (prop.precio >= action.payload.min) && (prop.precio <= action.payload.max));
            let resultPropsTipo = resultPropsPrecio.filter(prop => {
                if (action.payload.operacion !== 'all') {
                    return prop.operacion === action.payload.operacion;
                } else {
                    return prop;
                }
            });
            return {
                ...state,
                propiedades: resultPropsTipo
            };
        case MUESTRA_DESTACADAS:
            let allProps = [...state.propiedades];
            const {operacionD, destacada} = action.payload;

            const destacadas = allProps.filter(p => {
                if(operacionD && destacada){
                    return p.operacion === operacion && p.destacada === destacada;
                }else{
                    return p.destacada === destacada;
                }
            });
            
            return{
                ...state,
                propiedades: destacadas
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