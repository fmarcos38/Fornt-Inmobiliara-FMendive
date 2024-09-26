import React, { useEffect, useState } from 'react';
import NoHayProps from '../NoHayProps';
//import CardFavorito from '../CardFavorito';
import Loading from '../Loading';
import './estilos.css';
import Card from '../Card';

function ListaFavoritos({allProps}) {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fav = JSON.parse(localStorage.getItem('favorites'));
        if(fav.length){
            setLoading(false);
        }
    },[]);

    return (
        <div className='cont-listaProps-fav'>
            <h1 className='titulo-lista-props-fav'>Propiedades Favoritas</h1>
            {
                loading ? (
                    <>
                        <Loading/>
                    </>
                ) : (
                    <div className='cont-card-lista-props'>                        
                        {
                            allProps[0] ?
                            allProps.map(p => {
                                return (
                                    <div className='cont-card-Fav-listaProps' key={p.id}>
                                        <Card 
                                            key={p.id}
                                            id={p.id}
                                            direccionF={p.direccionF}
                                            cantCocheras={p.cantCocheras}
                                            operacion={p.operacion}
                                            imagenes={p.imagenes}
                                            tituloPublicacion={p.tituloPublicacion}
                                            ambientes={p.ambientes}
                                            dormitorios={p.dormitorios}
                                            unidadMedida={p.unidadMedida}
                                            tipo={p.tipo}
                                        />
                                    </div>
                                )
                            }) : (
                                <div className='no-props'>
                                    <NoHayProps/>
                                </div>
                            )
                        }
                    </div>
                )
            }
            
        </div>
    )
}

export default ListaFavoritos;