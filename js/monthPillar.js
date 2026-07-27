const monthBranches = [

"寅",
"卯",
"辰",
"巳",
"午",
"未",
"申",
"酉",
"戌",
"亥",
"子",
"丑"

];



const monthStemTable = {


"甲":"丙",
"己":"丙",


"乙":"戊",
"庚":"戊",


"丙":"庚",
"辛":"庚",


"丁":"壬",
"壬":"壬",


"戊":"甲",
"癸":"甲"


};



const stemIndex = {

"甲":0,
"乙":1,
"丙":2,
"丁":3,
"戊":4,
"己":5,
"庚":6,
"辛":7,
"壬":8,
"癸":9

};



const stems=[

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



function calculateMonthPillar(yearStem,solarMonth){



let branch =
monthBranches[solarMonth-1];



let startStem =
monthStemTable[yearStem];



let startIndex =
stemIndex[startStem];



let index =
(startIndex + solarMonth -1)%10;



return {


gan:
stems[index],


zhi:
branch


};


}