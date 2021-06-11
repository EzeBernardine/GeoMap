import { Container, Radio, Paragraph } from "./styles";

const Data = ({ formValues: { addressType, streetName, building } }) => {
  return (
    <Container wrap="nowrap" justifyContent="flex-start">
      <Radio value={addressType}></Radio>
      <Paragraph>
        [{building}, {streetName}]
      </Paragraph>
    </Container>
  );
};

export default Data;
