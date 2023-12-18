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
