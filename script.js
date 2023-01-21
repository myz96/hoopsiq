// import { playerList } from "./playerList"

// Set variables
let randIndex = parseInt(Math.random() * validWords.length)
let wordleWord = validWords[randIndex].toLowerCase() // Select random word to guess
wordleWordArr = wordleWord.split('')
console.log(wordleWordArr)
let typedLetterCount = 0 // Col index of typed letters
let rowCount = 0 // Row index of typed words
let checkLetterCount = 0 // Letter index of word checking

// Function that checks letters if they are correct, partially correct or wrong
const checkLetters = () => {
    let letterRows = document.querySelectorAll('.letter-row')
    let letterTiles = letterRows[rowCount].querySelectorAll('.letter-tile')
    for (let letterTile of letterTiles) {
        if (checkIfCorrect(letterTile.textContent, checkLetterCount)) {
            letterTile.style.backgroundColor = '#548D4E'
        } else if (checkIfPartiallyCorrect(letterTile.textContent, checkLetterCount)) {
            letterTile.style.backgroundColor = '#B69F3B'
        } else {
            letterTile.style.backgroundColor = '#3A3A3B'
        }
        checkLetterCount ++
    }
    rowCount ++
    checkLetterCount -= 5
}

// Function that checks if 5 letter word is correct
const checkWord = () => {
    let letterRows = document.querySelectorAll('.letter-row')
    let letterTiles = letterRows[rowCount].querySelectorAll('.letter-tile')
    let typedAnswer = ``
    for (let letterTile of letterTiles) 
        typedAnswer += letterTile.textContent
    if (typedAnswer == wordleWord)
        alert('You win!')
}

// Function to check if letter is correct (i.e letter appears in the word and is in the right position)
const checkIfCorrect = (letter, checkLetterCount) => (letter === wordleWordArr[checkLetterCount]) ? true: false

// Function to check if letter is partially correct (i.e letter appears in the word but is not in the right position)
const checkIfPartiallyCorrect = (letter, checkLetterCount) => (wordleWordArr.indexOf(letter) !== -1 && wordleWordArr.indexOf(letter) !== checkLetterCount) ? true: false

// Input key input into empty letter tiles
// Input key documentation here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
document.addEventListener('keydown', (event) => {
    // Capture key input
    let keyInput = event.key    

    // Find next empty div
    let letterTiles = document.querySelectorAll('.letter-tile')
    for (let letterTile of letterTiles) {
        if (!letterTile.textContent) {
            // Input into empty div
            letterTile.textContent = keyInput
            typedLetterCount ++
            console.log(typedLetterCount)
            break
        }
    }

    // Check if word is correct once a row is filled
    if (typedLetterCount === 5) {
        // Check individual letters
        checkLetters()
        // Check if word is correct
        checkWord()        
        typedLetterCount -= 5
    }
})



