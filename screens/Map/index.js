import { MapStyle, ButtonWrap, MapFrame, AlertWrap } from "./styles";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import { useRouter } from "next/router";
import { ClearGeoLocationWatch } from "../../lib/map";
import { LocalStorageState } from "../../lib";

const Map = ({ visible, states: [{ lat, lng }, accuracy, watch] }) => {
  let Router = useRouter();
  const [{ disabled, alert }, setSTate] = useState({
    disabled: true,
    alert: "",
  });

  useEffect(() => {
    !accuracy
      ? setSTate({
          disabled: true,
          alert:
            "Move the map to a more precise location before proceeding to the next step",
        })
      : setSTate({ disabled: false, alert: "" });
  }, [lat, lng]);

  const getGPSPoint = () => {
    Router.push("/address");
    //save to local storage
    LocalStorageState("GPS", { lat, lng });
    return ClearGeoLocationWatch(watch);
  };
  return (
    <MapStyle visible={visible}>
      {alert.length > 0 ? (
        <AlertWrap margin="0 0 20px 0">
          <Alert type="warning">{alert}</Alert>
        </AlertWrap>
      ) : null}

      <MapFrame id="map"></MapFrame>
      <ButtonWrap>
        <Button
          type="button"
          text="Save Position"
          color="Spearmint"
          border="darkTeal"
          bgColor="darkTeal"
          size="large"
          disabled={disabled}
          click={() => getGPSPoint()}
        />
      </ButtonWrap>
    </MapStyle>
  );
};
export default Map;
