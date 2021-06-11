import {
  AddressStyle,
  Title,
  ImageSection,
  LayoutImage,
  LocationWrap,
  LocationImage,
  CameraWrap,
  ButtonWrap,
} from "./styles";
import Button from "../../components/Button";
import LocationImg from "../../public/assets/icon-map-pin.png";
import { useEffect, useState, useRef } from "react";
import { LocalStorageState } from "../../lib";
import { GetStaticMap } from "../../lib/map";
import { ClearCameraStream, Camera } from "../../lib/camera";
import AddressField from "./Fields/address";
import PhoneField from "./Fields/phoneNumber";
import PasswordField from "./Fields/password";
import Data from "./Data";
import Alert from "../../components/Alert";
import { useRouter } from "next/router";

const Address = () => {
  const Router = useRouter();
  const form = {
    building: null,
    streetName: null,
    addressType: null,
    phoneNumber: null,
    password: null,
  };

  const [
    {
      location: { lat, lng },
      stream,
      formValues,
      field,
    },
    setState,
  ] = useState({
    location: "",
    stream: null,
    formValues: form,
    field: 1,
  });

  let key = process.env.GEO_LOCATION_API;

  let video = useRef();
  let canvas = useRef();
  let mapholder = useRef();

  useEffect(() => {
    GetStaticMap(mapholder.current, lat, lng, key);
    let valueInLocalStorage = LocalStorageState("GPS");
    setState((prev) => ({ ...prev, location: valueInLocalStorage }));
  }, [lat, lng, key]);

  const callCamera = () => {
    Camera({ video: true }).then((stream) => {
      video.current.srcObject = stream;
      video.current.play();
      return setState((prev) => ({ ...prev, stream }));
    });
  };

  const captureImage = () => {
    let context = canvas.current.getContext("2d");
    context.drawImage(video.current, 0, 0, 300, 300);
    ClearCameraStream(stream);
    return setState((prev) => ({ ...prev, stream: false }));
  };

  const fields = {
    1: <AddressField setState={setState} />,
    2: <PhoneField setState={setState} />,
    3: <PasswordField setState={setState} formValues={formValues} />,
  };

  useEffect(() => {
    field > 3 &&
      stream === false &&
      setTimeout(() => {
        Router.push("/");
      }, 5000);
  });
  return (
    <AddressStyle>
      {stream !== false && (
        <Alert type={"info"}>Add a photo and fill the form below.</Alert>
      )}

      {field > 3 && stream === false && (
        <Alert type={"success"}>OkHi address save</Alert>
      )}

      <Title>{field === 1 ? "Add address details" : "Save my address"}</Title>

      <ImageSection height="160px">
        <LocationWrap width="50%">
          <LayoutImage object="cover" ref={mapholder}>
            <img alt="staticmap" />
          </LayoutImage>
          <LocationImage object="contain" width="30px" height="30px">
            <img src={LocationImg} alt="LocationImage" />
          </LocationImage>
        </LocationWrap>

        <LocationWrap width="50%">
          <LayoutImage>
            <canvas ref={canvas} width="300px" height="300px"></canvas>
          </LayoutImage>
          <ButtonWrap>
            <Button
              type="button"
              text="Add photo"
              color="darkTeal"
              border="darkTeal"
              width="104px"
              size="xxsmall"
              bgColor="transaprent"
              disabled={stream}
              click={() => callCamera()}
            />
          </ButtonWrap>
        </LocationWrap>
      </ImageSection>

      <CameraWrap width="100%" height="300px" object="cover" visible={stream}>
        <video id="video" ref={video} alt="sdnkj"></video>
        <ButtonWrap position="absolute">
          <Button
            type="button"
            text="Capture"
            color="darkTeal"
            border="darkTeal"
            width="104px"
            size="xxsmall"
            bgColor="transaprent"
            disabled={!stream}
            click={() => captureImage()}
          />
        </ButtonWrap>
      </CameraWrap>

      {formValues.streetName ? <Data formValues={formValues} /> : null}

      {field > 3 ? null : fields[field]}
    </AddressStyle>
  );
};
export default Address;
