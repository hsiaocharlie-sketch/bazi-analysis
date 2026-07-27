function startAnalysis(){


let bazi =
calculateBazi();


let result =
analyzeBazi(bazi);


document.getElementById("result").innerHTML =
createReport(
bazi,
result
);


}