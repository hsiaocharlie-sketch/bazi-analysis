/*
日柱计算
*/


function calculateDayPillar(year,month,day){


const stems=[
"甲","乙","丙","丁","戊",
"己","庚","辛","壬","癸"
];


const branches=[
"子","丑","寅","卯","辰","巳",
"午","未","申","酉","戌","亥"
];



/*
基准：
2000-01-01 庚辰日
*/


let base =
Date.UTC(
2000,
0,
1
);



let current =
Date.UTC(
year,
month-1,
day
);



let diff =
Math.floor(
(current-base)/86400000
);



let index =
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