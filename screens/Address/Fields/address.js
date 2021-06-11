import { Container, Label, FieldWrap, Radio, RadioField } from "./styles";
import { Flex, Frame, Grid } from "../../../components/Box/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { generateID } from "../../../lib/generateID";
import Button from "../../../components/Button";

const AddressField = ({ setState }) => {
  const validationSchema = yup.object().shape({
    streetName: yup.string().min(2).required("Provide a street name"),
    building: yup.string().min(2).required("Provide a building name"),
    addressType: yup.string().required("Provide an address type"),
  });
  const radioFields = ["Home", "Work", "Other"];
  return (
    <Container>
      <Flex justify="flex-start">
        <Formik
          initialValues={{
            streetName: "",
            building: "",
            addressType: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async ({ streetName, building, addressType }) => {
            setState((prev) => ({
              ...prev,
              field: prev.field + 1,
              formValues: {
                ...prev.formValues,
                streetName,
                building,
                addressType,
              },
            }));
          }}
        >
          {({
            handleChange,
            values: { streetName, building },
            isSubmitting,
            dirty,
          }) => (
            <Form>
              <Grid gap="19px">
                <div>
                  <FieldWrap alignItems="flex-start" direction="column">
                    <Label htmlFor="building">Building name or number</Label>
                    <Field
                      type="text"
                      name="building"
                      id="building"
                      value={building}
                      onChange={handleChange}
                    />
                  </FieldWrap>
                  <ErrorMessage name="building" component="div" />
                </div>

                <div>
                  <FieldWrap alignItems="flex-start" direction="column">
                    <Label htmlFor="streetName">Street name</Label>
                    <Field
                      type="text"
                      name="streetName"
                      id="streetName"
                      onChange={handleChange}
                      value={streetName}
                    />
                  </FieldWrap>
                  <ErrorMessage name="streetName" component="div" />
                </div>

                <div>
                  <FieldWrap alignItems="flex-start" direction="column">
                    <Label htmlFor="addressType">Address type</Label>
                    <Flex justifyContent="flex-start" margin="6px 0">
                      {radioFields.map((item, i) => (
                        <RadioField key={generateID(13)}>
                          <Field
                            type="radio"
                            name="addressType"
                            value={item}
                            id={"addressType" + i}
                            onChange={handleChange}
                          />
                          <Radio value={item}></Radio>
                        </RadioField>
                      ))}
                    </Flex>
                  </FieldWrap>
                  <ErrorMessage name="addressType" component="div" />
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

export default AddressField;
