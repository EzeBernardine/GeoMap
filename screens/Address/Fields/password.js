import { Container, Label, FieldWrap } from "./styles";
import { Flex, Grid } from "../../../components/Box/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "../../../components/Button";
import { LocalStorageState } from "../../../lib";

const PasswordField = ({ setState, formValues }) => {
  const validationSchema = yup.object().shape({
    password: yup.string().min(5).required("Provide a password"),
  });
  return (
    <Container>
      <Flex justify="flex-start">
        <Formik
          initialValues={{
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={({ password }) => {
            setState((prev) => ({
              ...prev,
              field: prev.field + 1,
            }));
            LocalStorageState("userDetails", { ...formValues, password });
          }}
        >
          {({ handleChange, values: { password }, dirty }) => (
            <Form>
              <Grid gap="19px">
                <div>
                  <FieldWrap alignItems="flex-start" direction="column">
                    <Label htmlFor="password">Password</Label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </FieldWrap>
                  <ErrorMessage name="password" component="div" />
                </div>
              </Grid>
              <Button
                type="submit"
                text="Next"
                color="Spearmint"
                border="darkTeal"
                size="large"
                bgColor="darkTeal"
                disabled={!dirty}
              ></Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Container>
  );
};

export default PasswordField;
