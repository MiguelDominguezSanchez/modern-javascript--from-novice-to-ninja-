/////////////////////////
// 46. The Query Selector

/*
// const para = document.querySelector('body > h1:nth-child(1)')

// console.log(para)

const paras = document.querySelectorAll('p')
const errors = document.querySelectorAll('.error')

console.log(errors)
*/

/////////////////////////
// 47. Other Ways to Query the DOM

// get an element by ID
// const title = document.getElementById('page-title')
// console.log(title)

// get elements by their class name
// const errors = document.getElementsByClassName('error')
// console.log(errors)
// console.log(errors[0])

// get elements by their tag name
const paras = document.getElementsByTagName('p')
console.log(paras)
console.log(paras[1])
