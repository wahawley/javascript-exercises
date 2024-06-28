const sumAll = function(val1,val2) {
    let sumValue=0;
    let newVal1=Math.min(val1,val2);
    let newVal2=Math.max(val1,val2);

    if (val1<0 || val2<0 || Number.isInteger(val1)!==true || Number.isInteger(val2)!==true) {
        return "ERROR";
    }

    else {
        for (i=newVal1; i<=newVal2; i++) {
            sumValue+=i;
        }
        return sumValue;
    }

};

// Do not edit below this line
module.exports = sumAll;
