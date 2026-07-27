/*
四柱命盘核心结构
*/


const heavenlyStems = [

"甲","乙","丙","丁","戊",
"己","庚","辛","壬","癸"

];


const earthlyBranches = [

"子","丑","寅","卯","辰","巳",
"午","未","申","酉","戌","亥"

];




function createPillar(gan,zhi){


return {


gan:gan,


zhi:zhi,


hidden:
hiddenStems[zhi] || []


};


}




function calculateBazi(input){



let date =
new Date(
input.date+"T"+input.time
);



let year =
calculateYearPillar(date);



let month =
calculateMonthPillar(
date,
year.gan
);



let day =
calculateDayPillar(
date
);



let hour =
calculateHourPillar(
date.getHours(),
day.gan
);



return {


birth:input,


pillars:{


year:createPillar(
year.gan,
year.zhi
),


month:createPillar(
month.gan,
month.zhi
),


day:createPillar(
day.gan,
day.zhi
),


hour:createPillar(
hour.gan,
hour.zhi
)


},



dayMaster:day.gan


};


}




/*
年柱
*/

function calculateYearPillar(date){


let year =
date.getFullYear();


let month =
date.getMonth()+1;


let day =
date.getDate();



if(
month<2 ||
(month===2 && day<4)
){

year--;

}



let gan =
heavenlyStems[(year-4)%10];


let zhi =
earthlyBranches[(year-4)%12];



return {

gan,
zhi

};


}