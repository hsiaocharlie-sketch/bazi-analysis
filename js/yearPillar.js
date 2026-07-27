/*
年柱计算
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



return {


gan:
heavenlyStems[
(year-4)%10
],


zhi:
earthlyBranches[
(year-4)%12
]


};


}