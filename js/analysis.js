/*
八字综合分析入口
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




return {


dayMaster:{


stem:bazi.dayMaster,


element:
getWuxing(
bazi.dayMaster
)

},



strength,



wuxing


};


}