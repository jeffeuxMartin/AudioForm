import React from "react";
import { Box, Container, Button } from "@mui/material";
import { Formik, Form } from "formik";
import SingleChoice from "./containers/SingleChoice";

const radioQuestions = [
  {
    question: "性別",
    options: ["男", "女"],
    hasOtherOption: true,
  },
];

function App() {
  const [selectedGender, setSelectedGender] = React.useState("");
  const [otherValue, setOtherValue] = React.useState("");
  const [value, setValue] = React.useState("");
  
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (newValue === "__other__") {
      setOtherValue("");
    }
  };
  const handleOtherChange = (event) => {
    setOtherValue(event.target.value);
    setValue("__other__");
  };
  
  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    console.log(selectedGender);
  };

  return (
    <Container maxWidth={"md"}>
      <Formik
        initialValues={{
          gender: "",
          // other: "",
        }}
        onSubmit={e => handleSubmit(e)}
      >
        {
          ({ values, handleChange }) => (
          <Form
            
          >
            <SingleChoice
              question={radioQuestions[0].question}
              options={radioQuestions[0].options}
              value={values.gender}
              otherValue={otherValue}
              onChange={handleChange}
              handleOtherChange={handleOtherChange}
              hasOtherOption={radioQuestions[0].hasOtherOption}
            />

            {values.gender === "__other__" && (
              <Box sx={{ marginBottom: "1rem" }}>
                <label htmlFor="other">其他：</label>
                <input
                  type="text"
                  id="other"
                  name="other"
                  value={values.other}
                  onChange={handleChange}
                />
              </Box>
            )}

            <Button type="submit" variant="contained">
              送出
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default App;
