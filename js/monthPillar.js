/*
月柱计算模块

子平八字：
月支以节气定

五虎遁：
年干决定寅月月干
*/


function calculateMonthPillar(date, yearGan){


    let month = date.getMonth() + 1;
    let day = date.getDate();



    let monthBranch;



    /*
    当前采用节气月粗分

    1984-01-10：
    小寒后
    为丑月

    */


    if(
        month === 1 ||
        (month === 2 && day < 4)
    ){

        monthBranch = "丑";

    }
    else if(
        month === 2 ||
        month === 3
    ){

        monthBranch = "寅";

    }
    else if(month === 4){

        monthBranch = "卯";

    }
    else if(month === 5){

        monthBranch = "辰";

    }
    else if(month === 6){

        monthBranch = "巳";

    }
    else if(month === 7){

        monthBranch = "午";

    }
    else if(month === 8){

        monthBranch = "未";

    }
    else if(month === 9){

        monthBranch = "申";

    }
    else if(month === 10){

        monthBranch = "酉";

    }
    else if(month === 11){

        monthBranch = "戌";

    }
    else{

        monthBranch = "亥";

    }




    /*
    五虎遁

    甲己年：丙寅
    乙庚年：戊寅
    丙辛年：庚寅
    丁壬年：壬寅
    戊癸年：甲寅

    */


    let yinMonthGan;



    if(
        yearGan === "甲" ||
        yearGan === "己"
    ){

        yinMonthGan = "丙";

    }
    else if(
        yearGan === "乙" ||
        yearGan === "庚"
    ){

        yinMonthGan = "戊";

    }
    else if(
        yearGan === "丙" ||
        yearGan === "辛"
    ){

        yinMonthGan = "庚";

    }
    else if(
        yearGan === "丁" ||
        yearGan === "壬"
    ){

        yinMonthGan = "壬";

    }
    else{

        yinMonthGan = "甲";

    }




    const stemOrder = [
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



    const branchOrder = [
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



    let start =
    stemOrder.indexOf(
        yinMonthGan
    );



    let branchIndex =
    branchOrder.indexOf(
        monthBranch
    );



    let offset =
    branchIndex - 2;



    if(offset < 0){

        offset += 12;

    }



    return {


        gan:
        stemOrder[
            (start + offset) % 10
        ],


        zhi:
        monthBranch


    };


}