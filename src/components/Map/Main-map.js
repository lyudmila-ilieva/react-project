import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
// import '/Map.css';
import "@reach/combobox/styles.css";
import React from 'react';

const libraries = ["places"];
const mapContainerStyle = {
  widht: "100vw",
  height: "100vh"
}

const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

function Map() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries
  });

  const [markers, setMarkers] = React.useState([]);

  if (loadError) {
    return "Error loading maps";
  }
  if(!isLoaded) {
    return "Loading maps";
  }

    return (
    <div>
      <h1>Stores <span role="img" area-label="store">🏪</span></h1>
      <GoogleMap mapContainerStyle={mapContainerStyle}
      zoom={14} 
      center={{lat: 43.216640, lng:27.911810}}
      options={options}
      onClick={(event) => {
        setMarkers((current) => [
          ...current,
        {lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      time: new Date() 
        }
        ]);
        }}
        >
        {markers.map(marker => (
        <Marker key={marker.time.toISOString()}
        position={{lat: marker.lat, lng: marker.lng}}
        icon={{
        url:'/icon-furniture-store.png',
        scaledSize: new window.google.maps.Size(30,30),
             }}
        />   
        ))}
      </GoogleMap>
    </div>
    )
}

export default Map;