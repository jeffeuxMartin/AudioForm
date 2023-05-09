import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { TextField, Button, Container, Box, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import ReactPlayer from 'react-player';

function App() {
  const audioSources = [
    'https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/02654e.wav',
    'https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/23a45e.wav',
    'https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/9107b4.wav',
    'https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/dd4fd5.wav',
    'https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/f48987.wav',
  ];

  const audioQuestions = [
    '請問這是什麼聲音？',
    '請問這是什麼聲音？',
    '請問這是什麼聲音？',
    '請問這是什麼聲音？',
    '請問這是什麼聲音？'
  ];

  const choiceQuestions = [
    {
      question: '你喜歡哪種顏色？',
      options: ['紅色', '藍色', '綠色', '黃色']
    },
    {
      question: '你喜歡哪種食物？',
      options: ['中式', '西式', '日式', '韓式']
    }
  ];

  const dropdownQuestions = [
    '你喜歡哪種水果？',
    '你喜歡哪種運動？',
    '你喜歡哪種動物？'
  ];

  const dropdownOptions = [
    ['蘋果', '香蕉', '橘子', '芒果'],
    ['籃球', '棒球', '足球', '羽球'],
    ['貓', '狗', '兔子', '鳥']
  ];

  return (
    <Container maxWidth="sm">
      <h1>問題</h1>
      <Formik
        initialValues={{
          choices: ['', ''],
          answers: ['', '', '', '', ''],
          selectedOption: ['', '', '']
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            {choiceQuestions.map((q, index) => (
              <Box key={index} sx={{ marginBottom: '1rem' }}>
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
              </Box>))}
            {dropdownQuestions.map((q, index) => (
              <Box key={index} sx={{ marginBottom: '1rem' }}>
                <h3>{q}</h3>
                <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                  <InputLabel id={`dropdown-question-${index}-label`}>{q}</InputLabel>
                  <Select
                    labelId={`dropdown-question-${index}-label`}
                    id={`dropdown-question-${index}`}
                    name={`selectedOption[${index}]`}
                    value={values.selectedOption[index]}
                    onChange={handleChange}
                  >
                    {dropdownOptions[index].map((option, i) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            ))}
            {audioSources.map((source, index) => (
              <Box key={source} sx={{ marginBottom: '1rem' }}>
                <Box sx={{ position: 'relative', paddingBottom: '75px' }}>
                  <ReactPlayer
                    url={source}
                    height="75px"
width="50%"
controls
                    style={{ position: 'absolute', top: 0, left: 0 }}
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