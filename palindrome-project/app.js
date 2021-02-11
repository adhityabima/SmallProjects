const otherChara = /[\W_]/g;
const result = document.querySelector('#palinResult');
const submitBtn = document.querySelector('#submit');
const input = document.querySelector('#word');
const form = document.querySelector('#palinForm')
function palindrome (str){
    const wordReverse = str.replace(otherChara, '').toLowerCase().split('').reverse().join('');
    const wordOriginal = str.replace(otherChara, '').toLowerCase()
    if(wordReverse == wordOriginal){
        result.innerHTML = `Your input is a Palindrome!`
    }
    result.innerHTML = `Your input is not a Palindrome`
}

palinForm.addEventListener('submit',(e) => {
    e.preventDefault()
    palindrome(input.value)
    input.value = "";
})

palinForm.addEventListener('reset',(e) =>{
    e.preventDefault()
    input.value = ""
    result.innerHTML = ""
})

