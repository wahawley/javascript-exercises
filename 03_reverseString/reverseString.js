const reverseString = function(input) {
let inputArray=[];

for (i=input.length-1; i>=0; i--) {
    inputArray.push(input.charAt(i));
}
return inputArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
