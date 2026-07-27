/*
子平格局分析

基础规则：

以月令为核心
先判断月支藏干透出情况

*/


function analyzeStructure(bazi){



let month =
bazi.pillars.month;



let dayGan =
bazi.dayMaster;



let monthZhi =
month.zhi;



let hidden =
hiddenStems[monthZhi] || [];



let result={


monthZhi:monthZhi,


mainQi:"",


structure:"普通格局",


description:""



};





if(hidden.length>0){


result.mainQi =
hidden[0].gan;


}





let god =
getTenGod(
dayGan,
result.mainQi
);



switch(god){



case "正官":

result.structure="正官格";

result.description=
"月令正官当令，以官星为主要分析对象。";

break;



case "七杀":

result.structure="七杀格";

result.description=
"月令七杀当令，需要观察制化情况。";

break;



case "正印":

result.structure="正印格";

result.description=
"月令印星当令，重视生扶与清纯。";

break;



case "偏印":

result.structure="偏印格";

result.description=
"月令偏印当令，需要观察是否有制化。";

break;



case "正财":

result.structure="正财格";

result.description=
"月令财星当令，关注财星是否可用。";

break;



case "偏财":

result.structure="偏财格";

result.description=
"月令偏财当令。";

break;



case "食神":

result.structure="食神格";

result.description=
"月令食神当令，喜生财或制杀。";

break;



case "伤官":

result.structure="伤官格";

result.description=
"月令伤官当令，需要观察配合。";

break;



default:

result.structure="月令普通格";

result.description=
"月令力量需要结合全局判断。";

}



return result;


}