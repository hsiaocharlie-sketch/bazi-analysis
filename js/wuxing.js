/*
五行基础关系
*/


const wuxingMap = {


"甲":"木",
"乙":"木",


"丙":"火",
"丁":"火",


"戊":"土",
"己":"土",


"庚":"金",
"辛":"金",


"壬":"水",
"癸":"水"


};



const wuxingRelation = {


"木":{
    sheng:"火",
    ke:"土"
},


"火":{
    sheng:"土",
    ke:"金"
},


"土":{
    sheng:"金",
    ke:"水"
},


"金":{
    sheng:"水",
    ke:"木"
},


"水":{
    sheng:"木",
    ke:"火"
}


};



function getWuxing(gan){

return wuxingMap[gan];

}