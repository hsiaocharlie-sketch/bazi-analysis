/*
八字综合分析
*/


function analyzeBazi(bazi){



if(typeof addTenGodToPillars==="function"){

addTenGodToPillars(bazi);

}



let strength =
calculateStrength(bazi);



let wuxing =
calculateWuxingStrength(bazi);




let structure=null;


if(typeof analyzeStructure==="function"){


structure=
analyzeStructure(bazi);


}




let useGod=null;


if(typeof analyzeUseGod==="function"){


useGod=
analyzeUseGod(
bazi,
strength
);


}




return {


dayMaster:{


stem:bazi.dayMaster,


element:
getWuxing(
bazi.dayMaster
)


},



strength:strength,



wuxing:wuxing,



structure:structure,



useGod:useGod



};


}