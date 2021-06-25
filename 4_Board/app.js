const board = document.querySelector('#board')
const colors = ['#1693E1', '#28E1D8', '#3EE18D', '#6BE131', '#E17242','#E1B42C','#E1D528','#E1DDCF','#28E1D8']
const SQUARES_NUMBER = 810

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

square.addEventListener('mouseover', () => setColor(square))
square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomeCollor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 5px #1d1d1d'
}

function getRandomeCollor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}