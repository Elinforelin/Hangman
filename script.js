const wordsContainer = document.querySelector('.wordsContainer')
const input = document.querySelector('.input')
const button = document.querySelector('.button')
const form = document.querySelector('.form')
let counter = 1

const words = ['тупик', 'макака', 'слон']

let word = words[Math.floor(Math.random() * words.length)]
const wordLenth = word.length

let array = word.split('')

array.forEach(element => {
  square = document.createElement('div')
  wordsContainer.append(square)
  square.classList.add('square')
  square.setAttribute("data-value", `${element}`)
})

form.addEventListener('submit', (event) => getInputValue(event))

function getInputValue(event) {
  event.preventDefault()
  let letter = input.value
  if (!letter) {
    return alert('Введите пожалуйста букву')
  } else if (letter.length !== 1) {
    return alert('Введите пожалуйста одну букву')
  }

  const allSquares = document.querySelectorAll('.square');
  let element = document.getElementById(`${counter}`);

  const squares = [...allSquares].filter(square => square.dataset.value === letter);


  if (squares.length === 0) {
    element.style.display = 'block'
    counter++
    console.log(allSquares);
    console.log(squares);
    setTimeout(finishGameLoose, 10)
  } else {
    console.log(squares);

    squares.forEach(e => {
      e.innerHTML = letter
      array.pop()
      setTimeout(finishGameWin, 10)
    })

  }
  input.value = ''

  function finishGameWin() {
    if (array.length === 0) {
      alert('Вы выиграли!')
      input.setAttribute('disabled', 'disabled ')
    }
  }

  function finishGameLoose() {
    if (counter === 11) {
      alert('Вы проиграли!')
      input.setAttribute('disabled', 'disabled ')
    }
  }
}
getInputValue()


