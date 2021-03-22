///////////////////////
// 88. What Are HTTP Requests

/*
console.log(1)
console.log(2)

setTimeout(() => {
	console.log('callback function fired')
}, 2000)

console.log(3)
console.log(4)
*/

///////////////////////
// 89. Making HTTP Request (XMR)

/*
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
	// console.log(request, request.readyState)
	if (request.readyState === 4) {
		console.log(request.responseText)
	}
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send()
*/

///////////////////////
// 90. Response Status

/*
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
	// console.log(request, request.readyState)
	if (request.readyState === 4 && request.status === 200) {
		console.log(request, request.responseText)
	} else if (request.readyState === 4) {
		console.log('could not fetch the data')
	}
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send()
*/

///////////////////////
// 91. Callback Functions

/*
const getTodos = callback => {
	const request = new XMLHttpRequest()

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			callback(undefined, request.responseText)
		} else if (request.readyState === 4) {
			callback('could not fetch data', undefined)
		}
	})

	request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
	request.send()
}

console.log(1)
console.log(2)

getTodos((err, data) => {
	console.log('callback fired')
	if (err) {
		console.log(err)
	} else {
		console.log(data)
	}
})

console.log(3)
console.log(4)
*/

///////////////////////
// 92. JSON Data & 93. Callback Hell
/*
const getTodos = (resource, callback) => {
	const request = new XMLHttpRequest()

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			const data = JSON.parse(request.responseText)
			callback(undefined, data)
		} else if (request.readyState === 4) {
			callback('could not fetch data', undefined)
		}
	})

	request.open('GET', resource)
	request.send()
}

getTodos('todos/luigi.json', (err, data) => {
	console.log(data)
	getTodos('todos/mario.json', (err, data) => {
		console.log(data)
		getTodos('todos/shaun.json', (err, data) => {
			console.log(data)
		})
	})
})
*/

///////////////////////
// 92. JSON Data

/*
const getTodos = resource => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4 && request.status === 200) {
				const data = JSON.parse(request.responseText)
				resolve(data)
			} else if (request.readyState === 4) {
				reject('error getting resource')
			}
		})

		request.open('GET', resource)
		request.send()
	})
}

getTodos('todos/luigis.json')
	.then(data => {
		console.log('promise resolved:', data)
	})
	.catch(err => {
		console.log('promise rejected:', err)
	})

// promise example

// const getSomething = () => {
// 	return new Promise((resolve, reject) => {
// 		// fetch something
// 		resolve('some data')
// 		// reject('some error')
// 	})
// }

// getSomething().then(
// 	data => {
// 		console.log(data)
// 	},
// 	err => {
// 		console.log(err)
// 	}
// )

// getSomething()
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	})
*/

///////////////////////
// 95. Chaining Promises

/*
const getTodos = resource => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()

		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4 && request.status === 200) {
				const data = JSON.parse(request.responseText)
				resolve(data)
			} else if (request.readyState === 4) {
				reject('error getting resource')
			}
		})

		request.open('GET', resource)
		request.send()
	})
}

getTodos('todos/luigi.json')
	.then(data => {
		console.log('promise 1 resolved:', data)
		return getTodos('todos/mario.json')
	})
	.then(data => {
		console.log('promise 2 resolved:', data)
		return getTodos('todos/shauns.json')
	})
	.then(data => {
		console.log('promise 3 resolved:', data)
	})
	.catch(err => {
		console.log('promise rejected:', err)
	})
    */

///////////////////////
// 96. The Fetch API
/*
// fetch api

fetch('todos/luigi.json')
	.then(response => {
		console.log('resolved', response)
		return response.json()
	})
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log('rejected', err)
	})
*/

///////////////////////
// 97. Async & Await
/*
// async & await

const getTodos = async () => {
	const response = await fetch('todos/luigi.json')
	const data = await response.json()
	return data
}

console.log(1)
console.log(2)

getTodos().then(data => console.log('resolved', data))

console.log(3)
console.log(4)

// fetch('todos/luigi.json')
// 	.then(response => {
// 		console.log('resolved', response)
// 		return response.json()
// 	})
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(err => {
// 		console.log('rejected', err)
// 	})
*/

///////////////////////
// 98. Throwing & Catching Errors

// throwing & catching errors

const getTodos = async () => {
	const response = await fetch('todos/luigis.json')

	if (response.status !== 200) {
		throw new Error('cannot fetch the data')
	}

	const data = await response.json()
	return data
}

getTodos()
	.then(data => console.log('resolved:', data))
	.catch(err => console.log('rejected:', err.message))
