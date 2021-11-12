const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector('.roll-dice');
const hold = document.querySelector('.hold');
const dicePic = document.querySelector('.dice-img');
const dicePic2 = document.querySelector('.dice-img-2');
const dicePic3 = document.querySelector('.dice-img-3');
const dicePic4 = document.querySelector('.dice-img-4');
const dicePic5 = document.querySelector('.dice-img-5');
const dicePic6 = document.querySelector('.dice-img-6');

let firstScore = document.querySelector('.score').innerHTML;
let playerCount = 1;
let diceImg = function () {
    let randomNum = Math.trunc(Math.random() * 6 + 1);
    if(randomNum == 1){
        dicePic.classList.remove('hidden');
        dicePic2.classList.add('hidden');  
        dicePic3.classList.add('hidden');  
        dicePic4.classList.add('hidden');  
        dicePic5.classList.add('hidden');  
        dicePic6.classList.add('hidden'); 

        return 1;
    } else if (randomNum == 2){
        dicePic2.classList.remove('hidden');
        dicePic.classList.add('hidden');  
        dicePic3.classList.add('hidden');  
        dicePic4.classList.add('hidden');  
        dicePic5.classList.add('hidden');  
        dicePic6.classList.add('hidden'); 
        firstScore++;
        return 2;
    } else if (randomNum==3){
        dicePic3.classList.remove('hidden');
        dicePic2.classList.add('hidden');  
        dicePic.classList.add('hidden');  
        dicePic4.classList.add('hidden');  
        dicePic5.classList.add('hidden');  
        dicePic6.classList.add('hidden'); 
        firstScore++;
        return 3;
    } else if (randomNum ==4){
        dicePic2.classList.add('hidden');  
        dicePic3.classList.add('hidden');  
        dicePic.classList.add('hidden');  
        dicePic5.classList.add('hidden');  
        dicePic6.classList.add('hidden'); 
        dicePic4.classList.remove('hidden');
        return 4;
    }else if (randomNum==5) {
        dicePic2.classList.add('hidden');  
        dicePic3.classList.add('hidden');  
        dicePic4.classList.add('hidden');  
        dicePic.classList.add('hidden');  
        dicePic6.classList.add('hidden'); 
        dicePic5.classList.remove('hidden');
        return 5;
    } else if (randomNum ==6){
        dicePic2.classList.add('hidden');  
        dicePic3.classList.add('hidden');  
        dicePic4.classList.add('hidden');  
        dicePic5.classList.add('hidden');  
        dicePic.classList.add('hidden'); 
        dicePic6.classList.remove('hidden');
        return 6;
    }
}
rollDice.addEventListener('click', function (){
    console.log(diceImg());
    // while (playerCount % 2 === 1){
        // if(diceImg === 1 ){
        //     dicePic.classList.remove('hidden');
        //     playerCount++;
        // } else {
        //     dicePic.classList.add('hidden');
        // }
    // }
})