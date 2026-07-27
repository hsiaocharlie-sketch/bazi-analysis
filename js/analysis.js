const elementMap = {

"甲":"木",
"乙":"木",

"丙":"火",
"丁":"火",

"戊":"土",
"己":"土",

"庚":"金",
"辛":"金",

"壬":"水",
"癸":"水"

};



function analyzeBazi(bazi){


let dayMaster =
bazi.dayMaster;


let element =
elementMap[dayMaster];



let reasons=[];



if(element==="水"){


reasons=[

"日主为癸水",

"生于丑月，水有余气，但寒湿之气较重",

"地支亥卯组合，水木关系明显",

"月干乙木、时干乙木泄水生木"

];


}



else{


reasons=[

"日主五行："+element,

"当前分析规则尚未展开"

];


}





return {


dayMaster:{

stem:dayMaster,

element:element

},



wuxing:{


wood:30,

fire:10,

earth:25,

metal:15,

water:40


},



strength:{


level:"待综合判断",


score:50,


reasons:reasons


},



useGod:{


primary:"待分析",

secondary:"待分析",

avoid:"待分析"


}



};


}