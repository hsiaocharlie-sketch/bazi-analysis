/*
十神计算模块

以日干为中心
*/


const stemInfo = {


"甲":{
    element:"木",
    yinYang:"阳"
},

"乙":{
    element:"木",
    yinYang:"阴"
},


"丙":{
    element:"火",
    yinYang:"阳"
},

"丁":{
    element:"火",
    yinYang:"阴"
},


"戊":{
    element:"土",
    yinYang:"阳"
},

"己":{
    element:"土",
    yinYang:"阴"
},


"庚":{
    element:"金",
    yinYang:"阳"
},

"辛":{
    element:"金",
    yinYang:"阴"
},


"壬":{
    element:"水",
    yinYang:"阳"
},

"癸":{
    element:"水",
    yinYang:"阴"
}


};




const generateMap={

"木":"火",
"火":"土",
"土":"金",
"金":"水",
"水":"木"

};



const controlMap={

"木":"土",
"土":"水",
"水":"火",
"火":"金",
"金":"木"

};






function getTenGod(dayGan,targetGan){



if(!dayGan || !targetGan){

return "";

}



if(dayGan===targetGan){

return "比肩";

}



let day =
stemInfo[dayGan];


let target =
stemInfo[targetGan];



let sameYinYang =
day.yinYang===target.yinYang;





/*
生我者：印

*/

if(
generateMap[target.element]
===
day.element
){

return sameYinYang?
"偏印":
"正印";

}





/*
我生者：食伤

*/

if(
generateMap[day.element]
===
target.element
){

return sameYinYang?
"食神":
"伤官";

}





/*
我克者：财

*/

if(
controlMap[day.element]
===
target.element
){

return sameYinYang?
"偏财":
"正财";

}





/*
克我者：官杀

*/

if(
controlMap[target.element]
===
day.element
){

return sameYinYang?
"七杀":
"正官";

}



return "";

}







function addTenGodToPillars(bazi){



Object.values(
bazi.pillars
)
.forEach(
pillar=>{


pillar.tenGod =
getTenGod(
bazi.dayMaster,
pillar.gan
);



pillar.hiddenTenGod =
pillar.hidden.map(
item=>{


return {


gan:item.gan,


tenGod:
getTenGod(
bazi.dayMaster,
item.gan
),


strength:
item.strength


};


});


});


return bazi;


}