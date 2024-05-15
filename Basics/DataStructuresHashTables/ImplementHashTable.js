// Hash tables are great when you want quick access to certain values

// Return the first recurring item
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} //O(n^2)

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    console.log(map[input[i]]);
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
    console.log(map)
  }
  
  return undefined;
}
firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])
