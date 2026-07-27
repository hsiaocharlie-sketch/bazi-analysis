/*
八字综合分析
*/


function analyzeBazi(bazi){



    if(typeof addTenGodToPillars === "function"){

        addTenGodToPillars(bazi);

    }



    let strength = null;


    if(typeof calculateStrength === "function"){

        strength =
        calculateStrength(bazi);

    }



    let wuxing = null;


    if(typeof calculateWuxingStrength === "function"){

        wuxing =
        calculateWuxingStrength(bazi);

    }




    let structure = null;


    if(typeof analyzeStructure === "function"){

        structure =
        analyzeStructure(bazi);

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



        structure:structure



    };


}