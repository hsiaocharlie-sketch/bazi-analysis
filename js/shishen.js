/*
子平八字十神计算
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





function getTenGod(dayGan,targetGan){



if(
!dayGan ||
!targetGan
){

return "";

}



let day =
stemInfo[dayGan];


let target =
stemInfo[targetGan];



if(
!day ||
!target
){

return "";

}



if(dayGan===targetGan){

return "比肩";

}



let same =
day.yinYang === target.yinYang;



let relation="";



switch(day.element){


case "木":


if(target.element==="火")
relation="食伤";

if(target.element==="土")
relation="财";

if(target.element==="金")
relation="官杀";

if(target.element==="水")
relation="印";


break;




case "火":


if(target.element==="土")
relation="食伤";

if(target.element==="金")
relation="财";

if(target.element==="水")
relation="官杀";

if(target.element==="木")
relation="印";


break;




case "土":


if(target.element==="金")
relation="食伤";

if(target.element==="水")
relation="财";

if(target.element==="木")
relation="官杀";

if(target.element==="火")
relation="印";


break;




case "金":


if(target.element==="水")
relation="食伤";

if(target.element==="木")
relation="财";

if(target.element==="火")
relation="官杀";

if(target.element==="土")
relation="印";


break;




case "水":


if(target.element==="木")
relation="食伤";

if(target.element==="火")
relation="财";

if(target.element==="土")
relation="官杀";

if(target.element==="金")
relation="印";


break;


}



if(!relation){

return "";

}



if(relation==="食伤"){

return same ? "食神":"伤官";

}



if(relation==="财"){

return same ? "偏财":"正财";

}



if(relation==="官杀"){

return same ? "七杀":"正官";

}



if(relation==="印"){

return same ? "偏印":"正印";

}



return "";

}







function addTenGodToPillars(bazi){



let dayGan =
bazi.dayMaster;



Object.values(
bazi.pillars
)
.forEach(
pillar=>{


pillar.tenGod =
getTenGod(
dayGan,
pillar.gan
);



if(
pillar.gan===dayGan
){

pillar.tenGod="日主";

}




if(
pillar.hidden
){


pillar.hidden =
pillar.hidden.map(
item=>{


let gan =
typeof item==="string"
?
item
:
item.gan;



return {


gan:gan,


tenGod:
getTenGod(
dayGan,
gan
)


};


});


}



});


}