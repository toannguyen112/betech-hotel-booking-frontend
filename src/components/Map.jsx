import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Map() {
    const rooms = useSelector((state) => state.room.rooms);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA240TpAgy1o7qBKNULEPucJNorEpNT5Z8"
    })

    const detailRoom = (item) => {
        navigate({
            pathname: `/room/${item.id}`
        });
    }
    const navigate = useNavigate();

    return isLoaded ? (
        <GoogleMap
            center={{ lat: 20.865139, lng: 106.683830 }}
            zoom={5}
            mapContainerClassName="map-container"
        >
            {
                rooms.map((item, index) => {
                    return (
                        <Marker
                            key={index}
                            title={item.name}
                            onClick={() => detailRoom(item)}
                            position={{
                                lat: item.lat, lng: item.lng
                            }} />
                    )
                })
            }

        </GoogleMap>
    ) : null
}

export default Map