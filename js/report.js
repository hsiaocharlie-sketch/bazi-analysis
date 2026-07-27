/*
八字报告显示模块
*/


function createReport(bazi,result){


let html="";


html += createPillarCard(bazi);


html += createDayMasterCard(result);


html += createWuxingCard(result.wuxing);


html += createStrengthCard(result.strength);



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

<section class="card">

<h2>
四柱命盘
</h2>


<div class="pillars">

`;




pillars.forEach(item=>{


let p=item.data;



let hidden="";



if(p.hidden){


hidden=p.hidden
.map(
x=>x.gan
)
.join(" ");


}




let tenGod="";


if(p.tenGod){

tenGod=p.tenGod;

}




html+=`

<div class="pillar">


<h3>
${item.name}
</h3>



<div class="pillar-main">

${p.gan}${p.zhi}

</div>



<div>

十神：

${tenGod}

</div>



<div>

藏干：

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



if(!wuxing){

return "";

}



return `


<section class="card">


<h2>
五行力量
</h2>


<p>
木：
${wuxing["木"]}%
</p>


<p>
火：
${wuxing["火"]}%
</p>


<p>
土：
${wuxing["土"]}%
</p>


<p>
金：
${wuxing["金"]}%
</p>


<p>
水：
${wuxing["水"]}%
</p>


</section>


`;

}








function createStrengthCard(strength){



if(!strength){

return "";

}



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



<div>

${
strength.reasons.join("<br>")
}

</div>


</section>


`;

}