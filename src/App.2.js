import React from "react";
import { Formik, Form, Field } from "formik";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
  TextField,
  Button,
  Container,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import ReactPlayer from "react-player";
import DropDowns from "./DropDowns";

function App() {
  const audioSources = [
    "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/02654e.wav",
    "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/23a45e.wav",
    "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/9107b4.wav",
    "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/dd4fd5.wav",
    "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/f48987.wav",
  ];

  const audioQuestions = [
    "請問這是什麼聲音？",
    "請問這是什麼聲音？",
    "請問這是什麼聲音？",
    "請問這是什麼聲音？",
    "請問這是什麼聲音？",
  ];

  const choiceQuestions = [
    {
      question: "性別",
      options: ["男", "女", "其他"],
    },
    // {
      // question: "你喜歡哪種食物？",
      // options: ["中式", "西式", "日式", "韓式"],
    // },
  ];

  const dropdownQuestions = [
    `年齡／系級`,
    "學院",
    "戶籍出生地",
    "出身地／居住地",
  ];
  
  const dropdownOptions = [
    [
      "大一 （約 18 ~ 19 歲）",
      "大二 （約 19 ~ 20 歲）",
      "大三 （約 20 ~ 21 歲）",
      "大四 （約 21 ~ 22 歲）",
      "大五以上  （約 22 歲以上）",
      "碩一 （約 23 ~ 24 歲）",
      "碩二 （約 24 ~ 25 歲）",
      "碩三以上 （約 25 歲以上）",
      "博士生（含逕博） （約 24 歲以上）",
      "非學生（25 ~ 30 歲）",
      "非學生（30 ~ 35 歲）",
      "非學生（35 ~ 40 歲）",
      "非學生（40 ~ 45 歲）",
      "非學生（45 ~ 50 歲）",
      "非學生（50 歲以上）",
    ],
    [
      "文學院",
      "理學院",
      "社會科學院",
      "醫學院",
      "工學院",
      "生物資源暨農學院",
      "管理學院",
      "公共衛生學院",
      "電機資訊學院",
      "法律學院",
      "生命科學院",
      "其他（或非學生）",
    ],
    [
      "臺北市",
      "新北市",
      "基隆市",
      "桃園市",
      "臺中市",
      "臺南市",
      "高雄市",
      "新竹市",
      "新竹縣",
      "苗栗縣",
      "彰化縣",
      "南投縣",
      "雲林縣",
      "嘉義市",
      "嘉義縣",
      "屏東縣",
      "宜蘭縣",
      "花蓮縣",
      "臺東縣",
      "澎湖縣",
      "金門縣",
      "連江縣",
      "香港",
      "澳門",
      "中國大陸",
      "馬來西亞",
      "泰國",
      "印尼",
      "巴拉圭",
      "其他東南亞地區",
      "其他中南美洲地區",
      "其他地區",
    ],
    [
      "臺北市",
      "新北市",
      "基隆市",
      "桃園市",
      "臺中市",
      "臺南市",
      "高雄市",
      "新竹市",
      "新竹縣",
      "苗栗縣",
      "彰化縣",
      "南投縣",
      "雲林縣",
      "嘉義市",
      "嘉義縣",
      "屏東縣",
      "宜蘭縣",
      "花蓮縣",
      "臺東縣",
      "澎湖縣",
      "金門縣",
      "連江縣",
      "香港",
      "澳門",
      "中國大陸",
      "馬來西亞",
      "泰國",
      "印尼",
      "巴拉圭",
      "其他東南亞地區",
      "其他中南美洲地區",
      "其他地區",
    ],
  ];

  return (
    <Container maxWidth="sm">
      <h1>問題</h1>
      <Formik
        initialValues={{
          choices: [""],
          answers: ["", "", "", "", ""],
          selectedOption: ["", "", "", ""],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
           {choiceQuestions.map((q, index) => (
            <Box key={index} sx={{ marginBottom: "1rem" }}>
              <h3>{q.question}</h3>
              <RadioGroup
                aria-label={q.question}
                name={`choices[${index}]`}
                value={values.choices[index]}
                onChange={handleChange}
              >
                {q.options.map((option, i) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
              {values.choices[index] === '其他' && (
                <TextField
                  label="其他"
                  name={`other[${index}]`}
                  value={values.other[index]}
                  onChange={handleChange}
                />
              )}
            </Box>
          ))}
            <DropDowns
              dropdownOptions={dropdownOptions}
              dropdownQuestions={dropdownQuestions}
              values={values}
              handleChange={handleChange}
            />
            
            {audioSources.map((source, index) => (
              <Box key={source} sx={{ marginBottom: "1rem" }}>
                <Box sx={{ position: "relative", paddingBottom: "75px" }}>
                  <ReactPlayer
                    url={source}
                    height="75px"
                    width="50%"
                    controls
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </Box>
                <Field name={`answers[${index}]`}>
                  {({ field }) => (
                    <TextField
                      {...field}
                      label={audioQuestions[index]}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                  )}
                </Field>
              </Box>
            ))}
            <Button variant="contained" color="primary" type="submit">
              送出
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default App;
