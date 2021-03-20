/////////////////////////
// 82. Dates & Times in Javascript

// dates && times in javascript

/*
// dates & times
const now = new Date()

console.log(now)
console.log(typeof now)

// year, months, day, times
console.log('getFullYear:', now.getFullYear())
console.log('getMonth:', now.getMonth())
console.log('getDate:', now.getDate())
console.log('getHours:', now.getHours())
console.log('getMinutes:', now.getMinutes())
console.log('getSeconds:', now.getSeconds())

// timestamps
console.log('timestamp:', now.getTime())

// date strings
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())
*/

/////////////////////////
// 83. Timestamps & Comparisons

// timestamps & comparisons

// timestamps
/*
const before = new Date('February 1 2019 7:30:59')
const now = new Date()

// console.log(now.getTime(), before.getTime())

const diff = now.getTime() - before.getTime()
console.log(diff)

const mins = Math.round(diff / 1000 / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 60)

console.log(mins, hours)

console.log(`he blog was written ${days} ago`)

// converting timestamp into date objects
const timestamp = 1675938474990
console.log(new Date(timestamp))
*/

/////////////////////////
// 84. Building a Digital clock
// building a digital clock
const clock = document.querySelector('.clock')

const tick = () => {
	const now = new Date()

	const h = now.getHours()
	const m = now.getMinutes()
	const s = now.getSeconds()

	const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `

	clock.innerHTML = html
}

setInterval(tick, 1000)
