/*
八字报告显示模块
*/


function createReport(bazi,result){


let html="";



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