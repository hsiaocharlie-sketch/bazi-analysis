/*
日柱计算模块

六十甲子计算

基准：
2000年1月1日
庚辰日

*/


function calculateDayPillar(year,month,day){



    let baseDate =
    new Date(
        "2000-01-01T00:00:00"
    );



    let targetDate =
    new Date(
        year+"-"+month+"-"+day+"T00:00:00"
    );



    let diff =
    Math.floor(
        (
            targetDate - baseDate
        )
        /
        86400000
    );



    /*
    2000-01-01 = 庚辰

    庚辰在六十甲子中：
    index 16

    */


    let index =
    (16 + diff) % 60;



    if(index<0){

        index += 60;

    }



    return {


        gan:
        heavenlyStems[
            index % 10
        ],


        zhi:
        earthlyBranches[
            index % 12
        ]


    };


}