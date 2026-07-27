/*
节气计算模块

当前版本：
建立节气接口结构

后续：
加入太阳黄经算法，实现精确节气时间
*/


const solarTerms = [

    {
        name:"小寒",
        month:1,
        day:5
    },

    {
        name:"立春",
        month:2,
        day:4
    },

    {
        name:"惊蛰",
        month:3,
        day:6
    },

    {
        name:"清明",
        month:4,
        day:5
    },

    {
        name:"立夏",
        month:5,
        day:6
    },

    {
        name:"芒种",
        month:6,
        day:6
    },

    {
        name:"小暑",
        month:7,
        day:7
    },

    {
        name:"立秋",
        month:8,
        day:7
    },

    {
        name:"白露",
        month:9,
        day:8
    },

    {
        name:"寒露",
        month:10,
        day:8
    },

    {
        name:"立冬",
        month:11,
        day:7
    },

    {
        name:"大雪",
        month:12,
        day:7
    }

];



function getSolarMonth(date){


let month =
date.getMonth()+1;


let day =
date.getDate();



/*
根据节气确定月令

寅月从立春开始
*/


let solarMonth;



if(
month>2 ||
(month===2 && day>=4)
){

solarMonth=1;

}

else{

solarMonth=12;

}



if(
(month>3) ||
(month===3 && day>=6)
){

solarMonth=2;

}


if(
(month>4) ||
(month===4 && day>=5)
){

solarMonth=3;

}


if(
(month>5) ||
(month===5 && day>=6)
){

solarMonth=4;

}


if(
(month>6) ||
(month===6 && day>=6)
){

solarMonth=5;

}


if(
(month>7) ||
(month===7 && day>=7)
){

solarMonth=6;

}


if(
(month>8) ||
(month===8 && day>=7)
){

solarMonth=7;

}


if(
(month>9) ||
(month===9 && day>=8)
){

solarMonth=8;

}


if(
(month>10) ||
(month===10 && day>=8)
){

solarMonth=9;

}


if(
(month>11) ||
(month===11 && day>=7)
){

solarMonth=10;

}


if(
(month===12 && day>=7)
){

solarMonth=11;

}



return solarMonth;


}