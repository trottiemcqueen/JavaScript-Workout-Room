/*let arrSwap = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function minSwaps(arr) {
  let result = 0
  let len = arr.length
  let i =0

  while (i < len) {
    if (i + 1 !== arr[i]) {

      let temp = arr[i]
      arr[i] = arr[temp - 1]
      arr[temp -1] = temp

      result++
    } else {
      i++
    }
  }
  return result
}*/

//join method - turn into string as well
let names = ['John', 'Mark', 'Luke', 'John', 'Adam']

let newNames = names.join(' and ')

console.log(newNames);

//toString method - turn into string as well

let arr = ['John', 'Mark', 'Luke', 'John', 'Adam', 'Susie']

let newArr = arr.toString()
console.log(newArr)

//the concat method

let newNombre = ['John', 'Mark', 'Luke', 'John', 'Adam']
let queries = [1, 2, 3, 4, 5]

let both = newNombre.concat(queries) // object Array 10
let newNew = newNombre + queries // turns into a string
console.log(both);
console.log(newNew);

// splice method - best practice to copy array first, mutates array and cause bugs in program if mutated with other functions taking place wth the array

let newNombres = ['John', 'Mark', 'Luke', 'John', 'Adam']
let arrSli = newNombres.splice(1, 3)//displays new array of missing indicies when you use a new variable
console.log(arrSli)
console.log(newNombres)//prints as normal of new array
//let newNombresCopy = [...newNombres]
//console.log(newNombresCopy)

//indexOf with and without an added var. lastIndexOf method
let indie = ['John', 'Mark', 'Luke', 'John', 'Adam']
  indie.indexOf('Adam')//without added var
let indieStr = 'Today is a good day for the gym'
  let indieBig = indieStr.indexOf('good')

let indieFilm = indie.indexOf('Adam')//with added var
console.log(indie, 'example1')
console.log(indieFilm, 'example2')
console.log(indieBig)

// forEach function method with the counter

let forLife = ['nice', 'nevermind', 'noose', 'neverland']
let counter = 0

forLife.forEach(n => {
  //counter++
  console.log(n)
})
console.log(counter)
console.log(forLife)
//console.log(i)

//map function method
let nums = [1,2,3,4,5,6,7,8,9]
//double each element in the array, then map into a new arr

let doubled = nums.map((n) => n * 2 )
console.log(nums)
console.log(doubled)

//filter method
let posts = [
  {title: 'post', author: 'trottie'},
  {title: 'post', author: 'jessica'},
  {title: 'design', author: 'trottie'},
  {title: 'post', author: 'amber'}
]

let workDone = posts.filter((p) => p.author === 'trottie' && p.title === 'post')
  console.log(workDone)

//reduce method
let numbers = [12, 34, 78, 99, 98]//<--highest element in an array

let max = numbers.reduce((a,b) => Math.max(a,b), -Infinity)
  console.log(max)

let numbo = [2, 3, 5, 6, 8, 9]//<-- total amount in an array
let newNumbo = numbo.reduce((total, currentVal) => total + currentVal)

console.log(newNumbo)

//some method
let someNums = [1, 4, 15, 78, 5, 6]// test to see -boolean any number in the array

let isGreaterThan10 = someNums.some((n) => n >= 10)
  console.log(isGreaterThan10)

//every method
//same as some method but ALL elements instead with a boolean

//find array method
let stock = [
  { item: 'ketchup', quantity: 32 },
  { item: 'ketchup', quantity: 32 },
  { item: 'ketchup', quantity: 32 },
  { item: 'ketchup', quantity: 32 },
  { item: 'ketchup', quantity: 32 }
]
