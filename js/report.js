/*
八字报告显示模块
*/


function createReport(bazi,result){


let html="";


html+=createPillarCard(bazi);


html+=createDayMasterCard(result);


html+=createStructureCard(result.structure);


html+=createWuxingCard(result.wuxing);


html+=createStrengthCard(result.strength);



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