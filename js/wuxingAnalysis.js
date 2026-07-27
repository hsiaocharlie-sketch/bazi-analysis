/*
五行力量分析

来源：
1. 四天干
2. 四地支藏干

权重：
天干 = 10
藏干 = 按比例计算

*/


const elementWeight = {

"木":0,
"火":0,
"土":0,
"金":0,
"水":0

};




function calculateWuxingStrength(bazi){


let result={

"木":0,
"火":0,
"土":0,
"金":0,
"水":0

};




/*
天干力量

*/


Object.values(
bazi.pillars
)
.forEach(
pillar=>{


let element =
getWuxing(
pillar.gan
);


result[element]+=10;


});





/*
地支藏干力量

*/


Object.values(
bazi.pillars
)
.forEach(
pillar=>{


pillar.hidden.forEach(
item=>{


let element =
getWuxing(
item.gan
);



result[element]
+=
item.strength/10;



});


});




return normalizeWuxing(result);


}





function normalizeWuxing(data){


let total=0;


Object.values(data)
.forEach(
x=>{
total+=x;
}
);



let result={};



Object.keys(data)
.forEach(
key=>{


result[key]=
Math.round(
data[key]/total*100
);


});



return result;


}