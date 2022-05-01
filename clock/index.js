"strict"

console.log("hi")
const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
function setDate(date) {
  const now = new Date()
  //   seconds
  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg )`
  //   minutes
  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360 + 90
  minHand.style.transform = `rotate(${minutesDegrees}deg )`
  //   hour
  const hour = now.getHours()
  console.log(hour)
  const hourDegrees = (hour / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg )`
}

setInterval(setDate, 1000)
