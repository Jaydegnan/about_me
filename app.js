'use strict';

var scoreKeeper = 0;
var userName = prompt('what is your name?');

function askQuestion (string){
  var response = prompt(string).toLowerCase();
  return response;
}
var trueFalse = [true, false, false, true, false];
var fiveQuestions = ['Have I been to disneyworld?'];
fiveQuestions.push('Do I have 6 siblings?');
fiveQuestions.push('Am I african american?');
fiveQuestions.push('Do I like fishsticks?');
fiveQuestions.push('Do I deserve a lump of coal for christmas?');
var answerCorrectMessage = ['Its the happiest place on earth!'];
answerCorrectMessage.push('You know me so well!');
answerCorrectMessage.push('Nothing gets by you ' + userName + '!');
answerCorrectMessage.push('love em!');
answerCorrectMessage.push('Hey I like you !');
var answerIncorrectMessage = ['Actually I have ' + userName + ' and it was magical'];
answerIncorrectMessage.push('Unfortunately I only have 2');
answerIncorrectMessage.push('Might wanna get your eyes checked ' + userName + '!');
answerIncorrectMessage.push('Who doesnt like fishsticks?!');
answerIncorrectMessage.push('absolutely not you jerk!');

//function constructQuestions (truth, ask, correct, fail){
//  trueFalse.push (truth);
//  fiveQuestion.push (ask);
//  answerCorrectMessage.push(correct);
//  answerIncorrectMessage.push(fail);
//}



function yesOrNo (answer) {
  if ( (answer === 'yes' || answer === 'y') ){
    answer = true;
  }
  else if ((answer === 'no' || answer === 'n') ){
    answer = false;
  } else {
    answer = 'invalid input';
  }
  console.log ('interpreted input', answer);
  return answer;
}

for (var i = 0; i < 5; i++){
  var userAnswer = yesOrNo(askQuestion(fiveQuestions[i]));
  if (userAnswer === trueFalse[i]){
    console.log('question', i, 'correct');
    scoreKeeper++;
    alert (answerCorrectMessage[i]);
  } else if (userAnswer !== trueFalse[i]){
    console.log('question', i, 'incorrect');
    alert (answerIncorrectMessage[i]);
  }
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
    alert ('that is correct ' + userName + ' way to go!');
    console.log('question six correct');
    scoreKeeper++;
    break;
  }
}

var gameAnswers = ['league of legends', 'zelda', 'rocket league' , 'super smash brothers' , 'call of duty'];

for(var x = 0; x <6; x++) {
  var questionSeven = prompt('What are my favorite video games? You have ' + (6 - x) + ' tries to get one!').toLowerCase();
  for ( i = 0; i < gameAnswers.length; i++) {
    if (questionSeven === gameAnswers[i]) {
      alert('YIPPEE FOR YOU, ' + userName + '. Here\'s all the possible answers: ' + gameAnswers[0] + ', ' + gameAnswers[1] + ', ' + gameAnswers[2] + ', ' + gameAnswers[3] + ', and ' + gameAnswers[4]);
      console.log('question seven correct');
      scoreKeeper++;
      break;
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
