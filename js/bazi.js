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

gan:heavenlyStems[ganIndex],

zhi:earthlyBranches[zhiIndex]

};

}





function calculateHour(hour, dayGan){


let branchIndex;


if(hour>=23 || hour<1)

branchIndex=0;

else if(hour<3)

branchIndex=1;

else if(hour<5)

branchIndex=2;

else if(hour<7)

branchIndex=3;

else if(hour<9)

branchIndex=4;

else if(hour<11)

branchIndex=5;

else if(hour<13)

branchIndex=6;

else if(hour<15)

branchIndex=7;

else if(hour<17)

branchIndex=8;

else if(hour<19)

branchIndex=9;

else if(hour<21)

branchIndex=10;

else

branchIndex=11;



const startStem={

"甲":0,
"己":0,

"乙":2,
"庚":2,

"丙":4,
"辛":4,

"丁":6,
"壬":6,

"戊":8,
"癸":8

};



let start =
startStem[dayGan];



if(start===undefined){

return {

gan:"待计算",

zhi:earthlyBranches[branchIndex]

};

}



return {


gan:
heavenlyStems[
(start+branchIndex)%10
],


zhi:
earthlyBranches[branchIndex]


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




let dayPillar =
calculateDayPillar(
year,
month,
day
);




let hourPillar =
calculateHour(
hour,
dayPillar.gan
);




return {


birth:input,


pillars:{


year:
yearPillar,


month:
monthPillar,


day:
dayPillar,


hour:
hourPillar


},



dayMaster:
dayPillar.gan


};


}