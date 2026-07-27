/*
八字报告显示模块
*/


function createReport(bazi,result){


    let html = "";


    html += createPillarCard(bazi);


    html += createDayMasterCard(result);



    if(result.structure){

        html += createStructureCard(result.structure);

    }



    if(result.wuxing){

        html += createWuxingCard(result.wuxing);

    }



    if(result.strength){

        html += createStrengthCard(result.strength);

    }



    return html;


}







function createPillarCard(bazi){



    let pillars=[


        {
            name:"年柱",
            data:bazi.pillars.year
        },


        {
            name:"月柱",
            data:bazi.pillars.month
        },


        {
            name:"日柱",
            data:bazi.pillars.day
        },


        {
            name:"时柱",
            data:bazi.pillars.hour
        }


    ];



    let html=`


<section class="report-card">


<h2>
四柱命盘
</h2>



<div class="pillar-container">

`;



    pillars.forEach(p=>{


        let data=p.data;



        let hidden="";



        if(data.hidden){


            hidden =
            data.hidden
            .map(
                x=>{

                    if(typeof x==="object"){

                        return x.gan;

                    }

                    return x;

                }
            )
            .join(" ");


        }





        html+=`


<div class="pillar-column">


<div class="pillar-name">

${p.name}

</div>



<div class="ten-god-top">

${data.tenGod || ""}

</div>



<div class="pillar-gan">

${data.gan || ""}

</div>




<div class="pillar-zhi">

${data.zhi || ""}

</div>




<div class="hidden-title">

藏干

</div>



<div class="hidden-text">

${hidden}

</div>



</div>


`;



    });



    html+=`

</div>


</section>


`;



    return html;


}









function createDayMasterCard(result){


return `


<section class="report-card">


<h2>
日主
</h2>


<div class="daymaster">


${result.dayMaster.stem}


<span>

${result.dayMaster.element}

</span>


</div>


</section>


`;

}







function createStructureCard(structure){


return `


<section class="report-card">


<h2>
格局分析
</h2>


<h3>

${structure.structure}

</h3>


<p>

月令：
${structure.monthZhi}

</p>


<p>

${structure.description}

</p>


</section>


`;

}







function createWuxingCard(wuxing){


return `


<section class="report-card">


<h2>
五行力量
</h2>


<p>
木：
${wuxing["木"] || 0}%
</p>


<p>
火：
${wuxing["火"] || 0}%
</p>


<p>
土：
${wuxing["土"] || 0}%
</p>


<p>
金：
${wuxing["金"] || 0}%
</p>


<p>
水：
${wuxing["水"] || 0}%
</p>


</section>


`;

}







function createStrengthCard(strength){


return `


<section class="report-card">


<h2>
旺衰判断
</h2>


<h3>

${strength.level}

</h3>


<p>

评分：
${strength.score}

</p>


</section>


`;

}