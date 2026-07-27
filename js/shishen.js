/*
十神计算
*/


const stemInfo={

甲:{element:"木",yin:"阳"},
乙:{element:"木",yin:"阴"},

丙:{element:"火",yin:"阳"},
丁:{element:"火",yin:"阴"},

戊:{element:"土",yin:"阳"},
己:{element:"土",yin:"阴"},

庚:{element:"金",yin:"阳"},
辛:{element:"金",yin:"阴"},

壬:{element:"水",yin:"阳"},
癸:{element:"水",yin:"阴"}

};





function getTenGod(day,target){



if(
!stemInfo[day] ||
!stemInfo[target]
){

return "";

}



if(day===target){

return "比肩";

}



let d=
stemInfo[day];


let t=
stemInfo[target];



let same =
d.yin===t.yin;



let relation="";



let map={


木:{
火:"食伤",
土:"财",
金:"官杀",
水:"印"
},


火:{
土:"食伤",
金:"财",
水:"官杀",
木:"印"
},


土:{
金:"食伤",
水:"财",
木:"官杀",
火:"印"
},


金:{
水:"食伤",
木:"财",
火:"官杀",
土:"印"
},


水:{
木:"食伤",
火:"财",
土:"官杀",
金:"印"
}


};



relation =
map[d.element][t.element];



if(relation==="食伤")
return same?"食神":"伤官";


if(relation==="财")
return same?"偏财":"正财";


if(relation==="官杀")
return same?"七杀":"正官";


if(relation==="印")
return same?"偏印":"正印";



return "";

}








function addTenGodToPillars(bazi){



let day =
bazi.dayMaster;



Object.values(
bazi.pillars
)
.forEach(
pillar=>{


pillar.tenGod =
getTenGod(
day,
pillar.gan
);



if(pillar.gan===day){

pillar.tenGod="日主";

}




pillar.hidden =
pillar.hidden.map(
item=>{


return {

gan:item.gan,

tenGod:
getTenGod(
day,
item.gan
)

};


});


});


}