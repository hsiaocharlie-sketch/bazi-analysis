const heavenlyStems = [
"甲","乙","丙","丁","戊",
"己","庚","辛","壬","癸"
];


const earthlyBranches = [
"子","丑","寅","卯","辰","巳",
"午","未","申","酉","戌","亥"
];



function calculateYear(year,month,day){



if(
month<2 ||
(month===2 && day<4)
){

year--;

}



let ganIndex=(year-4)%10;

let zhiIndex=(year-4)%12;



if(ganIndex<0)
ganIndex+=10;


if(zhiIndex<0)
zhiIndex+=12;



return {


gan:
heavenlyStems[ganIndex],


zhi:
earthlyBranches[zhiIndex]


};


}






function calculateHour(hour){



let branch;



if(hour>=23 || hour<1)

branch="子";

else if(hour<3)

branch="丑";

else if(hour<5)

branch="寅";

else if(hour<7)

branch="卯";

else if(hour<9)

branch="辰";

else if(hour<11)

branch="巳";

else if(hour<13)

branch="午";

else if(hour<15)

branch="未";

else if(hour<17)

branch="申";

else if(hour<19)

branch="酉";

else if(hour<21)

branch="戌";

else

branch="亥";



return {


zhi:branch


};


}






function calculateBazi(input){



let date =
new Date(
input.date+"T"+input.time
);



let year =
date.getFullYear();


let month =
date.getMonth()+1;


let day =
date.getDate();


let hour =
date.getHours();




let yearPillar =
calculateYear(
year,
month,
day
);



let solarMonth =
getSolarMonth(date);



let monthPillar =
calculateMonthPillar(
yearPillar.gan,
solarMonth
);



let hourPillar =
calculateHour(hour);




return {


birth:input,


pillars:{


year:
yearPillar,


month:
monthPillar,


day:{

gan:"待计算",

zhi:"待计算"

},


hour:
hourPillar


},



dayMaster:
"待计算"


};


}