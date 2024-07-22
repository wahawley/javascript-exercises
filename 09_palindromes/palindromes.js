const palindromes = function (str) {
    str=str.replace(/\W/g,"").toLowerCase();

    let strArray=str.split("");
    let revStrArray=strArray.reverse().join("");

    return (str===revStrArray);

};

// Do not edit below this line
module.exports = palindromes;
