var size = 16
const body = document.querySelector("body")

function createGrid(size) {
    const container = document.createElement("div")
    const containerHeight = window.innerHeight * 0.93
    const containerWidth = window.innerWidth * 0.93
    container.classList.add("container")
    for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div")
    gridSquare.classList.add('gridSquare')
    gridSquare.style.width = `${containerWidth / size}px`
    gridSquare.style.height = `${containerHeight / size}px`
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = "black"
    })
    container.appendChild(gridSquare)
    }
    body.appendChild(container)
}

const button = document.querySelector('button')
button.addEventListener("click", () => {
    const userInput = prompt("Please enter the size for your Etch-a-Sketch, limited to 100:")
    const inputNumber = Number(userInput);

    if (isNaN(inputNumber)){
        alert(`You entered: ${userInput}, which isn't a number.`)
    } else if (inputNumber > 100 || inputNumber < 1){
        alert(`You entered ${inputNumber}, which isn't a valid grid size.`)
    } else {
        size = inputNumber
        const container = document.querySelector(".container")
        container.remove()
        createGrid(size)
        button.textContent = `Etch-a-Sketch Size: ${size} x ${size}`
    }
})

createGrid(size)