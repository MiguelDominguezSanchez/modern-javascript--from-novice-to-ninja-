/*
let age = 25
let year = 2019

// log things to console
// console.log(age, year)

/* age = 30
console.log(age)

const points = 100
console.log(points) */
/*
var score = 75
console.log(score)
*/

//////////////////////////
// Lesson 9 Strings
/*
// strings
console.log('hello, world')

let email = 'mario@thenetninja.co.uk'
console.log(email)

// string concatenation
let firstName = 'Brandon'
let lastName = 'Sanderson'

let fullName = firstName + ' ' + lastName
console.log(fullName)

// getting characters
console.log(fullName[2])

// string length
console.log(fullName.length)

// string methods
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase()
console.log(result, fullName)

let index = email.indexOf('@')
console.log(index)
*/

//////////////////////////
// Lesson 10 Common Strings Methods
/*
let email = 'mario@thenetninja.co.uk'

// let result = email.lastIndexOf('n')

// let result = email.slice(2, 5)

// let result = email.substr(4, 10)

// let result = email.replace('m', 'w')

let result = email.replace('n', 'w')

console.log(result)
*/

//////////////////////////
// Lesson 11 Numbers
/*
let radius = 10
const pi = 3.14

// console.log(radius, pi)

// math operators +, -, *, /, **, %

// console.log(10 / 2)
// let result = radius % 3
// let result = pi * radius ** 2

// order of operation - B I D M A S

// let result = 5 * (10 - 3) ** 2

// console.log(result)

let likes = 10

// like = likes + 1
// likes++
// likes--

// likes += 10
// likes -= 5
// likes *= 2
// likes /= 2

// console.log(likes)

// NaN - not a number

// console.log(5 / 'hello')
// console.log(5 * 'hello')

let result = 'the blog has ' + likes + ' likes'
console.log(result)
*/

//////////////////////////
// Lesson 12 Template Strings
/*
// template strings
const title = 'Best reads of 2019'
const author = 'Mario'
const likes = 30

// concatenation way
// let result =
// 	'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'
// console.log(result)

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result)

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`

console.log(html)
*/

//////////////////////////
// Lesson 13 Arrays
/*
let ninjas = ['shaun', 'ryu', 'chun-li']

// ninjas[1] = 'ken'
// console.log(ninjas[1])

// let ages = [20, 25, 30, 35]
// console.log(ages[2])

// let random = ['shaun', 'crystal', 30, 20]
// console.log(random)

// console.log(ninjas.length)

// array methods

// let result = ninjas.join('-')
// let result = ninjas.indexOf('chun-li')
// let result = ninjas.concat(['ken', 'crystal'])
let result = ninjas.push('ken')
result = ninjas.pop()

console.log(result)
*/

//////////////////////////
// Lesson 14 Null & Undefined
/*
let age = null

console.log(age, age + 3, `the age is ${age}`)
*/

//////////////////////////
// Lesson 15 Booleans & Comparisons
/*
// booleans & comparisons
console.log(true, false, 'true', 'false')

// methods can return booleans
let email = 'luigi@thenetninja.co.uk'
let names = ['mario', 'luigi', 'toad']

// let result = email.includes('!')
// let result = names.includes('bowser')

// console.log(result)

// comparison operators
let age = 25

// console.log(age == 25)
// console.log(age == 30)
// console.log(age != 30)
// console.log(age > 20)
// console.log(age < 20)
// console.log(age <= 25)
// console.log(age >= 25)

let name = 'shaun'

console.log(name == 'shaun')
console.log(name == 'Shaun')
console.log(name > 'crystal')
console.log(name > 'Shaun')
console.log(name > 'Crystal')
*/

//////////////////////////
// Lesson 16 Loose vs Strict Comparison

let age = 25

// loose comparison (different types can still be equal)

// console.log(age == 25)
// console.log(age == '25')
// console.log(age != 25)
// console.log(age != '25')

// strict comparison (different types cannot be equal)

console.log(age === 25)
console.log(age === '25')
console.log(age !== 25)
console.log(age !== '25')
