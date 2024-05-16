/*
let score = {

wins:0,
losses:0,
ties:0

}
*/


let score = JSON.parse(localStorage.getItem('points')); 

console.log(localStorage.getItem('points'));

console.log(JSON.parse(localStorage.getItem('points')));

console.log(score);

if(score === null){

    score = {

wins:0,
losses:0,
ties:0

}



}

updateScoreElement();

console.log(score);

console.log(localStorage.getItem('points'));

console.log(JSON.parse(localStorage.getItem('points')));

function resetScore(){

score.wins=0;
score.losses=0;
score.ties=0;

localStorage.removeItem('points');  

updateScoreElement();

}

 function randomGenerator(){

  let computerMove = Math.random();

  console.log(computerMove);

    if (computerMove >= 0 && computerMove < 1/3 ) {

computerMove = 'rock';

    }

else if (computerMove >=1/3 && computerMove < 2/3){

computerMove = 'paper';

}

else if (computerMove>=2/3 && computerMove <=1){

computerMove =  'scissor';


} 

console.log(computerMove);

return computerMove;


 }

function  playGame(playerMove){

   

let computerMove = randomGenerator();



let result = 'result';

 if(playerMove=== 'rock'){

    if(computerMove === 'rock'){

result='tie';

    }

else if(computerMove ==='paper'){

result='loss';

}

else if (computerMove ==='scissor'){

result='win';
 
}

}


else if(playerMove === 'paper')        {

if(computerMove === 'paper'){

result='tie';

}

else if(computerMove ==='scissor'){

result='loss';

}

else if (computerMove ==='rock'){

result='win';

}



 }

 else if (playerMove === 'scissor'){

if(computerMove === 'scissor'){

result='tie';

}

else if(computerMove ==='rock'){

result='loss';

}

else if (computerMove ==='paper'){

result='win';

}



 }

 if (result === 'win')
 {
    //score.wins = (wins+1);
    score.wins += 1;
 }

 else if (result==='loss')
 {
    //score.losses = (losses+1);
    score.losses += 1;
 }

 else if (result==='tie')
 {
    //score.loose = (ties+1);
    score.ties += 1;
 }

 
localStorage.setItem('points',JSON.stringify(score));

updateScoreElement();


document.querySelector('.js-result').innerHTML =`You ${result}`

document.querySelector('.js-moves').innerHTML=` you <img src="imagerock/${playerMove}-emoji.png" alt="rock" class="move-icon">
    <img src="imagerock/${computerMove}-emoji.png" alt="scissor" class="move-icon">
    computer`


}

function updateScoreElement(){



    document.querySelector('.js-score').innerHTML = `wins:${score.wins}  looses:${score.losses}  ties:${score.ties}`



}