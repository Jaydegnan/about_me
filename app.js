'use strict';

function checkYes(answer) {
  if (answer === 'yes' || answer === 'y') {
    alert('You got it ' + userName);
    scoreKeeper++;
    console.log(answer, 'correct');
    console.log('score', scoreKeeper);
  } else {
    alert('Better luck next time, ' + userName + '...');
    console.log(answer, 'incorrect');
  }
}

function checkNo(answer) {
  if (answer === 'no' || answer === 'n') {
    alert('You got it ' + userName);
    console.log(answer, 'correct');
    scoreKeeper++;
    console.log('score', scoreKeeper);
  } else {
    alert('Try harder next time, ' + userName + '!');
    console.log(answer, 'incorrect');
  }
}

var scoreKeeper = 0;
var userName = prompt('what is your name?');
alert ('what a pretty name!');
var questionOne = prompt('Have I been to disneyworld?').toLowerCase();
checkYes(questionOne);

var questionTwo = prompt('Do I have 6 siblings?').toLowerCase();
checkNo(questionTwo);

var questionThree = prompt('Am I african american?').toLowerCase();
checkNo(questionThree);

var questionFour = prompt('Do I like fishsticks?').toLowerCase();
checkYes(questionFour);

var questionFive = prompt('Do I deserve a lump of coal for christmas?').toLowerCase();
checkNo(questionFive);

var count = 0;
var myNum = 7;
while (count < 4) {
  var questionSix = prompt('What number am I thinking between 1 and 10');
  console.log(questionSix);
  if (questionSix > myNum) {
    alert ('your guess is too high! try again');
    count++;
    console.log(count);
    if (count === 4) {
      alert('You have run out of guesses!');
    }
  } else if (questionSix < myNum) {
    alert ('your guess is too low! try again');
    count++;
    if (count === 4) {
      alert('You have run out of guesses!');
    }
  } else {
    alert ('that is correct ' + userName + ' way to go!');
    console.log('question six correct');
    count = 4;
    scoreKeeper++;
  }
}

var gameAnswers = ['league of legends', 'zelda', 'rocket league' , 'super smash brothers' , 'call of duty'];

for(var x = 0; x <6; x++) {
  var questionSeven = prompt('What are my favorite video games? You have ' + (6 - x) + ' tries to get one!').toLowerCase();
  for (var i = 0; i <= 4; i++) {
    if (questionSeven === gameAnswers[i]) {
      alert('YIPPEE FOR YOU, ' + userName + '. Here\'s all the possible answers: ' + gameAnswers[0] + ', ' + gameAnswers[1] + ', ' + gameAnswers[2] + ', ' + gameAnswers[3] + ', and ' + gameAnswers[4]);
      x = 6;
      console.log('question seven correct');
      scoreKeeper++;
    }
  }
  if (x === 5) {
    alert('no more tries, you fail :( but here\'s all the possible answers: ' + gameAnswers[0] + ', ' + gameAnswers[1] + ', ' + gameAnswers[2] + ', ' + gameAnswers[3] + ', and ' + gameAnswers[4]);
  } else if (x < 5) {
    alert('not even close bruh, try again');
  }

}
alert('You got ' + scoreKeeper + ' questions right, not bad ' + userName + '!');


// var kids = prompt('how many kids do you have?');
// console.log('number of kids:', kids);
//
// var hats = prompt('how many hats do you own?');
// console.log('number of hats:', hats);
//
// if (kids === '4' || kids === '3') {
//   alert('nice job - u right');
// }
//
// if (hats === '3' && kids === '4') {
//   alert('nice job again - u rule');
// }
