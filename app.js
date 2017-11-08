'use strict';

var questionOne = prompt('Have I been to disneyworld?');
if (questionOne.toLowerCase() === 'yes' || questionOne.toLowerCase() === 'y') {
  alert ('Its the happiest place on earth!');
  console.log('question one correct');
} else if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
  alert ('Actually I have and it was magical');
  console.log('question one incorrect' );
}
var questionTwo = prompt('Do I have 6 siblings?');
if (questionTwo.toLowerCase() === 'yes' || questionTwo.toLowerCase() === 'y') {
  alert ('Unfortunately I only have 2');
  console.log('question two incorrect');
} else if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n') {
  alert ('You know me so well!');
  console.log('question two correct');
}
var questionThree = prompt('Am I african american?');
if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y') {
  alert ('Might wanna get your eyes checked!');
  console.log('question three incorrect');
} else if (questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n') {
  alert ('Nothing gets by you!');
  console.log('question three correct');

}

var questionFour = prompt('Do I like fishsticks?');
if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
  alert ('love em!');
  console.log('question four correct');
} else if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n') {
  alert ('Who doesnt like fishsticks?!');
  console.log('question four incorrect');
}

var questionFive = prompt('Do I deserve a lump of coal for christmas?');
if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
  alert ('absolutely not you jerk!');
  console.log('question five incorrect');
} else if (questionFive.toLowerCase() === 'no' || questionFive.toLowerCase() === 'n') {
  alert ('Hey I like you!');
  console.log('question question five  correct');
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
