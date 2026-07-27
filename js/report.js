function createReport(bazi,analysis){


let html="";


html+=`

<section class="card">

<h2>
四柱命盘
</h2>


<div class="pillars">


<div class="pillar">
年柱<br>
${bazi.year.gan}${bazi.year.zhi}
</div>


<div class="pillar">
月柱<br>
${bazi.month.gan}${bazi.month.zhi}
</div>


<div class="pillar">
日柱<br>
${bazi.day.gan}${bazi.day.zhi}
</div>


<div class="pillar">
时柱<br>
${bazi.hour.gan}${bazi.hour.zhi}
</div>


</div>

</section>

`;




html+=`

<section class="card">

<h2>
五行力量
</h2>


${createBar("木",analysis.wuxing.木,"wood")}

${createBar("火",analysis.wuxing.火,"fire")}

${createBar("土",analysis.wuxing.土,"earth")}

${createBar("金",analysis.wuxing.金,"metal")}

${createBar("水",analysis.wuxing.水,"water")}


</section>

`;




html+=`

<section class="card">

<h2>
日主分析
</h2>


<h3>
${bazi.dayMaster}木
</h3>


<h2>
${analysis.strength.level}
</h2>


<p>
评分：
${analysis.strength.score}
</p>


<ul>

${analysis.strength.reason
.map(x=>`<li>${x}</li>`)
.join("")}

</ul>


</section>

`;




html+=`

<section class="card">

<h2>
用神喜忌
</h2>


<div class="good">

第一喜：

${analysis.useGod.primary}

</div>


<div class="good">

第二喜：

${analysis.useGod.secondary}

</div>


<div class="bad">

忌：

${analysis.useGod.avoid}

</div>


</section>

`;



return html;

}



function createBar(name,value,type){


return `

<div>

${name}

<div class="bar ${type}"
style="width:${value}%">

</div>

${value}%

</div>

`;

}