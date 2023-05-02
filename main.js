
let number = parseInt(prompt('몇 명이 참가하나요?'), 10)
if(number){
    let inputArea = document.querySelector('#input-area')
    let inputButton = document.querySelector('#input-button')
    let Order = document.querySelector('#order')
    let Word = document.querySelector('#word')

    let word;
    let newWord;

    const PLAY = () => {
        if(!word || word[word.length - 1] === newWord[0] && newWord.length === 3) {
            word = newWord
            Word.textContent = word
            const ORDER = Number(Order.textContent)
            if(ORDER + 1 > number) {
                Order.textContent = 1
            } else{
                Order.textContent = ORDER + 1
            }
        } else {
            alert('올바르지 않은 단어입니다.')
        }
        inputArea.value = '';
        inputArea.focus();
    }

    const onInput = (event) => {
        newWord = event.target.value;
    }

    inputButton.addEventListener('click', PLAY)
    inputArea.addEventListener('input', onInput)
    inputArea.addEventListener('keydown', function(event){
        if(event.keyCode == 13){
            PLAY()
        }
    })
}   