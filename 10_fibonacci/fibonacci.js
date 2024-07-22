const fibonacci = function(num) {
    if (num>0) {
        let seq=[1,1];
        for (let i=1;i<num-1;i++) {
            seq.push(seq[i]+seq[i-1]);
        }
        return seq[num-1];
    }
    else if (num==0){
        return 0;
    }
    else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
