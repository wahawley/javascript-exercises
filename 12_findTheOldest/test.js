const date=new Date();

const findTheOldest = function(arr) {
    arr.forEach((element) => {
        (yearOfDeath in element) ? element.age=(element.yearOfDeath-element.yearOfBirth) :element.age=(date.getFullYear()-element.yearOfBirth)})
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  console.log(findTheOldest(people).name);

// Do not edit below this line
//module.exports = findTheOldest;
