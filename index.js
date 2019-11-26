const inquirer = require("inquirer");
let Word = require("./Word");
let guesses = 1;

let words = ["takoyaki", "teriyaki", "sushi", 
             "nigiri", "futon", "yakisoba", 
             "anime", "manga", "japan",
             "tokyo", "kyoto", "akihabara",
             "okinawa", "sakura", "naruto",
             "ichigo" ];

// Reference: https://duckduckgo.com/?q=pick+randomly+from+the+array+jvascript&atb=v141-1&ia=web
let randomWord = words[Math.floor(Math.random() * words.length)];
console.log("Random Word Picked:", randomWord);

let currentWord = new Word(randomWord);

console.log("Welcome to Word Guess. This is Japanese themed.");

function runInquirer() {
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter!"
        }
    ]).then(function (answers) {
        guesses--;
        currentWord.guessCharacter(answers.letter);
        if (guesses === 0){
            console.log("All your guesses are up. Let's see how you did!");
            currentWord.displayWord();
        }
        else {
            console.log(guesses + " guesses left.\n");
            runInquirer();
        }
        
    });
}

runInquirer();

