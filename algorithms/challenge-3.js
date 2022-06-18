function sumMix(arr) {
  const numArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = Number(arr[index]);
    numArr.push(element);
  }
  const sum = numArr.reduce((result, number) => {
    return result + number;
  });
  return sum;
}

module.exports = sumMix;
