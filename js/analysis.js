/*
八字综合分析
*/


function analyzeBazi(bazi){



addTenGodToPillars(
bazi
);



let strength =
calculateStrength(
bazi
);



let wuxing =
calculateWuxingStrength(
bazi
);



let structure =
analyzeStructure(
bazi
);



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


structure:structure



};


}