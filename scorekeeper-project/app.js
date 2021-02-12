const p1TotalScore = document.querySelector('#p1TotalScore');
const p2TotalScore = document.querySelector('#p2TotalScore');
const addP1 = document.querySelector('#addP1');
const addP2 = document.querySelector('#addP2');
const reset = document.querySelector('#reset');
const selectBestOf = document.querySelector('#selectBestOf');
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;

reset.addEventListener('click', () => {
    p1TotalScore.innerHTML = "0"
    p1Score = 0
    p2TotalScore.innerHTML = "0"
    p2Score = 0
    isGameOver = false;
})


addP1.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        p1TotalScore.innerHTML = p1Score;
        if (p1Score == 21) {
            isGameOver = true;
        }
    }
});

addP2.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        p2TotalScore.innerHTML = p2Score;
        if (p2Score == 21) {
            isGameOver = true;
        }
    }
});

