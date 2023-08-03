const findTheOldest = function (people) {
  let oldestPersonResult = people.reduce((oldestPerson, currentPerson) => {
    let maxYearLived = currentPerson.yearOfDeath || new Date().getFullYear();
    let currentPersonAge = maxYearLived - currentPerson.yearOfBirth;

    maxYearLived = oldestPerson.yearOfDeath || new Date().getFullYear();
    let oldestPersonAge = maxYearLived - oldestPerson.yearOfBirth;
    return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
  });

  return oldestPersonResult;
};

// Do not edit below this line
module.exports = findTheOldest;
