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

/*
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
*/

/////////////////////////
// 49. Getting & Setting Attributes

/*
const link = document.querySelector('a')

console.log(link.getAttribute('href'))
link.setAttribute('href', 'http://www.thenetninja.co.uk')
link.innerText = 'The Net Ninja Website'

const mssg = document.querySelector('p')

console.log(mssg.getAttribute('class'))
mssg.setAttribute('class', 'success')
mssg.setAttribute('style', 'color: green')
*/

/////////////////////////
// 50. Changing CSS Styles

/*
const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 50px;')

console.log(title.style)
console.log(title.style.color)

title.style.margin = '50px'
title.style.color = 'crimson'
title.style.fontSize = '60px'
title.style.margin = ''
*/

/////////////////////////
// 51. Adding & Removing Classes

/*
// const content = document.querySelector('p')

// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')

const paras = document.querySelectorAll('p')

paras.forEach(p => {
	if (p.textContent.includes('error')) {
		p.classList.add('error')
	}
	if (p.innerText.includes('success')) {
		p.classList.add('success')
	}
})

const title = document.querySelector('.title')

title.classList.toggle('test')
title.classList.toggle('test')
*/

/////////////////////////
// 52. Parents, Children & Siblings

const article = document.querySelector('article')

// console.log(article.children)
// console.log(Array.from(article.children))
// console.log(article.children)

// Array.from(article.children).forEach(child => {
// 	child.classList.add('article-element')
// })

const title = document.querySelector('h2')

console.log(title.parentElement)
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)

// chaining
console.log(title.nextElementSibling.parentElement.children)
