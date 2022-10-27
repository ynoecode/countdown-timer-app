/**
 * ? Variables
 */
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const daysClass = document.querySelector(".p-days")
const hoursClass = document.querySelector(".p-hours")
const minClass = document.querySelector(".p-minutes")
const secClass = document.querySelector(".p-seconds")


// ? Christmas Day
const christmasDay = "25 Dec 2022"

/**
 * ? Functions/Algorithms
 * ? 1. Dislaying countdown timer.
 */
function displayCount() {

  /**
   * ? Calculates the total seconds on the given date.
   */
  const christmasDayDate = new Date(christmasDay)
  const currentDate = new Date()

  // ? Total seconds
  const totalSeconds = (christmasDayDate - currentDate) / 1000;


  /**
   * ? Calculating time.
   * ? 1. Seconds
   * ? 2. Minutes
   * ? 3. Hours
   * ? 4. Days
   */
  const seconds = Math.floor(totalSeconds) % 60
  const minutes = Math.floor(totalSeconds / 60) % 60
  const hours = Math.floor(totalSeconds / 3600) % 24
  const days = Math.floor(totalSeconds / 3600 / 24)

  /**
   * ? Displaying time.
   */
  secondsEl.innerText = formatTime(seconds)
  minutesEl.innerText = formatTime(minutes)
  hoursEl.innerText = formatTime(hours)
  daysEl.innerText = formatTime(days)

  /**
   * ? If the value is equal to "1", the time will be display in singular form.
   */
  if (days == 1) {
    daysClass.innerText = "Day"
  } else {
    secClass.innerText = "Days"
  }

  if (hours == 1) {
    hoursClass.innerText = "Hour"
  } else {
    secClass.innerText = "Hours"
  }

  if (minutes == 1) {
    minClass.innerText = "Minute"
  } else {
    secClass.innerText = "Minutes"
  }

  if (seconds == 1) {
    secClass.innerText = "Second"
  } else {
    secClass.innerText = "Seconds"
  }

}

/**
 * ? Formating time.
 * ? If value is less than 10, it will automatically add "0" in the beginning of the string.
 */
function formatTime(time) {
  return time < 10 ? `0${time}` : time;

}

setInterval(displayCount, 1000)