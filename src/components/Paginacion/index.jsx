import React from 'react';
import './estilos.css';

function Paginacion({allProps,currentPage, onPageChange, totalPropiedades}) {

    //total props / props por pag
    const totalPaginas = Math.ceil(totalPropiedades / allProps.length);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1); // Cambiamos a la página anterior
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPaginas) {
            onPageChange(currentPage + 1); // Cambiamos a la siguiente página
        }
    };

    return (
        <div className="paginacion-container">
            <button
                className="paginacion-button"
                onClick={() => handlePrevPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </button>

            <span className="paginacion-info">
            Página {currentPage} de {totalPaginas}
            </span>

            <button
                className="paginacion-button"
                onClick={() => handleNextPage(currentPage + 1)}
                disabled={currentPage === totalPaginas}
            >
                Siguiente
            </button>
        </div>
    );
};


export default Paginacion