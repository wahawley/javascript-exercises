const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	if (arr.length===0) {
    return 0;
  }
  else {
    let theSum=arr.reduce((acc,cur) => acc + cur);
    return theSum;
  }
};

const multiply = function(arr) {
  let mult=arr.reduce((acc,cur) => acc * cur);
  return mult;
};

const power = function(num,pwr) {
	let newNum=num;
  for(let i=1;i<pwr;i++) {
    newNum *= num;
  }
  return newNum;
};

const factorial = function(num) {
  let cur=1;
  for(i=cur+1;i<=num;i++) {
    cur *= i;
  }
  return cur;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
