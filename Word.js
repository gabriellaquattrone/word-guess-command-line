let Letter = require('./Letter');

let Word = function (randomWord) {
    this.word = [];
    this.empty = [];
    for (let i = 0; i < randomWord.length; i++) {

        // We need to create a new Letter object for the letter to manipulate on.
        this.letter = new Letter(randomWord[i]);

        // Let's push each letter to the word array.
        this.word.push(this.letter.singleLetter.value);

        this.empty.push('_');

        // This is debugging to check that the letter appears.
        // console.log("Random Letter:", randomWord[i]);
    }

    // This is debugging to check that the word is appearing.
    this.displayWord = function() {
        // Reference: https://stackoverflow.com/questions/5788741/remove-commas-from-the-string-using-javascript
        this.word = this.word.join(',').replace(/,/g, '');
        console.log("Word: ", this.word);
    }

    this.guessCharacter = function(character){
        for (let i = 0; i < this.word.length; i++){
            console.log(this.letter.singleLetter.value);
            if (character === this.letter.singleLetter.value){
                this.letter.singleLetter.isRevealed = true;
                this.empty[i] = this.letter.returnValue();
                console.log("Correct Guess!", this.empty);
            }
        }
    }
  
}
module.exports = Word;