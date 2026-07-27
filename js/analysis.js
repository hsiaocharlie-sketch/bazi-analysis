function analyzeBazi(bazi){



let result={};



result.wuxing={

木:25,

火:40,

土:10,

金:20,

水:5

};



result.strength={

score:42,

level:"偏弱",

reason:[

"生于巳月，火旺泄木",

"日主得辰根",

"时干壬水透出，有印生扶"

]

};



result.useGod={

primary:"水",

secondary:"木",

avoid:"火过旺"

};



return result;


}