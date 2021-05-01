import React, { useState } from "react";
// import dynamic from "next/dynamic";
import { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import dynamic from "next/dynamic";
const MapFor = dynamic(() => import("../config/mapbox"), {
  ssr: false,
});

const Map = () => {
  // const [viewport, setViewport] = useState({
  //   // width: "100px",
  //   // height: "50%",
  //   // The latitude and longitude of the center of London
  //   // latitude: 41.311081,
  //   // longitude: 69.240562,
  //   zoom: 2,
  // });
  return (
    <div>
      <MapFor
        zoom={[12]}
        center={[69.24058, 41.311081]}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "700px",
          width: "100%",
        }}
      >
        {/* <Layer
          type="circle"
          id="marker"
          paint={{
            "circle-radius": 50,
            "circle-color": "#E54E52",
            "circle-opacity": 1,
          }}
        >
          <Feature coordinates={[41.311081, 69.240562]} />
        </Layer> */}
      </MapFor>
    </div>
  );
};

export default Map;
