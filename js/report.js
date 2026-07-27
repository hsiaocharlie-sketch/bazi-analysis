/*
八字报告显示
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

`;



Object.entries(
bazi.pillars
)
.forEach(
([name,pillar])=>{


html+=`


<div class="pillar">


<h3>
${name}
</h3>


<div class="pillar-main">

${pillar.gan}${pillar.zhi}

</div>


<div>

天干：

${pillar.tenGod || ""}

</div>



<div>

藏干：

</div>


${

pillar.hiddenTenGod
.map(
x=>`

<div>

${x.gan}

&nbsp;

${x.tenGod}

</div>

`
)
.join("")

}



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


木：
${wuxing["木"]}%<br>

火：
${wuxing["火"]}%<br>

土：
${wuxing["土"]}%<br>

金：
${wuxing["金"]}%<br>

水：
${wuxing["水"]}%


</section>


`;

}







function createStrengthCard(strength){



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
${strength.score}

</p>


<p>

${strength.reasons.join("<br>")}

</p>


</section>


`;

}