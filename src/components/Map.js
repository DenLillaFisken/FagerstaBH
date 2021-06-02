// import React, { Component } from 'react';
// import { GoogleMap, Marker } from '@react-google-maps/api';
// import * as markerData from "../pages/mapProps";

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
//     >
//       {markerData.features.map(park => (
//         <Marker
//           key={markerData.properties.PARK_ID}
//           position={{
//             lat: park.geometry.coordinates[1],
//             lng: park.geometry.coordinates[0]
//           }}
//           icon={{
//             url: `../img/lillys.svg`,
//             scaledSize: new window.google.maps.Size(25, 25)
//           }}
//         />
//       ))}
//     </GoogleMap>
//   );
// }

// export default Map

// // import React, { Component } from 'react';

// // const defaultProps = {
// //   center: {
// //     lat: 59.95,
// //     lng: 30.33,
// //   },
// //   zoom: 11,
// // }

// // const AnyReactComponent = ({ text }) => <div>{text}</div>

// // const GoogleMap = () => (
// //   <div style={{ height: '100vh', width: '100%' }}>
// //     <GoogleMapReact
// //       // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
// //       bootstrapURLKeys={{ key: 'AIzaSyCuReAMiFR5UMM5QNXZ83kUKezIjsagEjM' }}
// //       defaultCenter={defaultProps.center}
// //       defaultZoom={defaultProps.zoom}
// //     >
// //       <AnyReactComponent
// //         lat={59.955413}
// //         lng={30.337844}
// //         text={'My marker'}
// //       />
// //     </GoogleMapReact>
// //   </div>
// // )

// // export default GoogleMap