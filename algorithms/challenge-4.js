function sumTwoSmallestNums(arr) {
    const positiveArr = arr.filter((postiveNum) => { return postiveNum > 0})
    const sortedArr = positiveArr.sort((a,b) => a - b)
    return sortedArr[0] + sortedArr[1]
 }

 module.exports =sumTwoSmallestNums