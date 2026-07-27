const stems=[
"甲","乙","丙","丁","戊",
"己","庚","辛","壬","癸"
];


const branches=[
"子","丑","寅","卯","辰","巳",
"午","未","申","酉","戌","亥"
];





function calculateBazi(input){



let date=new Date(
input.year,
input.month-1,
input.day
);



return {


pillars:{


year:
calculateYear(input.year),


month:
calculateMonth(
input.year,
input.month
),


day:
calculateDay(
input.year,
input.month,
input.day
),


hour:
calculateHour(
input.hour,
calculateDay(
input.year,
input.month,
input.day
).gan
)


}



};



}








function calculateYear(year){



let index=
(year-4)%10;



let zhiIndex=
(year-4)%12;



return {


gan:stems[index],

zhi:branches[zhiIndex]

};


}






function calculateMonth(year,month){



/*
月柱暂用节气前版本
后续加入真实节气
*/


let monthBranch=
[
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
][month-1];



let branchIndex=
branches.indexOf(monthBranch);



let yearGan=
calculateYear(year).gan;



let start=
{

甲:"丙",
乙:"丙",

丙:"戊",
丁:"戊",

戊:"庚",
己:"庚",

庚:"壬",
辛:"壬",

壬:"甲",
癸:"甲"

}[yearGan];



let stemIndex=
stems.indexOf(start)+month-1;



return {


gan:
stems[stemIndex%10],


zhi:
monthBranch


};


}








function calculateDay(y,m,d){



let base=
Date.UTC(
2000,
0,
1
);



let current=
Date.UTC(
y,
m-1,
d
);



let diff=
Math.floor(
(current-base)
/86400000
);



let index=
(16+diff)%60;



if(index<0)
index+=60;



return {


gan:
stems[index%10],


zhi:
branches[index%12]


};


}








function calculateHour(hour,dayGan){



let zhiIndex=
Math.floor(
(hour+1)/2
)%12;



let startIndex=
{

甲:0,
己:0,

乙:2,
庚:2,

丙:4,
辛:4,

丁:6,
壬:6,

戊:8,
癸:8

}[dayGan];



return {


gan:
stems[
(startIndex+zhiIndex)%10
],


zhi:
branches[zhiIndex]


};


}