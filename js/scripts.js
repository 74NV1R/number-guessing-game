let w1 = document.querySelector('#w1')
let feedback = document.querySelector("#w2")
let startBtn = document.querySelector('#start')

function startGame() {

    let correct_ans = Math.ceil(Math.random() * 10)

    let textfield = document.createElement('input')
    textfield.type = 'number'
    textfield.id = 'userInput'

    let inputBtn = document.createElement('button')
    inputBtn.id = 'input'
    inputBtn.innerText = 'Submit'

    w1.append(textfield)
    w1.append(inputBtn)
    startBtn.remove()

    let attempts = 0



    inputBtn.addEventListener('click', function () {
        let userGuess = parseInt(document.querySelector('#userInput').value)
        document.querySelector('#userInput').value = ''
        //console.log(userGuess)

        if (attempts < 3) {
            if (userGuess == correct_ans) {
                feedback.innerText = 'Correct'
                w1.remove()
                resetGame()
            }
            else if (userGuess > correct_ans) {
                feedback.innerText = 'Try smaller number'
                feedback.innerText += ` ${3 - attempts - 1} attempts left!`
            }
            else if (userGuess < correct_ans) {
                feedback.innerText = 'Try bigger number'
                feedback.innerText += ` ${3 - attempts - 1} attempts left!`
            }
            attempts++
            if (attempts == 3 && userGuess != correct_ans) {
                feedback.innerText = `Game over! correct answer was ${correct_ans}`
                w1.remove()
                resetGame()
            }
        }
    })

}

function resetGame() {
    let gameWindow = document.querySelector('#gameWindow')
    let restartBtn = document.createElement('button')
    restartBtn.innerText = 'Restart!'
    restartBtn.addEventListener('click', function () {
        location.reload()
    })

    gameWindow.append(restartBtn)

}