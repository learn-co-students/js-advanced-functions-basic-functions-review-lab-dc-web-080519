// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper='*') {
  return function inner(string='special') {
    return `You are ${wrapper}${string}${wrapper}!`
  }
}

const Calculator = {
  add: function(a, b){return a + b},
  subtract: function(a, b){return a - b},
  multiply: function(a, b){return a * b},
  divide: function(a, b){return a / b}
}

function actionApplyer(int, functionArray) {
  for(const func of functionArray){
    int = func(int)
  };
  return int;
}