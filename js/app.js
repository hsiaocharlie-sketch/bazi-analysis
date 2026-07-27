/*
子平八字系统入口程序
*/


function analyze(){


    const birthDate =
    document.getElementById("birthDate").value;


    const birthTime =
    document.getElementById("birthTime").value;


    const location =
    document.getElementById("location").value;


    const gender =
    document.getElementById("gender").value;



    if(!birthDate || !birthTime){

        alert("请输入完整出生日期和时间");

        return;

    }



    const input = {


        date: birthDate,


        time: birthTime,


        location: location,


        gender: gender


    };




    try{


        const bazi =
        calculateBazi(input);



        const result =
        analyzeBazi(bazi);



        document
        .getElementById("report")
        .innerHTML =
        createReport(
            bazi,
            result
        );



        console.log(
            "八字数据：",
            bazi
        );



        console.log(
            "分析结果：",
            result
        );


    }

    catch(error){


        console.error(error);


        alert(
            "程序错误：\n"+
            error.message
        );


    }



}