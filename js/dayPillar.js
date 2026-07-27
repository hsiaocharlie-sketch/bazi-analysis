/*
日柱计算模块

使用儒略日(Julian Day)算法
计算公历日期对应干支日

*/

const dayStems = [
"甲","乙","丙","丁","戊",
"己","庚","辛","壬","癸"
];


const dayBranches = [
"子","丑","寅","卯","辰","巳",
"午","未","申","酉","戌","亥"
];



function calculateJulianDay(year,month,day){


if(month<=2){

year-=1;

month+=12;

}


let A =
Math.floor(year/100);


let B =
2-A+Math.floor(A/4);



let JD =
Math.floor(
365.25*(year+4716)
)
+
Math.floor(
30.6001*(month+1)
)
+
day
+
B
-
1524.5;



return JD;


}




function calculateDayPillar(year,month,day){


let jd =
calculateJulianDay(
year,
month,
day
);



/*
1984-01-10作为校准基准

该日为甲子日

*/

let offset =
Math.floor(jd-2445705.5);



let index =
offset%60;


if(index<0)
index+=60;



return {


gan:
dayStems[index%10],


zhi:
dayBranches[index%12]


};


}