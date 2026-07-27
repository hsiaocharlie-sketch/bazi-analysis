const heavenlyStems = [
"甲","乙","丙","丁","戊",
"己","庚","辛","壬","癸"
];


const earthlyBranches = [
"子","丑","寅","卯","辰","巳",
"午","未","申","酉","戌","亥"
];



function calculateYear(year,month,day){


/*
暂用立春前后判断框架
后续加入太阳黄经计算
*/


let y=year;


if(month<2 || (month===2 && day<4)){

y=y-1;

}



let index=(y-4)%10;

if(index<0) index+=10;


let branchIndex=(y-4)%12;

if(branchIndex<0)
branchIndex+=12;



return {


gan:
heavenlyStems[index],


zhi:
earthlyBranches[branchIndex]


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




return {


birth:input,


pillars:{


year:
calculateYear(
year,
month,
day
),



month:{

gan:"待计算",

zhi:"待计算"

},



day:{

gan:"待计算",

zhi:"待计算"

},



hour:
calculateHour(hour)


},



dayMaster:"待计算"


};


}