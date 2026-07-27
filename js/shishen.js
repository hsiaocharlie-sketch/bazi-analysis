/*
十神计算模块

以日干为基准
*/


const stemYinYang = {

"甲":"阳",
"乙":"阴",
"丙":"阳",
"丁":"阴",
"戊":"阳",
"己":"阴",
"庚":"阳",
"辛":"阴",
"壬":"阳",
"癸":"阴"

};



const stemElement = {

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



const tenGodNames = {


sameYang:"比肩",
sameYin:"劫财",


woodFire:"食神",
woodFireDiff:"伤官",


fireEarth:"偏财",
fireEarthDiff:"正财",


earthMetal:"七杀",
earthMetalDiff:"正官",


metalWater:"偏印",
metalWaterDiff:"正印"


};




function getTenGod(dayGan,targetGan){



let dayElement =
stemElement[dayGan];


let targetElement =
stemElement[targetGan];


let same =
stemYinYang[dayGan]
===
stemYinYang[targetGan];



if(dayGan===targetGan){

return "比肩";

}



/*
同五行
*/

if(dayElement===targetElement){

return same ? "比肩":"劫财";

}



/*
生我者 印

*/

const generate={

"木":"水",
"火":"木",
"土":"火",
"金":"土",
"水":"金"

};



if(generate[dayElement]===targetElement){

return same ? "偏印":"正印";

}



/*
我生者 食伤
*/

if(generate[targetElement]===dayElement){

return same ? "食神":"伤官";

}



/*
我克者 财

*/

const control={

"木":"土",
"火":"金",
"土":"水",
"金":"木",
"水":"火"

};



if(control[dayElement]===targetElement){

return same ? "偏财":"正财";

}



/*
克我者 官杀
*/

if(control[targetElement]===dayElement){

return same ? "七杀":"正官";

}



return "";

}