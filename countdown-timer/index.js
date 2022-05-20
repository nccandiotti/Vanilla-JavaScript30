let countdown
const timerDisplay = document.querySelector(".display__time-left")
const endTime = document.querySelector(".display__end-time")
const buttons = document.querySelectorAll("[data-time]")

function timer(seconds) {
  // first clear any existing timer
  clearInterval(countdown)
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  const display = `${minutes}:${
    remainderSeconds < 10 ? 0 : ""
  }${remainderSeconds}`
  document.title = display
  timerDisplay.textContent = display
}
timer(10)

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const minutes = end.getMinutes()
  //   first ternary for adjusted 12hr time, second ternary to compensate for trailing 0
  endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}: ${
    minutes < 10 ? 0 : ""
  }${minutes}`
}
buttons.forEach((button) => button.addEventListener("click", startTimer))
function startTimer() {
  console.log(this.dataset.time)
  const seconds = parseInt(this.dataset.time)
  console.log(seconds)
  timer(seconds)
}
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault()
  //   this is the form element here, minutes is the input name, value is that input's value
  const mins = this.minutes.value
  console.log(mins)
  //   multiply by 60 because the timer func takes seconds as param
  timer(mins * 60)
  this.reset()
})
