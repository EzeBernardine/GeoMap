import { ButtonStyle } from "./styles";

const Button = (props) => {
  return (
    <ButtonStyle
      type={"submit"}
      disabled={props.disabled}
      onClick={props.click}
      {...props}
    >
      {props.text}
    </ButtonStyle>
  );
};
export default Button;
