const radioQuestions = [
{
    question: "性別",
    options: ["男", "女"],
    otherOptionLabel: "其他",
},
{
    question: "民族",
    options: ["漢族", "原住民"],
    otherOptionLabel: "其他",
},
];

const dropdownQuestions = [
{
    question: "城市",
    options: ["台北", "台中", "高雄"],
},
{
    question: "國籍",
    options: ["台灣", "中國", "美國"],
},
];

const sliderQuestions = [
{
    question: "年齡",
    min: 12,
    max: 20,
    minlabel: "小",
    maxlabel: "大",
},
{
    question: "自信",
    min: 1,
    max: 7,
    minlabel: "不自信",
    maxlabel: "非常自信",
},
];

const textQuestions = [
"你叫什麼名字？",
"這是什麼聲音？",
"這是什麼地方？",
];

export { radioQuestions, dropdownQuestions, sliderQuestions, textQuestions };
