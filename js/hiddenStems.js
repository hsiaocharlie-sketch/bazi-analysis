/*
地支藏干
统一格式
*/


const hiddenStems = {


"子":[
{gan:"癸"}
],


"丑":[
{gan:"己"},
{gan:"癸"},
{gan:"辛"}
],


"寅":[
{gan:"甲"},
{gan:"丙"},
{gan:"戊"}
],


"卯":[
{gan:"乙"}
],


"辰":[
{gan:"戊"},
{gan:"乙"},
{gan:"癸"}
],


"巳":[
{gan:"丙"},
{gan:"戊"},
{gan:"庚"}
],


"午":[
{gan:"丁"},
{gan:"己"}
],


"未":[
{gan:"己"},
{gan:"丁"},
{gan:"乙"}
],


"申":[
{gan:"庚"},
{gan:"壬"},
{gan:"戊"}
],


"酉":[
{gan:"辛"}
],


"戌":[
{gan:"戊"},
{gan:"辛"},
{gan:"丁"}
],


"亥":[
{gan:"壬"},
{gan:"甲"}
]


};





function getHiddenStems(zhi){


return hiddenStems[zhi]
?
JSON.parse(
JSON.stringify(hiddenStems[zhi])
)
:
[];

}