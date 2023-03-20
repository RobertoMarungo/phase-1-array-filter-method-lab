function findMatching(testArr, testString) {
  return testArr.filter(
    (result) => result.toLowerCase() === testString.toLowerCase()
  );
}

function fuzzyMatch(testArr, testString) {
  return testArr.filter(
    (result) => result.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(testArr, testString) {
  return testArr.filter((result) => result.name === testString);
}
