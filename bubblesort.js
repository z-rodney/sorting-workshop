const swap = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      let temp = arr[i+1]
      arr[i] = arr[i+1]
      arr[i+1] = temp
    } else {
      return false;
    }
  }
  return arr
}

const bubbleSort = (arr) => {
  let swapped = true;
  if (arr.length === 0 || arr.length === 1) {
    return arr
  } else {
    while(swapped) {
      swapped = swap(arr)
    }
    return arr
  }
}

module.exports = {
  bubbleSort
}


