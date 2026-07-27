/*
日柱

1984-01-10 = 癸卯
*/


function calculateDayPillar(year,month,day){



let jd =
calculateJD(
year,
month,
day
);



let index =
(
Math.floor(jd-2445709.5)
+
39
)
%60;



return {


gan:
heavenlyStems[index%10],


zhi:
earthlyBranches[index%12]


};


}




function calculateJD(year,month,day){


if(month<=2){

year--;
month+=12;

}


let A=Math.floor(year/100);

let B=2-A+Math.floor(A/4);



return Math.floor(365.25*(year+4716))
+
Math.floor(30.6001*(month+1))
+
day+B-1524.5;


}