/**
 *
 * @param {Element} stream
 * @returns clears the web camp
 */
export const ClearCameraStream = (stream) => {
  return stream.getTracks().forEach((track) => track.stop());
};

/**
 * 
 * @param {Object} options 
 * @returns call to camera api
 */
export const Camera = (options) =>
  window.navigator.mediaDevices.getUserMedia(options);
