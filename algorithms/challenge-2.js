function filterArray(arr) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      filteredArray.push(arr[i]);
    } else {
      //do nothing
    }
  }
  return filteredArray;
}

module.exports = filterArray;
