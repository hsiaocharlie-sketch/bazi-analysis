/*
月柱
*/


function calculateMonthPillar(date,yearGan){


let month =
date.getMonth()+1;



let branchIndex;



if(month===1){

branchIndex=1;

}
else if(month===2 || month===3){

branchIndex=2;

}
else if(month===4){

branchIndex=3;

}
else if(month===5){

branchIndex=4;

}
else if(month===6){

branchIndex=5;

}
else if(month===7){

branchIndex=6;

}
else if(month===8){

branchIndex=7;

}
else if(month===9){

branchIndex=8;

}
else if(month===10){

branchIndex=9;

}
else if(month===11){

branchIndex=10;

}
else{

branchIndex=11;

}




let start;



if(yearGan==="甲"||yearGan==="己"){

start=2;

}
else if(yearGan==="乙"||yearGan==="庚"){

start=4;

}
else if(yearGan==="丙"||yearGan==="辛"){

start=6;

}
else if(yearGan==="丁"||yearGan==="壬"){

start=8;

}
else{

start=0;

}




return {


gan:
heavenlyStems[
(start+branchIndex-2)%10
],


zhi:
earthlyBranches[
branchIndex
]


};


}