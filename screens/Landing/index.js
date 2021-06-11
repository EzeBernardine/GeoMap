import { useState } from "react";
import MapPage from "../Map";
import Welcome from "../Welcome";
import {
  Marker,
  SetPosition,
  PanTo,
  Map,
  Position,
  LoadScript,
  CenterMarker,
  TrackLocation,
} from "../../lib/map";

const Landing = () => {
  const [{ component, error, location, accuracy, watch }, setState] = useState({
    component: "Welcome",
    error: null,
    location: { lat: 59.325, lng: 18.069 },
    accuracy: false,
    watch: "",
  });
  let key = process.env.GEO_LOCATION_API;

  const initMap = () => {
    let map = Map(document.getElementById("map"), location);
    let position = Position(location);
    let marker = Marker(map, position);
    CenterMarker(map, marker);

    const watch = TrackLocation(
      {
        onSuccess: ({
          coords: { latitude: lat, longitude: lng, accuracy },
        }) => {
          SetPosition(marker, lat, lng);
          PanTo(map, lat, lng);

          setState((prev) => ({
            ...prev,
            component: "Map",
            location: { lat, lng },
            accuracy: accuracy && accuracy >= 150 ? true : false,
          }));
        },

        onError: (err) => {
          if (err.message === "User denied geolocation prompt") {
            setState((prev) => ({
              ...prev,
              error: err.message,
            }));
          } else new Error(err.message);
        },
      },
      {
        enableHighAccuracy: true,
        timeout: 3000,
        //   maximumAge: 0,
      }
    );

    //set watch as a state
    return setState((prev) => ({
      ...prev,
      watch: watch,
    }));
  };

  const loadMap = () => {
    LoadScript(
      `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap&libraries=&v=weekly`
    );
    window.initMap = initMap;
  };

  return (
    <div>
      {component !== "Map" ? <Welcome loadMap={loadMap} error={error} /> : null}
      <MapPage
        visible={component === "Map"}
        states={[location, accuracy, watch]}
      />
    </div>
  );
};
export default Landing;
