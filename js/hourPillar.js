/*
时柱计算
五鼠遁
*/


function calculateHourPillar(
hour,
dayGan
){



let branchIndex;



if(hour>=23 || hour<1){

branchIndex=0;

}
else if(hour<3){

branchIndex=1;

}
else if(hour<5){

branchIndex=2;

}
else if(hour<7){

branchIndex=3;

}
else if(hour<9){

branchIndex=4;

}
else if(hour<11){

branchIndex=5;

}
else if(hour<13){

branchIndex=6;

}
else if(hour<15){

branchIndex=7;

}
else if(hour<17){

branchIndex=8;

}
else if(hour<19){

branchIndex=9;

}
else if(hour<21){

branchIndex=10;

}
else{

branchIndex=11;

}




let start;



if(
dayGan==="甲" ||
dayGan==="己"
){

start=0;

}
else if(
dayGan==="乙" ||
dayGan==="庚"
){

start=2;

}
else if(
dayGan==="丙" ||
dayGan==="辛"
){

start=4;

}
else if(
dayGan==="丁" ||
dayGan==="壬"
){

start=6;

}
else{

start=8;

}



return {


gan:
heavenlyStems[
(start+branchIndex)%10
],


zhi:
earthlyBranches[
branchIndex
]


};


}