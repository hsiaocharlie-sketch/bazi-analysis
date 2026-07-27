/*
八字组合模块
*/


function calculateBazi(input){



let year =
calculateYearPillar(
input.year,
input.month,
input.day
);



let month =
calculateMonthPillar(
input.year,
input.month,
input.day
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