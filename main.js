const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector('.roll-dice');
const hold = document.querySelector('.hold');
const dicePic = document.querySelector('.roll-img');
const player1Score = document.querySelector('.current--0');
const player2Score = document.querySelector('.current--1');
let playerCount = 0;
let currentScore = 0;
let totalScore = [0, 0];
document.querySelector(`.player--${playerCount}`).style.backgroundColor = "aqua";

rollDice.addEventListener('click', function (){
    const randomDice = Math.trunc(Math.random()*6+1);
    dicePic.classList.remove('hidden');
    dicePic.src = `./img/dice-${randomDice}.png`
    if(randomDice !== 1 ){
        document.querySelector(`.player--${playerCount}`).style.backgroundColor = "aqua";
        currentScore += randomDice;
        document.querySelector(`.current--${playerCount}`).textContent = currentScore;
} else {
        document.querySelector(`.player--${playerCount}`).style.backgroundColor = "cadetblue";
        currentScore = 0;
        document.querySelector(`.current--${playerCount}`).textContent = currentScore;
        playerCount = playerCount === 0 ? 1 : 0;
        document.querySelector(`.current--${playerCount}`).textContent = currentScore;
        document.querySelector(`.player--${playerCount}`).style.backgroundColor = "aqua";
        
}
})
  hold.addEventListener('click', function(){
        document.querySelector(`.player--${playerCount}`).style.backgroundColor = "cadetblue";
        totalScore[playerCount] += currentScore;
        document.querySelector(`.total-score--${playerCount}`).textContent = totalScore[playerCount];
        currentScore = 0;
        document.querySelector(`.current--${playerCount}`).textContent = currentScore;
        playerCount = playerCount === 0 ? 1 : 0;
        document.querySelector(`.player--${playerCount}`).style.backgroundColor = "aqua";

  })
  newGame.addEventListener('click', function() {
          totalScore = [0, 0];
          document.querySelector('.total-score--0').textContent = 0;
          document.querySelector('.total-score--1').textContent = 0;
          currentScore = 0;
          player1Score.textContent = currentScore;
          player2Score.textContent = currentScore;
          document.querySelector(`.player--${playerCount}`).style.backgroundColor = "cadetblue";
          playerCount = 0;
          document.querySelector(`.player--${playerCount}`).style.backgroundColor = "aqua";
  })