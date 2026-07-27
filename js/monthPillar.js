/*
月柱计算

当前采用节气月框架
*/


function calculateMonthPillar(date,yearGan){



let month =
date.getMonth()+1;


let branch;



if(month===1){

branch="丑";

}
else if(month===2 || month===3){

branch="寅";

}
else if(month===4){

branch="卯";

}
else if(month===5){

branch="辰";

}
else if(month===6){

branch="巳";

}
else if(month===7){

branch="午";

}
else if(month===8){

branch="未";

}
else if(month===9){

branch="申";

}
else if(month===10){

branch="酉";

}
else if(month===11){

branch="戌";

}
else{

branch="亥";

}



/*
五虎遁

甲己年 丙寅月
乙庚年 戊寅月
丙辛年 庚寅月
丁壬年 壬寅月
戊癸年 甲寅月

*/


let start;



if(
yearGan==="甲" ||
yearGan==="己"
){

start=2;

}

else if(
yearGan==="乙" ||
yearGan==="庚"
){

start=4;

}

else if(
yearGan==="丙" ||
yearGan==="辛"
){

start=6;

}

else if(
yearGan==="丁" ||
yearGan==="壬"
){

start=8;

}

else{

start=0;

}



let branchIndex =
earthlyBranches.indexOf(branch);



let offset =
(branchIndex-2+12)%12;



return {


gan:
heavenlyStems[
(start+offset)%10
],


zhi:
branch


};


}