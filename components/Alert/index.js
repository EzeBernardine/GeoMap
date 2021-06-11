import React from "react";
import { Container, Close, IconType, Children } from "./styles";
import {
  SuccessOutlineIcon,
  CloseIcon,
  ErrorOutlineIcon,
  WarningIcon,
  InfoIcon,
} from "../../public/assets/svg";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Alert = ({ type, duration, children }) => {
  // handle the display of the alert component.
  const [visible, setVisible] = useState(true);

  // different alert types
  const types = {
    success: <SuccessOutlineIcon width="20px" height="20px" />,
    error: <ErrorOutlineIcon width="20px" height="20px" />,
    warning: <WarningIcon width="20px" height="20px" />,
    info: <InfoIcon width="20px" height="20px" />,
  };

  useEffect(() => {
    let timeout =
      duration &&
      /**
       * visible determines if the alert component is displayed or not is set to false after a a period of time.
       *
       * If no duration is set,
       * it remains true keeping the alert component always visible.
       */
      setTimeout(() => {
        setVisible(false);
      }, duration);

    return () => timeout && clearTimeout(timeout); //Clears the setTimeout to avoid errors
  }, [children, duration, type]);

  return (
    <>
      {visible ? (
        <Container type={type}>
          <IconType type={type}>{types[type]}</IconType>

          {!duration ? (
            <Close onClick={() => setVisible(false)}>
              <CloseIcon width="10px" height="10px" />
            </Close>
          ) : null}

          <Children type={type}>
            <span>{children}</span>
          </Children>
        </Container>
      ) : null}
    </>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["error", "success", "warning", "info"]),
  children: PropTypes.elementType,
  duration: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};
export default Alert;
