/*
八字组合模块
*/


function calculateBazi(input){


    let date =
    new Date(
        input.year,
        input.month - 1,
        input.day
    );



    let year =
    calculateYearPillar(
        date
    );



    let month =
    calculateMonthPillar(
        date
    );



    let day =
    calculateDayPillar(
        input.year,
        input.month,
        input.day
    );



    let hour =
    calculateHourPillar(
        day.gan,
        input.hour
    );




    let pillars={


        year:year,


        month:month,


        day:day,


        hour:hour


    };





    Object.values(pillars)
    .forEach(
        pillar=>{


            if(!pillar.hidden){

                pillar.hidden=[];

            }


            pillar.hidden =
            getHiddenStems(
                pillar.zhi
            );


        }
    );





    return {


        pillars:pillars,


        dayMaster:
        day.gan


    };


}