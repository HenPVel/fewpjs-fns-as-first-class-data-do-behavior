/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet (value) {
  let timeSplit = value.split(/[.:]/)
  time = parseInt(timeSplit[0].concat(timeSplit[1]),10)
  let x

  if (time < 1200) {
    x = "Good Morning"
  } else if (time < 1700 && time >= 1200) {
    x = "Good Afternoon"
  } else {
    x = "Good Evening"
  }
  console.log(x)
  return x
}

function displayMessage (string) {
  greeterContainer = document.querySelector('h1#greeting')
  greeterContainer.innerText = string
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
