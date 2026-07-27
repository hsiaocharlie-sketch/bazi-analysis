/*
时柱计算

根据：
1. 出生时辰
2. 日干

采用五鼠遁计算时干

*/


const hourBranches = [

"子","丑","寅","卯",
"辰","巳","午","未",
"申","酉","戌","亥"

];



const hourStartStem = {


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





function calculateHourPillar(hour, dayGan){



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




let start =
hourStartStem[dayGan];



return {


gan:
heavenlyStems[
(start+branchIndex)%10
],



zhi:
hourBranches[
branchIndex
]


};


}