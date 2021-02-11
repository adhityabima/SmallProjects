const otherChara = /[\W_]/g;
function palindrome (str){
    const wordReverse = str.replace(otherChara, '').toLowerCase().split('').reverse().join('');
    const wordOriginal = str.replace(otherChara, '').toLowerCase()
    if(wordReverse == wordOriginal){
        return true;
    }
    return false;
}
