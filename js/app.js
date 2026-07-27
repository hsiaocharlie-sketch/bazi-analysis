function analyze(){


try{


let input={


date:
document.getElementById("birthDate").value,


time:
document.getElementById("birthTime").value,


location:
document.getElementById("location").value,


gender:
document.getElementById("gender").value,


timeMode:
document.getElementById("timeMode").value


};



console.log("输入资料:",input);



let bazi =
calculateBazi(input);



console.log("命盘:",bazi);



let result =
analyzeBazi(bazi);



console.log("分析结果:",result);



document.getElementById("report")
.innerHTML =
createReport(
bazi,
result
);



}

catch(error){


console.error(error);



document.getElementById("report")
.innerHTML =

`

<section class="card">

<h2>
程序错误
</h2>

<p>
${error.message}
</p>

</section>

`;

}


}