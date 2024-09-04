import React, { useState, useEffect } from 'react';
import './estilos.css';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Favorito = ({ id }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    // Cargar favoritos desde localStorage al cargar el componente
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(id));//include retorna true o false
    }, [id]);

    // Función para quitar o agregar el id de la prop a favorito
    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorite) { //quito
            // eslint-disable-next-line no-self-compare
            const updatedFavorites = favorites.filter(id => id !== id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else { //agrego
            const updatedFavorites = [...favorites, id];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
        //actualizo estado a lo opuesto
        setIsFavorite(!isFavorite);
    };

    return (
        <button className="favorite-button"  onClick={toggleFavorite}>
            <FavoriteIcon className={`icono-fav ${isFavorite ? 'favorited' : ''}`}/>
        </button>
    );
};

export default Favorito;
