// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
  return function(param="special"){
    return `You are ${string}${param}${string}!`
  }
}

let Calculator = {
  add: function (a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a/b
  }
}

function actionApplyer (integer, funcArray) {
  if (funcArray.length < 1) {
    return integer
  }
  let num = integer;
  funcArray.forEach(function(func) {
    num = func(num)
  })
  return num
}
