/*
八字报告显示模块
*/


function createReport(bazi,result){


    let html = "";


    html += createPillarCard(bazi);



    html += createDayMasterCard(result);



    if(result.structure){

        html += createStructureCard(
            result.structure
        );

    }



    if(result.wuxing){

        html += createWuxingCard(
            result.wuxing
        );

    }



    if(result.strength){

        html += createStrengthCard(
            result.strength
        );

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


<div class="bazi-table">


<div class="row title-row">

<div></div>

<div>
天干
</div>

<div>
地支
</div>


</div>


`;



    pillars.forEach(p=>{


        let data=p.data;



        let hidden="";



        if(data.hidden){


            hidden=data.hidden
            .map(
                x=>x.gan || x
            )
            .join(" ");


        }



        html += `


<div class="row">


<div class="pillar-name">

${p.name}

</div>



<div class="pillar-cell">


<div class="gan">

${data.gan || ""}

</div>


</div>




<div class="pillar-cell">


<div class="zhi">

${data.zhi || ""}

</div>



<div class="hidden">

藏干：
${hidden}

</div>


</div>


</div>


`;



    });



    html += `

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



let html=`


<section class="report-card">


<h2>
五行力量
</h2>


`;



["木","火","土","金","水"].forEach(item=>{


html+=`


<div class="five-row">


<div class="five-name">

${item}

</div>



<div>

${wuxing[item] || 0}%

</div>



</div>


`;


});



html+=`

</section>

`;



return html;


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


<p>

${
strength.reasons
?
strength.reasons.join("<br>")
:
""
}

</p>


</section>


`;

}