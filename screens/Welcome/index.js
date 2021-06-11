import { WelcomeStyle, Header1, ButtonWrap } from "./styles";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import { Container } from "../../components/Box/styles";

const WelcomePage = ({ loadMap, error }) => {
  return (
    <WelcomeStyle>
      <Header1>
        Eze Bernardine's OkHi Engineering Assignment for fronteend role
      </Header1>

      {error !== null ? (
        <Container margin="0 0 20px 0">
          <Alert type="warning">
            Please ensure location permissions are on
          </Alert>
        </Container>
      ) : null}

      <ButtonWrap>
        <Button
          type="button"
          text="Start"
          color="darkTeal"
          border="darkTeal"
          size="large"
          bgColor="white"
          disabled={error !== null}
          onClick={() => loadMap()}
        />
      </ButtonWrap>
    </WelcomeStyle>
  );
};
export default WelcomePage;
