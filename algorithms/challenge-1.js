function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
}
module.exports = secondLargest;
