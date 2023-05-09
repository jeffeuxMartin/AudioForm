import React from "react";
import { Box, Container, Button } from "@mui/material";
import { Formik, Form } from "formik";
import SingleChoice from "./containers/SingleChoice";
import DropDowns from "./containers/DropDowns";

import {
  radioQuestions, dropdownQuestions, sliderQuestions, textQuestions
} from "./containers/Questions";

export default function App() {
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
            <DropDowns
              dropdownQuestions={dropdownQuestions}
              dropdownOptions={dropdownOptions}
              values={values}
              handleChange={handleChange}
            />
            <SingleChoice
              question={choiceQuestion.question}
              options={choiceQuestion.options}
              value={values.selectedOption[0]}
              onChange={(value) => {
                setFieldValue("selectedOption[0]", value);
              }}
              hasOtherOption={true}
              otherOptionLabel="其他"
            >
              {values.selectedOption[0] === "其他" && (
                <Box sx={{ marginBottom: "1rem" }}>
                  <label htmlFor="otherGender">請說明:</label>
                  <input
                    type="text"
                    name="otherGender"
                    value={values.otherGender}
                    onChange={handleChange}
                  />
                </Box>
              )}
            </SingleChoice>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
