const radioQuestions = [
  {
    question: "性別",
    options: ["男", "女"],
    otherOptionLabel: "其他",
    valuelabel: `性別val`,
  },
];
const HUJIDIs = [
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
];
const dropdownQuestions = [
  {
    question: `年齡／系級`,
    valuelabel: `年齡val`,
    options: [
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
  },
  {
    question: "學院",
    valuelabel: "學院val",
    options: [
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
  },
  {
    question: "戶籍出生地",
    valuelabel: "戶籍val",
    options: HUJIDIs,
  },
  {
    question: "出身地／居住地",
    valuelabel: "出身val",
    options: HUJIDIs,
  },
];

const sliderQuestions = [
  {
    question: "對中文（國語、普通話）的熟悉程度",
    valuelabel: "國語熟悉val",
    min: 1,
    max: 7,
    minlabel: "生疏",
    maxlabel: "熟練",
    defaultval: 4,
  },
  {
    question: "平時中文（國語、普通話）的使用頻率",
    valuelabel: "國語使用val",
    min: 1,
    max: 7,
    minlabel: "少用",
    maxlabel: "常用",
    defaultval: 4,
  },
  {
    question: "對臺語（閩南語、福建話）的熟悉程度",
    valuelabel: "臺語熟悉val",
    min: 1,
    max: 7,
    minlabel: "生疏",
    maxlabel: "熟練",
    defaultval: 4,
  },
  {
    question: "平時臺語（閩南語、福建話）的使用頻率",
    valuelabel: "臺語使用val",
    min: 1,
    max: 7,
    minlabel: "少用",
    maxlabel: "常用",
    defaultval: 4,
  },
];

const textQuestions = ["如果要參加抽獎，請填寫 email!"];
const audioTextQuestions = [
  {
    question: "請問您會怎麼寫？ (02654e)",
    src: "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/02654e.wav",
  },
  {
    question: "請問您會怎麼寫？ (23a45e)",
    src: "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/23a45e.wav",
  },
  {
    question: "請問您會怎麼寫？ (9107b4)",
    src: "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/9107b4.wav",
  },
  {
    question: "請問您會怎麼寫？ (dd4fd5)",
    src: "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/dd4fd5.wav",
  },
  {
    question: "請問您會怎麼寫？ (f48987)",
    src: "https://homepage.ntu.edu.tw/~r09942097/wavs_taibads/f48987.wav",
  },
];

export {
  radioQuestions,
  dropdownQuestions,
  sliderQuestions,
  textQuestions,
  audioTextQuestions,
};
