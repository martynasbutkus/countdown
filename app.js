const daysElement = document.querySelector(".days .number")
const hoursElement = document.querySelector(".hours .number")
const minutesElement = document.querySelector(".minutes .number")
const secondsElement = document.querySelector(".seconds .number")

const newYears = "1 Jan 2024"

const countdown = () => {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    const totalSecondsLeft = (newYearsDate - currentDate)/1000

    const seconds = Math.floor(totalSecondsLeft) % 60
    const minutes = Math.floor(totalSecondsLeft / 60) %60
    const hours = Math.floor(totalSecondsLeft / 3600) %24
    const days = Math.floor(totalSecondsLeft / 86400) %365

    secondsElement.innerText = formatTime(seconds)
    minutesElement.innerText = formatTime(minutes)
    hoursElement.innerText = formatTime(hours)
    daysElement.innerText = formatTime(days)
}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
}
setInterval(countdown, 1000)

//Initial Call
countdown()
const countdownContainer = document.querySelector(".countdown-container")

setTimeout(() => {
    countdownContainer.style.opacity = 1 
},500)


let currentIndex = 0
const slides = document.querySelectorAll('.slideshow li')

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'
    })
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    showSlide(currentIndex)
}
showSlide(currentIndex)
setInterval(nextSlide, 3000)