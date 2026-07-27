/*
日柱计算模块

子平八字日柱

独立版本：
不依赖外部天干地支数组

*/


function calculateDayPillar(year,month,day){


    const stems = [
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



    const branches = [
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



    /*
    校准基准：

    2000年1月1日
    庚辰日

    庚 = 6
    辰 = 4

    六十甲子序号 = 16

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



    let days =
    Math.floor(
        (current-base)
        /
        86400000
    );



    let index =
    (16 + days) % 60;



    if(index<0){

        index += 60;

    }



    return {


        gan:
        stems[index % 10],



        zhi:
        branches[index % 12]


    };


}