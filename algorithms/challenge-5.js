function filterList(arr) {
  return arr.filter((element) => {
    return typeof element === "number";
  });
}
module.exports = filterList;
