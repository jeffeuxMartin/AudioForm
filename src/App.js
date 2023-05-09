import React from "react";
import { useFormik } from "formik";
import {
  Button,

} from "@mui/material";
import DropDowns from "./containers/DropDowns";
import {
  textQuestions,
  audioTextQuestions,
  dropdownQuestions,
  radioQuestions,
  sliderQuestions,
} from "./containers/Questions";
import SingleChoice from "./containers/SingleChoice";
import AudioText from "./containers/AudioText";
import NormalText from "./containers/NormalText";
import SliderInput from "./containers/SliderInput";

const App = () => {
  const valueLabels = [
    ...radioQuestions.map((q) => q.valuelabel),
    ...dropdownQuestions.map((q) => q.valuelabel),
    ...textQuestions,
    ...audioTextQuestions,
    ...sliderQuestions.map((q) => q.valuelabel),
    ...radioQuestions
      .filter((i) => i.otherOptionLabel)
      .map((i) => `${i.valuelabel}-other`),
  ];

  let initialValues = valueLabels.reduce((acc, key) => {
    acc[key] = "";
    return acc;
  }, {});

  sliderQuestions.forEach((q) => {
    initialValues[q.valuelabel] = q.defaultval;
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 10));
      console.log(JSON.stringify(values, null, 2));
    },
    onReset: () => {
      formik.setValues(initialValues);
    },
    validate: (values) => {
      let errors = {};
      // console.log(values);

      if (!values["學院val"]) { errors["學院val"] = "Required"; }
      if (!values["年齡val"]) { errors["年齡val"] = "Required"; }
      if (!values["性別val"]) { errors["性別val"] = "Required"; }
      if (values['性別val'] === '其他' && !values['性別val-other']) 
        errors['性別val-other'] = 'Required';
      if (!values["出身val"]) { errors["出身val"] = "Required"; }
      if (!values["戶籍val"]) { errors["戶籍val"] = "Required"; }
      
      if (errors) {
        alert("請填寫所有必填欄位");
      }
      return errors;
    },
  });

  return (
    <div>
      <h1>髒話問卷</h1>
      <form onSubmit={formik.handleSubmit}>
        {radioQuestions.map((q, index) => (
          <SingleChoice
            key={q.question}
            question={q.question}
            options={q.options}
            labelId={`${q.valuelabel}-label`}
            name={q.valuelabel}
            value={formik.values[q.valuelabel]}
            otherValue={formik.values[`${q.valuelabel}-other`]}
            otherName={`${q.valuelabel}-other`}
            hasOtherOption={q.otherOptionLabel}
            handleChange={formik.handleChange}
          />
        ))}

        {dropdownQuestions.map((q, index) => (
          <DropDowns
            key={q.question}
            question={q.question}
            labelId={`${q.valuelabel}-label`}
            selectId={q.valuelabel}
            name={q.valuelabel}
            value={formik.values[q.valuelabel]}
            handleChange={formik.handleChange}
            options={q.options}
          />
        ))}

        {sliderQuestions.map((q, index) => (
          <SliderInput
            key={q.question}
            name={q.valuelabel}
            label={q.question}
            id={q.valuelabel}
            min={q.min}
            max={q.max}
            value={formik.values[q.valuelabel]}
            handleChange={formik.handleChange}
          />
        ))}

        {audioTextQuestions.map((q, index) => (
          <AudioText
            q={q.question}
            key={`${q.question}`}
            source={q.src}
            value={formik.values[q.question]}
            handleChange={formik.handleChange}
          />
        ))}

        {textQuestions.map((q, index) => (
          <NormalText
            q={q}
            key={`${q}`}
            value={formik.values[q]}
            handleChange={formik.handleChange}
          />
        ))}
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default App;
