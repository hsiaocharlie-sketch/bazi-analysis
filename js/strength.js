/*
日主旺衰计算

综合：
月令
根气
帮扶
泄耗
克制

*/


function calculateStrength(bazi){


let dayGan =
bazi.dayMaster;


let score=50;


let reasons=[];



let month =
bazi.pillars.month;



let monthHidden =
month.hidden;



/*
月令权重最大
*/

monthHidden.forEach(item=>{


if(
getWuxing(item.gan)
===
getWuxing(dayGan)
){

score+=15;

reasons.push(
"月令藏干帮扶日主"
);

}


});





/*
四柱天干帮扶
*/

Object.values(
bazi.pillars
)
.forEach(pillar=>{


if(
getWuxing(pillar.gan)
===
getWuxing(dayGan)
){

score+=5;

reasons.push(
pillar.gan+"同类帮身"
);

}


});





/*
泄耗扣分

*/

Object.values(
bazi.pillars
)
.forEach(pillar=>{


let god =
getTenGod(
dayGan,
pillar.gan
);



if(
god==="食神" ||
god==="伤官" ||
god==="正财" ||
god==="偏财" ||
god==="正官" ||
god==="七杀"
){

score-=5;


}



});





if(score>70){

return {

level:"身强",

score,

reasons

};

}



if(score<40){

return {

level:"身弱",

score,

reasons

};

}



return {

level:"中和偏弱",

score,

reasons

};


}