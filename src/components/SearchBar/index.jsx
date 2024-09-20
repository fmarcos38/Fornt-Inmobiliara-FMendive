import React, { useState } from 'react'
import './estilos.css';
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
    const [palabra, setPAlabra] = useState("");

    const handleChange = (e) => {};
    const handleSubmit = (e) => {};


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="search-bar">
                    <input type='text' value={palabra} onChange={(e) => handleChange(e)} className='search-input' placeholder='busca por palabra: casa'/>
                    <button className="search-button">
                        <SearchIcon className='search-icon'/>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar