import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import { IPContext } from "../Contexts/IPContextProvider.jsx";

function MyComponent({location}) {
    
    const map = useMap();   
    useEffect(() => {
        map.flyTo(location)
    },[location]);
    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </>
    );
}

export default function Map() {
    const { ipDetails } = useContext(IPContext);
    const [location, setLocation] = useState([51.505, -0.09]);

    useEffect(() => {
        if (ipDetails) {
            GetIPLattitudes();
        }
    }, [ipDetails]);

    let GetIPLattitudes = async () => {
        const res = await fetch(
            "https://nominatim.openstreetmap.org/search?format=json&q=" +
                ipDetails.location.region +
                "," +
                ipDetails.location.country
        );
        const data = await res.json();
        setLocation([data[0]?.lat, data[0]?.lon]);
    };

    return (
        <div className="map">
            <MapContainer center={location} zoom={13} scrollWheelZoom={true}>
                <MyComponent location={location}/>
            </MapContainer>
        </div>
    );
}
