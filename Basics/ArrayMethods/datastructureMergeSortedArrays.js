// 2 arrays that are SORTED

function sortedArr(arr1, arr2) {
  // assign variables to parameters and create empty array
  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  // check inputs if 1 para. array is empty
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  // check while inputs are full
  while (array1Item || array2Item) {
    if (array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = arr1[i]
      i++
    } else {
      mergedArray.push(array2Item)
      array2Item = arr2[j]
      j++
    }
  }



  return mergedArray;
}

console.log(sortedArr([2, 4, 6, 8], [1, 3, 5, 7, 9]));
