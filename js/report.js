/*
八字报告显示模块
*/


function createReport(bazi,result){


let html="";


html+=createPillarCard(bazi);


html+=createDayMasterCard(result);



if(result.structure){

html+=createStructureCard(
result.structure
);

}



if(result.useGod){

html+=createUseGodCard(
result.useGod
);

}



if(result.wuxing){

html+=createWuxingCard(
result.wuxing
);

}



if(result.strength){

html+=createStrengthCard(
result.strength
);

}



return html;


}







function createUseGodCard(data){


return `


<section class="report-card">


<h2>
用神喜忌
</h2>


<h3>
${data.type}
</h3>


<p>

<b>
用神：
</b>

${data.useGod.join("、")}

</p>



<p>

<b>
喜神：
</b>

${data.happyGod.join("、")}

</p>



<p>

<b>
忌神：
</b>

${data.avoidGod.join("、")}

</p>



<p>

${data.description}

</p>


</section>


`;

}