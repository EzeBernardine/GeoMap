import { Container, Label, FieldWrap } from "./styles";
import { Flex, Frame, Grid } from "../../../components/Box/styles";
import { useState } from "react";
import Button from "../../../components/Button";

const PhoneField = ({ setState }) => {
  const [{ error, phoneNumber }, setPassword] = useState({
    error: true,
    phoneNumber: "",
  });

  const handleChange = () => {
    if (phoneNumber[0] !== "+")
      setPassword((prev) => ({
        ...prev,
        error: "Phone number must start with +",
      }));
    else if (/[~`!#$%&*+=\-\]\\';,/{}|\\":<>]/g.test(phoneNumber.substring(1)))
      setPassword((prev) => ({
        ...prev,
        error: "Phone number should not contain special characters",
      }));
    else if (phoneNumber.match(/[a-z]/i))
      setPassword((prev) => ({
        ...prev,
        error: "Phone number should not contain alpha characters",
      }));
    else if (/\s/.test(phoneNumber))
      setPassword((prev) => ({
        ...prev,
        error: "Phone number should not contain space character",
      }));
    else if (phoneNumber.length < 7)
      setPassword((prev) => ({
        ...prev,
        error: "Phone number is too short",
      }));
    else setPassword((prev) => ({ ...prev, error: false }));
  };
  return (
    <Container>
      <Flex justify="flex-start">
        <form>
          <Grid gap="19px">
            <div>
              <FieldWrap alignItems="flex-start" direction="column">
                <Label htmlFor="phoneNumber">Phone number</Label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Eg +2437000000000"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPassword((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value.trim(),
                    }))
                  }
                  onKeyUp={handleChange}
                />
              </FieldWrap>
              {error ? <div>{error}</div> : null}
            </div>
          </Grid>
          <Button
            type="submit"
            text="Next"
            color="Spearmint"
            border="darkTeal"
            size="large"
            disabled={error}
            bgColor="darkTeal"
            click={() =>
              setState((prev) => ({
                ...prev,
                field: prev.field + 1,
                formValues: { ...prev.formValues, phoneNumber },
              }))
            }
          ></Button>
        </form>
      </Flex>
    </Container>
  );
};

export default PhoneField;
