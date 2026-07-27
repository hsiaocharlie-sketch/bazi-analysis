/*
八字报告显示模块
*/


function createReport(bazi,result){


let html = "";


html += createPillarCard(bazi);


html += createDayMasterCard(result);


html += createWuxingCard(result.wuxing);


html += createStrengthCard(result.strength);



return html;


}





function createPillarCard(bazi){



let pillars = [

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



let html = `

<section class="report-card">

<h2>
四柱命盘
</h2>


<div class="bazi-table">


<div class="row title-row">

<div></div>
<div>天干</div>
<div>地支</div>

</div>

`;



pillars.forEach(p=>{


let data=p.data;



let hidden="";


if(data.hidden){

hidden=data.hidden
.map(x=>x.gan)
.join(" ");

}



html += `


<div class="row">


<div class="pillar-name">

${p.name}

</div>



<div class="pillar-cell">

<div class="gan">

${data.gan}

</div>


<div class="god">

${data.tenGod || ""}

</div>


</div>





<div class="pillar-cell">


<div class="zhi">

${data.zhi}

</div>



<div class="hidden">

藏干：

${hidden}

</div>


</div>



</div>


`;


});



html += `

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







function createWuxingCard(wuxing){


if(!wuxing){

return "";

}



let items=[
"木",
"火",
"土",
"金",
"水"
];


let html=`


<section class="report-card">

<h2>
五行力量
</h2>

`;



items.forEach(item=>{


html += `


<div class="five-row">


<div class="five-name">

${item}

</div>


<div class="bar-box">

<div class="bar"

style="width:${wuxing[item]}%">

</div>

</div>


<div>

${wuxing[item]}%

</div>


</div>


`;



});



html += `

</section>

`;



return html;


}







function createStrengthCard(strength){



return `

<section class="report-card">


<h2>
旺衰判断
</h2>


<div class="strength-title">

${strength.level}

</div>


<div>

评分：
${strength.score}

</div>


<p>

${strength.reasons.join("<br>")}

</p>


</section>

`;

}