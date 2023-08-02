const palindromes = function (string) {
  cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
