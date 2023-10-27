"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { CSSProperties, memo, useCallback, useState } from "react";

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

function GoogleMapViewer({
  styles,
  zoom,
  center,
}: {
  styles?: {
    container: CSSProperties | undefined;
  };
  zoom: number;
  center: google.maps.LatLngLiteral;
}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey!,
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  if (!apiKey) {
    console.debug("not initialized api key");
    return null;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100%",
      }}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(GoogleMapViewer);
