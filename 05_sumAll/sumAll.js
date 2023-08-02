const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    typeof start != "number" ||
    typeof end != "number"
  )
    return "ERROR";

  // To change position when end is smaller than start
  if (end < start) {
    temp = start;
    start = end;
    end = temp;
  }

  sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
