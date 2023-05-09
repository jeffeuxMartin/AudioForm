import React from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";
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
    ...audioTextQuestions.map((q) => q.valuelabel),
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

  const [finished, setFinished] = React.useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (resp) => {

      // {
      //   "性別val": "男",
      //   "年齡val": "碩三以上 （約 25 歲以上）",
      //   "學院val": "電機資訊學院",
      //   "戶籍val": "臺東縣",
      //   "出身val": "臺東縣",
      //   "如果要參加抽獎，請填寫 email!": "jeffeuxmlta2020@gmail.com",
      //   "02654e": "幹你娘",
      //   "23a45e": "靠邀",
      //   "9107b4": "三小",
      //   "dd4fd5": "幹你老師",
      //   "f48987": "靠北",
      //   "國語熟悉val": 7,
      //   "國語使用val": 7,
      //   "臺語熟悉val": 5,
      //   "臺語使用val": 3,
      //   "性別val-other": ""
      // }

      const data = {
        ["entry.1618220371"]: resp["性別val"],
        ["entry.1618220371_sentinel"]: "",
        ["entry.1867213177"]: resp["年齡val"],
        ["entry.1156939644"]: resp["學院val"],
        ["entry.1573090626"]: resp["戶籍val"],
        ["entry.381733585"]: resp["出身val"],

        ["entry.1646463438"]: resp["國語熟悉val"],
        ["entry.1646463438_sentinel"]: "",
        ["entry.2044282045"]: resp["國語使用val"],
        ["entry.2044282045_sentinel"]: "",
        ["entry.254841469"]: resp["臺語熟悉val"],
        ["entry.254841469_sentinel"]: "",
        ["entry.1530477110"]: resp["臺語使用val"],
        ["entry.1530477110_sentinel"]: "",
        
        ["entry.862675887"]: resp["dd4fd5"],
        ["entry.1283287702"]: resp["02654e"],
        ["entry.1138571059"]: resp["9107b4"],
        ["entry.299438313"]: resp["23a45e"],
        ["entry.1240910167"]: resp["f48987"],
        
        ["entry.763022595"]: resp["如果要參加抽獎，請填寫 email!"],
      };

      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      console.log(formData);
      
      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, value);
      }
      
      
      // Create a new Map object
      const formDataMap = new Map();
      
      // Add the key-value pairs from the FormData object to the Map object
      for (const [key, value] of formData.entries()) {
        formDataMap.set(key, value);
      }
      
      console.log(formDataMap);

      fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfimv0wpcPrj4cGn4YtHEnvLmovU0AguKQyIj1ZYo6aVeH_7Q/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          // body: formData,
          body: params.toString(),
        }
      )
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
      // console.log(
      //   `https://docs.google.com/forms/d/e/1FAIpQLSfimv0wpcPrj4cGn4YtHEnvLmovU0AguKQyIj1ZYo6aVeH_7Q/formResponse?` +
      //     [
      //       `entry.1618220371=${resp["性別val"]}`,
      //       `entry.1867213177=${resp["年齡val"]}`,
      //       `entry.1156939644=${resp["學院val"]}`,

      //       `entry.1573090626=${resp["戶籍val"]}`,
      //       `entry.381733585=${resp["出身val"]}`,

      //       `entry.1646463438=${resp["國語熟悉val"]}`,
      //       `entry.2044282045=${resp["國語使用val"]}`,
      //       `entry.254841469=${resp["臺語熟悉val"]}`,
      //       `entry.1530477110=${resp["臺語使用val"]}`,

      //       `entry.862675887=${resp["dd4fd5"]}`,
      //       `entry.1283287702=${resp["02654e"]}`,
      //       `entry.1138571059=${resp["9107b4"]}`,
      //       `entry.299438313=${resp["23a45e"]}`,
      //       `entry.1240910167=${resp["f48987"]}`,

      //       `entry.763022595=${resp["如果要參加抽獎，請填寫 email!"]}`,
      //     ].join("&")
      // );

      setFinished(true);

      // formik.setValues(initialValues);
    },
    onReset: () => {
      formik.setValues(initialValues);
    },
    validate: (values) => {
      let errors = {};
      // console.log(values);

      if (values["學院val"] === "") {
        errors["學院val"] = "Required";
      }
      if (values["年齡val"] === "") {
        errors["年齡val"] = "Required";
      }
      if (values["性別val"] === "") {
        errors["性別val"] = "Required";
      }
      if (values["性別val"] === "其他" && values["性別val-other"] === "")
        errors["性別val-other"] = "Required";
      if (values["出身val"] === "") {
        errors["出身val"] = "Required";
      }
      if (values["戶籍val"] === "") {
        errors["戶籍val"] = "Required";
      }

      if (values["02654e"] === "") {
        errors["02654e"] = "Required";
      }
      if (values["23a45e"] === "") {
        errors["23a45e"] = "Required";
      }
      if (values["9107b4"] === "") {
        errors["9107b4"] = "Required";
      }
      if (values["dd4fd5"] === "") {
        errors["dd4fd5"] = "Required";
      }
      if (values["f48987"] === "") {
        errors["f48987"] = "Required";
      }
      if (Object.keys(errors).length !== 0) {
        alert("請填寫所有必填欄位");
        // alert(JSON.stringify(errors, null, 2));
      } else {
        // alert(JSON.stringify(errors, null, 2));
      }
      return errors;
    },
    validateOnChange: false,
  });

  // console.log(formik.values);

  if (finished) {
    return <h1>Thanks!</h1>;
  }
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
            name={q.valuelabel}
            value={formik.values[q.valuelabel]}
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
