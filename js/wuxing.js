/*
基础干支数据 + 五行转换
*/


const heavenlyStems = [

"甲",
"乙",
"丙",
"丁",
"戊",
"己",
"庚",
"辛",
"壬",
"癸"

];



const earthlyBranches = [

"子",
"丑",
"寅",
"卯",
"辰",
"巳",
"午",
"未",
"申",
"酉",
"戌",
"亥"

];






const wuxingMap={


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





function getWuxing(gan){



if(!gan){

return "";

}



return wuxingMap[gan] || "";

}