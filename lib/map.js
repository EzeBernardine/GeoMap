import React from "react";
/**
 *
 * @param {Object} map
 * @param {Object} position
 * @returns an geolocation marker object
 */
export const Marker = (map, position) =>
  new window.google.maps.Marker({ map, position });

/**
 *
 * @param {Object} marker
 * @param {Number} lat
 * @param {Number} lng
 * @returns the marker to the current position
 */
export const SetPosition = (marker, lat, lng) =>
  marker.setPosition({
    lat: lat,
    lng: lng,
  });

/**
 *
 * @param {Object} map
 * @param {Number} lat
 * @param {Number} lng
 * @returns moves the map to the current position
 */
export const PanTo = (map, lat, lng) =>
  map.panTo({
    lat: lat,
    lng: lng,
  });

/**
 *
 * @param {Element} element
 * @param {Object} param1
 * @returns the map element
 */
export const Map = (element, { lat, lng }) =>
  new window.google.maps.Map(element, {
    center: { lat, lng },
    zoom: 9,
  });

/**
 *
 * @param {Object} param0
 * @returns the map position object
 */
export const Position = ({ lat, lng }) =>
  new window.google.maps.LatLng(lat, lng);

/**
 *
 * @param {Object} map
 * @param {Object} marker
 * @returns afunction to reset marker to the center of the page
 */
export const CenterMarker = (map, marker) =>
  google.maps.event.addListener(map, "center_changed", () => {
    window.setTimeout(() => {
      marker.setPosition(map.getCenter());
    }, 100);
  });

/**
 *
 * @param {String} url
 */
export const LoadScript = (url) => {
  const index = document.getElementsByTagName("script")[0];
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
};

/**
 *
 * @param {Function} param0
 * @param {Object} options
 * @returns a call to map api
 */
export const TrackLocation = ({ onSuccess, onError }, options) => {
  if ("geolocation" in navigator === false) {
    return new Error("Geolocation is not supported by your browser.");
  }
  return navigator.geolocation.watchPosition(onSuccess, onError, options);
};

/**
 *
 * @param {Element} element
 * @param {Number} lat
 * @param {Number} lng
 * @param {String} key
 * @returns image tag
 */
export const GetStaticMap = (element, lat, lng, key) => {
  let img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&amp;zoom=14&amp;size=400x300&amp;key=${key}`;
  return (element.innerHTML = "<img src='" + img_url + "'>");
};

/**
 *
 * @param {Element} watch
 * @returns a call to clear geolocation watch
 */
export const ClearGeoLocationWatch = (watch) =>
  window.navigator.geolocation.clearWatch(watch);
