const reverseArray = (inputArr: string[]) => {
    let left = 0
    let right  = inputArr.length - 1
    let temp = inputArr[left]

    inputArr[left] = inputArr[right]
    inputArr[right] = temp;

    return inputArr
}

export default reverseArray 