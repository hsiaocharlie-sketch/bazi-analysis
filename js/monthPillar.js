/*
月柱计算模块

采用子平八字：
以节气定月

当前测试：
1984-01-10
年柱：癸亥
月柱：乙丑
*/


function calculateMonthPillar(date, yearGan){


    let month = date.getMonth() + 1;
    let day = date.getDate();



    /*
    以节气粗略判断月令

    1984年1月10日：
    小寒后
    属丑月

    */


    let monthBranch;



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

    else if(
        month === 4
    ){

        monthBranch = "卯";

    }

    else if(
        month === 5
    ){

        monthBranch = "辰";

    }

    else if(
        month === 6
    ){

        monthBranch = "巳";

    }

    else if(
        month === 7
    ){

        monthBranch = "午";

    }

    else if(
        month === 8
    ){

        monthBranch = "未";

    }

    else if(
        month === 9
    ){

        monthBranch = "申";

    }

    else if(
        month === 10
    ){

        monthBranch = "酉";

    }

    else if(
        month === 11
    ){

        monthBranch = "戌";

    }

    else{

        monthBranch = "亥";

    }



    /*
    五虎遁

    甲己年 丙寅月
    乙庚年 戊寅月
    丙辛年 庚寅月
    丁壬年 壬寅月
    戊癸年 甲寅月

    */


    let startGan;



    if(
        yearGan === "甲" ||
        yearGan === "己"
    ){

        startGan = 2;

    }

    else if(
        yearGan === "乙" ||
        yearGan === "庚"
    ){

        startGan = 4;

    }

    else if(
        yearGan === "丙" ||
        yearGan === "辛"
    ){

        startGan = 6;

    }

    else if(
        yearGan === "丁" ||
        yearGan === "壬"
    ){

        startGan = 8;

    }

    else{

        startGan = 0;

    }



    let branchIndex =
    earthlyBranches.indexOf(
        monthBranch
    );



    let offset =
    branchIndex - 2;



    if(offset < 0){

        offset += 12;

    }



    return {


        gan:
        heavenlyStems[
            (startGan + offset) % 10
        ],


        zhi:
        monthBranch


    };


}