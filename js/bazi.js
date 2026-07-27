/*
八字核心控制
*/


const heavenlyStems = [
"甲","乙","丙","丁","戊",
"己","庚","辛","壬","癸"
];


const earthlyBranches = [
"子","丑","寅","卯","辰","巳",
"午","未","申","酉","戌","亥"
];



function calculateBazi(input){


let date =
new Date(
input.date+"T"+input.time+":00"
);



let year =
calculateYearPillar(
date
);


let month =
calculateMonthPillar(
date,
year.gan
);


let day =
calculateDayPillar(
date.getFullYear(),
date.getMonth()+1,
date.getDate()
);


let hour =
calculateHourPillar(
date.getHours(),
day.gan
);



return {


birth:input,


pillars:{


year:year,

month:month,

day:day,

hour:hour


},


dayMaster:day.gan


};


}