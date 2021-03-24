import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import './Main-map.css';
import "@reach/combobox/styles.css";


import React from 'react';

const libraries = ["places"];
const mapContainerStyle = {
  width: "45vw",
  height: "60vh",
}

const options = {
  disableDefaultUI: true,
  zoomControl: true
}

function Map() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries
  });

  const [markers, setMarkers] = React.useState([{lat: 41.38179741674477,
    lng: 2.172604965326068,
    time: new Date()
    }]);
  const [selected, setSelected] = React.useState(null);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) {
    return "Error loading maps";
  }
  if(!isLoaded) {
    return "Loading maps";
  }

    return (
  <div className="contact-container">
    <h3>Casa de Aurora&reg;</h3>
    <div className="map-container">
      <GoogleMap mapContainerStyle={mapContainerStyle}
      zoom={14} 
      center={{lat: 41.38179741674477, lng: 2.172604965326068}}
      options={options}
      // onClick={(event) => {
      //   setMarkers((current) => [
      //     ...current,
      //   {lat: event.latLng.lat(),
      //   lng: event.latLng.lng(),
      //   time: new Date() 
      //   }
      //   ]);
      //   }}
      onLoad={onMapLoad}
        >
        {markers.map(marker => (
        <Marker key={marker.time.toISOString()}
        position={{lat: marker.lat, lng: marker.lng}}
        icon={{
        url:'/furniture-stores.png',
        scaledSize: new window.google.maps.Size(21, 28),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(10.5, 14)
             }}
             onClick={() => {
               setSelected(marker);
             }}
        />   
        ))}

        {selected ? (
          <InfoWindow position={{lat: selected.lat, lng: selected.lng}} 
          onCloseClick={() => {
            setSelected(null)
          }}>
            <div>
              <p>Casa de Aurora</p>
              <p>08002 Barcelona</p>
              <p>Rambla de Sant Josep, 85</p>
              <p>+34 323 434 545</p>
              <p>Monday-Friday: 09:00 - 17:00</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
    <div className="info-container">
      <h2>Casa de Aurora</h2>
      <h3>Where to find us:</h3>
      <p>08002 Barcelona</p>
      <p>Rambla de Sant Josep, 85</p>
      <p>+34 323 434 545</p>
      <p>office@casadeaurora.com</p>
    </div>
  </div>
    )
}

export default Map;