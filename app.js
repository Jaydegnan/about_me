'use strict';

var questionOne = prompt('Have I been to disneyland?');
if (questionOne.toLowerCase() === 'yes' || questionOne.toLowerCase() === 'y') {
  alert ('Its the happiest place on earth!');
  console.log(questionOne);
} else if (questionOne.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
  alert ('ha ha youre wrong I have and it was magical');

};
var questionTwo = prompt('Do I have 6 siblings?');
if (questionTwo.toLowerCase() === 'yes' || questionTwo.toLowerCase() === 'y') {
  alert ('Unfortunately I only have 2');
} else if (questionTwo.toLowerCase() === 'no' || questionOne.toLowerCase() === 'n') {
  alert ('You know me so well!');
};
var questionThree = prompt('Am I african american?');
if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y') {
  alert ('Might wanna get your eyes checked!');
} else if (questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n') {
  alert ('Nothing gets by you!');

};

var questionFour = prompt('Do I like fishsticks?');
if (questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y') {
  alert ('love em!');
} else if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n') {
  alert ('Who doesnt like fishsticks?!');

};

var questionFive = prompt('Do I deserve a lump of coal for christmas?');
if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y') {
  alert ('absolutely not you jerk!');
} else if (questionFive.toLowerCase() === 'no' || questionFive.toLowerCase() === 'n') {
  alert ('Hey I like you!');

};


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
