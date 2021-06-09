// Your code here
 function saturdayFun(where="roller-skate"){
    return `This Saturday, I want to ${where}!`
}
function mondayWork(where="go to the office"){
     return`This Monday, I will ${where}.`
}
//"This Monday, I will go to the office."
function wrapAdjective(sign = "*" )
{
    return function(name){
        return `You are ${sign}${name}${sign}!`
    }
}
