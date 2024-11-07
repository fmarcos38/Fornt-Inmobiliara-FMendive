import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const MapProp = ({ geoLat, geoLong }) => {

    const API_KEY = process.env.REACT_APP_API_GOOGLE_MAP;

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY // Reemplaza con tu API Key de Google Maps
    });

    const center = {
        lat: -38.0257007,
        lng: -57.5616034
    };

    console.log("Latitud:", center.lat, "Longitud:", center.lng); // Confirmar coordenadas

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '400px', position: 'relative' }}
        >
            <Marker
                position={center}
            />
        </GoogleMap>
    );
};

export default MapProp;
