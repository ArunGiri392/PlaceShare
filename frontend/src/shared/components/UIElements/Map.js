import React, { useRef, useEffect } from "react";
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    console.log(window.log);
    if (window.ol) {
      const map = new window.ol.Map({
        target: mapRef.current,
        layers: [
          new window.ol.layer.Tile({
            source: new window.ol.source.OSM(),
          }),
        ],
        view: new window.ol.View({
          center: window.ol.proj.fromLonLat([center.lng, center.lat]),
          zoom: zoom,
        }),
      });
    } else {
      console.error("OpenLayers library is not loaded.");
    }
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
