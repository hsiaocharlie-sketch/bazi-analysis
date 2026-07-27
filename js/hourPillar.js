/*
时柱
五鼠遁
*/


function calculateHourPillar(hour,dayGan){


let branchIndex=
Math.floor(
((hour+1)%24)/2
);



let start;



if(dayGan==="甲"||dayGan==="己"){

start=0;

}
else if(dayGan==="乙"||dayGan==="庚"){

start=2;

}
else if(dayGan==="丙"||dayGan==="辛"){

start=4;

}
else if(dayGan==="丁"||dayGan==="壬"){

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