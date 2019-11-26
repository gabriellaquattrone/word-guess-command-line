
let Letter = function (letter) {
    this.singleLetter = {value: letter, isRevealed: false};
    this.returnValue = function() {
        if (singleLetter.isRevealed){
            return singleLetter.value;
        }
        else {
            return "_";
        }
    }
    this.checkCharacter = function(characterGuess) {
        if (characterGuess === singleLetter.value){
            singleLetter.isRevealed = true;
        }
    }
}
module.exports = Letter;