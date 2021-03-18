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

/*
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
*/

/////////////////////////
// 48. Adding & Changing Page Content

const para = document.querySelector('p')

// console.log(para.innerText)
// para.innerText = 'ninjas are awesome!'

const paras = document.querySelectorAll('p')

// paras.forEach(para => {
// 	console.log(para.innerText)
// 	para.innerText += ' next text'
// })

const content = document.querySelector('.content')

// console.log(content.innerHTML)
// content.innerHTML += '<h2>This is a new h2</h2>'

const people = ['mario', 'luigi', 'yoshi']

people.forEach(person => {
	content.innerHTML += `<p>${person}</p>`
})
