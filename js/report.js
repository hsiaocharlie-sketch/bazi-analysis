/*
八字报告生成模块
*/


function createReport(bazi, result){


let html="";



html += createPillarCard(
    bazi
);



html += createDayMasterCard(
    result
);



html += createStrengthCard(
    result.strength
);



return html;


}






function createPillarCard(bazi){


let html=`


<section class="card">


<h2>
四柱命盘
</h2>


<div class="pillars">


${createSinglePillar(
"年柱",
bazi.pillars.year
)}


${createSinglePillar(
"月柱",
bazi.pillars.month
)}


${createSinglePillar(
"日柱",
bazi.pillars.day
)}


${createSinglePillar(
"时柱",
bazi.pillars.hour
)}



</div>


</section>


`;


return html;


}







function createSinglePillar(title,pillar){



let hidden="";


if(pillar.hidden){


hidden =
pillar.hidden
.map(
x=>x.gan
)
.join(" ");


}



return `


<div class="pillar">


<h3>
${title}
</h3>


<div class="pillar-main">

${pillar.gan}${pillar.zhi}

</div>



<div class="hidden">


藏干：

${hidden || "无"}

</div>


</div>


`;

}







function createDayMasterCard(result){



return `


<section class="card">


<h2>
日主分析
</h2>


<h3>

${result.dayMaster.stem}

${result.dayMaster.element}

</h3>



<p>

五行属性：

${result.dayMaster.element}

</p>


</section>


`;

}







function createStrengthCard(strength){



let reason="";


strength.reasons.forEach(
item=>{


reason +=
"• "+item+"<br>";

}
);



return `


<section class="card">


<h2>
旺衰判断
</h2>


<h3>

${strength.level}

</h3>


<p>

评分：

${strength.score}/100

</p>


<div class="reason">

${reason}

</div>


</section>


`;

}