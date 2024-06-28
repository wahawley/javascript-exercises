const removeFromArray = function(array, removeValue) {
    let removeArray = Array.from(arguments); //converts all arguments to array allowing for multiple arguments
    let removeValues = removeArray.slice(1); //removes first value of array so only removeValues are included, not the array
    let newArray = []; //creates new array for array values without removeValues

    for (let arrayValue of array) { //goes through every value of array
        function compareValues (value) {
            let compareBoolean=[];
            for (i=0; i<removeValues.length; i++) {
                compareBoolean.push(value === removeValues[i]);
            } //checks arrayValue against each of the removeValues, and then adds the boolean to a new array, compareBoolean
            if (compareBoolean.includes(true)) {
                return true;
            } //if compareBoolean contains true, compareValues will return true
            else {
                return false;
            } //otherwise it will return false
        }
        let compareAll = compareValues(arrayValue);
        if (compareValues(arrayValue) !== true) {
            newArray.push(arrayValue);
        } //if arrayValue is not equal to any of the rermoveValues, add it to the newArray
        else {
            continue;
        } //otherwise continue on to the next arrayValue
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
