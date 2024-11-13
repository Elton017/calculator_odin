const label = document.querySelector("#display")
const numberButtons = document.querySelectorAll(".number")

numberButtons.forEach((button) => {
    button.addEventListener("click", label.textContent+= button.textContent)
})