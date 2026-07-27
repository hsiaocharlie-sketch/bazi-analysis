/*
子平八字用神分析基础版
*/


function analyzeUseGod(bazi,strength){


let result={


type:"",


useGod:[],


happyGod:[],


avoidGod:[],


description:""



};



let score =
strength.score;



/*
身旺：
喜泄耗克

食伤、财、官杀为优先

身弱：
喜生扶

印、比劫为优先

*/


if(score>=60){


result.type="身旺";


result.useGod=[
"官杀",
"财星",
"食伤"
];


result.happyGod=[
"金",
"土",
"水"
];


result.avoidGod=[
"木",
"火"
];


result.description=
"日主力量偏旺，宜取泄耗制化，使五行达到平衡。";


}



else{


result.type="身弱";


result.useGod=[
"印星",
"比劫"
];


result.happyGod=[
"金",
"水"
];


result.avoidGod=[
"木",
"火"
];


result.description=
"日主力量不足，宜取生扶，使日主能够承载财官。";


}



return result;


}