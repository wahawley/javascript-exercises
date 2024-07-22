const date=new Date();

const findTheOldest = function(arr) {
    arr.forEach((element) => {
        if (element.yearOfDeath!==undefined) {
            element.age=(element.yearOfDeath-element.yearOfBirth);
        }
        else {
            element.age=(date.getFullYear()-element.yearOfBirth);
        }
    });

    arr.sort((el1,el2) => (el2.age-el1.age));
    return arr[0];
};
// Do not edit below this line
module.exports = findTheOldest;
