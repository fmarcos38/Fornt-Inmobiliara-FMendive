import React from 'react'
import { useSelector } from 'react-redux';
import ListaPropiedades from '../../components/ListaPropiedades';
import './estilos.css'

function ListaFavoritos() {
    let listaFav = JSON.parse(localStorage.getItem('favorites'));
    const allProps = useSelector(state => state.propiedades);
    let newArrayFav = [];


    //busca cada prop q tengo en Fav an el array de props global
    for(let i =0; i<listaFav.length; i++){
        for(let j=0; j<allProps.length; j++){
            if(allProps[j].id === listaFav[i]){
                newArrayFav.push(allProps[j]);
            }
        }
    }

    return (
        <div className='cont-gralFavoritos'>
            <div className='cont-titulo-listaFav'>
                <h1>Tus propiedades favoritas</h1>
                <div className='cont-props-fav'>
                    <ListaPropiedades allProps={newArrayFav} />
                </div>
            </div>
        </div>
    )
}

export default ListaFavoritos