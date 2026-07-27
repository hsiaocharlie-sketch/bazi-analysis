/*
报告生成
*/


function createReport(bazi,result){


let html="";


html+=createPillarCard(bazi);


html+=createDayMasterCard(result);


html+=createWuxingCard(result.wuxing);


html+=createStrengthCard(result.strength);



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


let hidden =
pillar.hidden
.map(
x=>x.gan
)
.join(" ");



return `


<div class="pillar">

<h3>
${title}
</h3>


<div class="pillar-main">

${pillar.gan}${pillar.zhi}

</div>


<div>

藏干：

${hidden}

</div>


</div>


`;

}








function createDayMasterCard(result){


return `


<section class="card">

<h2>
日主
</h2>


<h3>

${result.dayMaster.stem}
${result.dayMaster.element}

</h3>


</section>


`;

}








function createWuxingCard(wuxing){



return `


<section class="card">


<h2>
五行力量
</h2>


${createBar(
"木",
wuxing["木"]
)}


${createBar(
"火",
wuxing["火"]
)}


${createBar(
"土",
wuxing["土"]
)}


${createBar(
"金",
wuxing["金"]
)}


${createBar(
"水",
wuxing["水"]
)}


</section>


`;

}








function createBar(name,value){


return `


<div>

${name}

<div class="wuxing-bar"

style="width:${value}%">

</div>


${value}%


</div>


`;

}








function createStrengthCard(strength){


let text="";


strength.reasons.forEach(
x=>{

text+="• "+x+"<br>";

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

${text}

</div>


</section>


`;

}