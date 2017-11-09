'use strict';

var userName = prompt('what is your name?')

var questionOne = prompt('Have I been to disneyworld?').toLowerCase();
if (questionOne === 'yes' || questionOne === 'y') {
  alert ('Its the happiest place on earth!');
  console.log('question one correct');
} else if (questionOne === 'no' || questionOne === 'n') {
  alert ('Actually I have and it was magical');
  console.log('question one incorrect' );
}
var questionTwo = prompt('Do I have 6 siblings?').toLowerCase();
if (questionTwo === 'yes' || questionTwo === 'y') {
  alert ('Unfortunately I only have 2');
  console.log('question two incorrect');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert ('You know me so well!');
  console.log('question two correct');
}
var questionThree = prompt('Am I african american?').toLowerCase();
if (questionThree === 'yes' || questionThree === 'y') {
  alert ('Might wanna get your eyes checked!');
  console.log('question three incorrect');
} else if (questionThree === 'no' || questionThree === 'n') {
  alert ('Nothing gets by you!');
  console.log('question three correct');

}

var questionFour = prompt('Do I like fishsticks?').toLowerCase();
if (questionFour === 'yes' || questionFour === 'y') {
  alert ('love em!');
  console.log('question four correct');
} else if (questionFour === 'no' || questionFour === 'n') {
  alert ('Who doesnt like fishsticks?!');
  console.log('question four incorrect');
}

var questionFive = prompt('Do I deserve a lump of coal for christmas?').toLowerCase();
if (questionFive === 'yes' || questionFive === 'y') {
  alert ('absolutely not you jerk!');
  console.log('question five incorrect');
} else if (questionFive === 'no' || questionFive === 'n') {
  alert ('Hey I like you!');
  console.log('question question five  correct');
}

var count = 0;
var myNum = 7;
while (count < 4) {
  var questionSix = prompt('What number am I thinking between 1 and 10');
  if (questionSix > myNum) {
    alert ('your guess is too high! try again');
    count++;
  } else if (questionSix < myNum) {
    alert ('your guess is too low! try again');
    count++;
  } else {
    alert ('that is correct! way to go');
    count = 4;
  }
}

var gameAnswers = ['league of legends', 'zelda', 'rocket league' , 'super smash brothers' , 'call of duty'];
var questionSeven = prompt('What are my favorite video games?').toLowerCase();
for (var i = 0; i <= 4; i++) {
  if (questionSeven === gameAnswers[i]) {
    alert('YIPPEE FOR YOU!, ' + userName + '.');
  }
}
// if ((friend == 'y' || houseIsland === 'n') || (friend === 'yes' || houseIsland === 'no')) {
// alert
// }


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
