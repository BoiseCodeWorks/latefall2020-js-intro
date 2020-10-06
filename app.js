console.log("from the app.js")
let myName = "D$"
let myAge = 100000
myName = 'Darryl'
var whatevs
myName = `Kody`

let yourName = "Miles"
let yourAge = 23

let num = 5
num = -6.7
console.log(myName)

let alive = true

let person1 = {
  name: "D$",
  age: 100000,
  Age: "neat",
  AGE: "oops",
  aGe: "mistakes were made",
  sister: {
    name: "Rhianon",
    age: undefined
  }
}

let person2 = {
  name: "Mile$",
  age: 23
}

// this thing was annoying, sorry.
// let propertyToAccess = prompt("What property do you want to see?")

// console.log("Darryls sister", person1.sister)
// console.log("Darryls sister", person1["sister"])
// console.log("Property to view", person1[propertyToAccess])
console.log("Mile$", person2)

let num1 = 5
let num2 = 7
let sum = num1 + num2
let product = num1 * num2
let quotient = num1 / num2
let remainder = num1 % num2


sum += 10
sum = sum + 10

let incrementor = 1
incrementor++
console.log(++incrementor)

let decrementor = 1
decrementor--
console.log(--decrementor)


function greet(greeting = "Hello world"){
  console.log(greeting);
  return 42
}

function add(a, b){
  return a + b
}

let twoNumbersAddedTogether = add(2, 3)


function evalNums(numOne, numTwo){ 
  if(numOne > numTwo){
    console.log(`${numOne} is greater than ${numTwo}`);
  }else if(numOne < numTwo){
    console.log(`${numOne} is less than ${numTwo}`);
  }else {
    console.log(`they the same`);
  }
}

if(1 !== "1"){
  console.log("it is true")
}


let fruit = "pizza"
switch(fruit){
  case "apple":
    console.log("itsa appel")
    break
  case "orange":
    console.log("itsa orange")
    break
  case "pear":
    console.log("itsa pear")
    break
  default:
    console.log("its not a fruit")
break
}