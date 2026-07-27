/*
日柱计算模块

公历日期 -> 六十甲子日

校准基准：
1984-01-10 = 癸卯日

*/


const dayStems = [
    "甲","乙","丙","丁","戊",
    "己","庚","辛","壬","癸"
];


const dayBranches = [
    "子","丑","寅","卯","辰","巳",
    "午","未","申","酉","戌","亥"
];



function calculateJulianDay(year, month, day){


    if(month <= 2){

        year -= 1;
        month += 12;

    }


    let A = Math.floor(year / 100);

    let B = 2 - A + Math.floor(A / 4);



    return (
        Math.floor(365.25 * (year + 4716))
        +
        Math.floor(30.6001 * (month + 1))
        +
        day
        +
        B
        -
        1524.5
    );


}




function calculateDayPillar(year, month, day){


    let jd =
    calculateJulianDay(
        year,
        month,
        day
    );



    /*
    校准点：

    1984-01-10
    JD = 2445709.5

    六十甲子：
    癸卯

    序号：
    39

    */


    let baseJD = 2445709.5;

    let baseIndex = 39;



    let index =
    (
        Math.floor(jd - baseJD)
        +
        baseIndex
    )
    % 60;



    if(index < 0){

        index += 60;

    }



    return {


        gan:
        dayStems[index % 10],


        zhi:
        dayBranches[index % 12]


    };


}