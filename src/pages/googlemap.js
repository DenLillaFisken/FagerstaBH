import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import mapStyle from './mapstyle.json'
import icon from '../images/maps-icon.svg'

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 60.000190,
  lng: 15.796610
};

const createMapOptions = {
    mapTypeControl: false,
    scrollwheel: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles: mapStyle
};


function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCuReAMiFR5UMM5QNXZ83kUKezIjsagEjM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={createMapOptions} 
      >
      <Marker
        icon={icon}
        position={center}
      />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)



















// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100vw',
//   height: '80vh'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyCuReAMiFR5UMM5QNXZ83kUKezIjsagEjM"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

//export default React.memo(MyComponent)


//  import React from "react";
//  import { GoogleMap, useJsApiLoader, Marker, withGoogleMap, withScriptjs} from '@react-google-maps/api';
// import Map from "../components/Map";


//  const MapWrapped = withScriptjs(withGoogleMap(Map));

//  export default function App() {
//    return (
//      <div style={{ width: "100vw", height: "100vh" }}>
//        <MapWrapped
//          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
//            process.env.REACT_APP_GOOGLE_KEY
//          }`}
//          loadingElement={<div style={{ height: `100%` }} />}
//          containerElement={<div style={{ height: `100%` }} />}
//          mapElement={<div style={{ height: `100%` }} />}
//        />
//      </div>
//    );
//  }


 // import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import mapStyle from './mapstyle.json'


// const containerStyle = {
//     width: '100vw',
//     height: '80vh'
//   };
  
//   const center = {
//     lat: 60.000190,
//     lng: 15.796610
//   };


//   function MyComponent(props) {
//     const { isLoaded } = useJsApiLoader({
//       id: 'google-map-script',
//       googleMapsApiKey: 'AIzaSyCuReAMiFR5UMM5QNXZ83kUKezIjsagEjM'
//     })
  
//     const [map, setMap] = React.useState(null)
  
//     const onLoad = React.useCallback(function callback(map) {
//       const bounds = new window.google.maps.LatLngBounds();
//       map.fitBounds(bounds);
//       setMap(map)
//     }, [])
  
//     const onUnmount = React.useCallback(function callback(map) {
//       setMap(null)
//     }, [])
  
//     return isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           defaultCenter={{ lat: -34.397, lng: 150.644 }}
//           zoom={15}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//           options={{styles: mapStyle}}
//         >
//           {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//         </GoogleMap>
       
//     ) : <></>
//   }
  
//   export default React.memo(MyComponent)

