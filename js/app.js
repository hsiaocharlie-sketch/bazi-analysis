/*
程序入口
*/


function analyze(){



let input={



date:
document.getElementById(
"birthDate"
).value,



time:
document.getElementById(
"birthTime"
).value,



location:
document.getElementById(
"location"
).value,



gender:
document.getElementById(
"gender"
).value


};




let bazi =
calculateBazi(
input
);



let result =
analyzeBazi(
bazi
);



document.getElementById(
"report"
).innerHTML
=
createReport(
bazi,
result
);



}