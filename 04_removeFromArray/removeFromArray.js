const removeFromArray = function (arrayInput, ...removeItems) {
  filteredArrayInput = arrayInput.filter(
    (arrayItem) => !removeItems.includes(arrayItem)
  );
  return filteredArrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
