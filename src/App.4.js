import React from "react";
import { 
  // Box, 
  Container, 
  Button } from "@mui/material";
import { Formik, Form } from "formik";
// import SingleChoice from "./containers/SingleChoice";
import DropDowns from "./containers/DropDowns";

import {
  // radioQuestions,
  dropdownQuestions,
  // sliderQuestions,
  // textQuestions,
} from "./containers/Questions";
import SingleChoice from "./containers/SingleChoice";



export default function App() {
  handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue === "__other__" ? otherValue : selectedValue);
  };
  
  return (
    <Container maxWidth="sm">
      <h1>問題</h1>
      <Formik
        initialValues={{
          selectedOption: ["", "", ""],
          choices: ["", "", ""],
          otherGender: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <SingleChoice
              question="性別"
              options={["男", "女"]}
              value={values.choices[0]}
              onChange={(value) => setFieldValue("choices[0]", value)}
              hasOtherOption={true}
            />
          </Form>
        )
        }
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <DropDowns
              dropdownQuestions={dropdownQuestions.map((i) => i.question)}
              dropdownOptions={dropdownQuestions.map((i) => i.options)}
              values={values}
              handleChange={handleChange}
            />

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
