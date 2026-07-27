/*
八字报告显示模块
*/


function createReport(bazi,result){


let html="";


html+=createPillarCard(bazi);


html+=createDayMasterCard(result);



if(result.structure){

html+=createStructureCard(result.structure);

}



if(result.wuxing){

html+=createWuxingCard(result.wuxing);

}



if(result.strength){

html+=createStrengthCard(result.strength);

}



return html;


}







function createPillarCard(bazi){


let pillars=[

["年柱",bazi.pillars.year],

["月柱",bazi.pillars.month],

["日柱",bazi.pillars.day],

["时柱",bazi.pillars.hour]

];



let html=`

<section class="report-card">

<h2>
四柱命盘
</h2>


<div class="pillar-container">

`;



pillars.forEach(p=>{


let name=p[0];

let data=p[1];



let hidden="";



if(data.hidden){


hidden=data.hidden.map(
x=>

`

<div class="hidden-item">

${x.gan}
&nbsp;
${x.tenGod}

</div>

`

).join("");



}



html+=`


<div class="pillar-column">


<div class="pillar-name">

${name}

</div>



<div class="ten-god-top">

${data.tenGod}

</div>



<div class="pillar-gan">

${data.gan}

</div>



<div class="pillar-zhi">

${data.zhi}

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