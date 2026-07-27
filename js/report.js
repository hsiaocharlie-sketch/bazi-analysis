function createReport(bazi,result){


let html="";


html+=`

<section class="card">

<h2>
四柱命盘
</h2>


<div class="pillars">


<div class="pillar">
年柱<br>
${bazi.pillars.year.gan}${bazi.pillars.year.zhi}
</div>


<div class="pillar">
月柱<br>
${bazi.pillars.month.gan}${bazi.pillars.month.zhi}
</div>


<div class="pillar">
日柱<br>
${bazi.pillars.day.gan}${bazi.pillars.day.zhi}
</div>


<div class="pillar">
时柱<br>
${bazi.pillars.hour.gan}${bazi.pillars.hour.zhi}
</div>


</div>


</section>


`;



html+=`

<section class="card">

<h2>
五行力量
</h2>


${bar("木",result.wuxing.wood,"wood")}

${bar("火",result.wuxing.fire,"fire")}

${bar("土",result.wuxing.earth,"earth")}

${bar("金",result.wuxing.metal,"metal")}

${bar("水",result.wuxing.water,"water")}


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


<p>
状态：
${result.strength.level}
</p>


<p>
评分：
${result.strength.score}
</p>


<div class="reason">


${result.strength.reasons
.map(x=>"• "+x+"<br>")
.join("")}


</div>


</section>


`;



html+=`

<section class="card">

<h2>
用神喜忌
</h2>


<div class="good">

第一用神：

${result.useGod.primary}

<br>

喜神：

${result.useGod.secondary}

</div>


<div class="warning">

忌：

${result.useGod.avoid}

</div>


</section>


`;



return html;


}



function bar(name,value,type){


return `

<div>

${name}

<div class="wuxing-bar ${type}"
style="width:${value}%">

</div>

${value}%

</div>

`;

}