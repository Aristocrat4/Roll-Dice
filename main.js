const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector('.roll-dice');
const hold = document.querySelector('.hold');
const dicePic = document.querySelector('.roll-img');
const currentScoreEl = document.querySelector('.current--0');
const currentScoreElRight = document.querySelector('.current--1');
const player1 = document.querySelector('.left');
const player2 = document.querySelector('.right');
let playerCount = 1;
let currentScore = 0;

rollDice.addEventListener('click', function (){
    const randomDice = Math.trunc(Math.random()*6+1);
    dicePic.classList.remove('hidden');
    dicePic.src = `./img/dice-${randomDice}.png`
    if(randomDice !== 1 ){
        currentScore += randomDice;
        currentScoreEl.textContent = currentScore;
} else {
        currentScore = 0;
        currentScoreEl.textContent = currentScore;
        player1.style.backgroundColor = "cadetblue";
        player2.style.backgroundColor = "aqua";
}
})