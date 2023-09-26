let savollar = [
    {
      question: "1)4*4=?",
      answers: [
        "a:  8",
        "b:  10",
        "c:  16",
        "d:  64"
],
      correctAnswer: "c"
    },
    {
      question: "2)o'simliklarni o'rganuchi fan qaysi?",
      answers: [
        "a: biologiya",
        "b: kimyo",
        "c: anotomiya",
        "d: botanika"
],
      correctAnswer: "d"
    },
    {
      question: "3)nechta sayyora bor?",
      answers: [
        "a: 7",
        "b: 6",
        "c: 8",
        "d: 9"
      ],
      correctAnswer: "c"
    },
    {
        question:"4)1 yilda nechta kun bor?",
        answers:[
            "a: 244ta",
            "b: 360ta",
            "c: 375ta",
            "d: 365ta"
    ],
        correctAnswer: "d"
    },
    {
        question:"5) 21-mart qanaqa bayram? ",
        answers:[
            "a: ayollar bayrami ",
            "b: navro'z bzyrami ",
            "c: xotira kuni ",
            "d: vatan himoyachilari kuni"
        ],
        correctAnswer: "b"
    },
    {
        question:"6)mustaqillik kuni qachon",
        answers:[
            "a: 1-sentabr",
            "b: 8-mart",
            "c: 14-yanvar",
            "d: 31-dekabr"
        ],
        correctAnswer:"a"
    }
  ];
let jami=0;

for (let i = 0; i < savollar.length; i++) {
   let nom = prompt(savollar[i].question+"\n"+savollar[i].answers.join("\n")) 
   if(nom==savollar[i].correctAnswer){
jami++;
}
if(nom=="stop"||nom=="chiqish"||nom=="exit"){
  i=savollar.length;
}

}
alert("tugadi"+ jami+"/"+savollar.length);