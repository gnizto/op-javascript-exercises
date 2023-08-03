const fibonacci = function (position) {
  const positionEvaluated = Number.parseInt(position);
  if (!Number.parseInt(positionEvaluated)) return "OOPS";
  if (positionEvaluated < 0) return "OOPS";

  let previousA = 0;
  let previousB = 1;
  let currentPosition = 0;

  for (let i = 1; i <= positionEvaluated; i++) {
    currentPosition = previousA + previousB;
    [previousB, previousA] = [previousA, currentPosition];
  }
  return currentPosition;
};

// Do not edit below this line
module.exports = fibonacci;
