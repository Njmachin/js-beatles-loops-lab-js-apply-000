// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  let arr = [];
 
  for(let i = 0; i < arrayMusicians.length; i++) {
    str = arrayMusicians[i] + ' plays ' + arrayInstruments[i];
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(arrayFacts) {
  arr =[];
  while(arr.length !== arrayFacts.length) {
    str = arrayFacts[i] + '!!!';
    arr.push(str);
  }
  return arr;
}

function iLoveTheBeatles(aNum) {
  arr = []; 
  if(aNum < 15) {
      do {
  num += 1;
  arr.push("I Love the Beatles!")
} while (num < 15);
  } else{
      do {
  num -= 1;
  arr.push("I Love the Beatles!")
} while (num > 15);
  }
  return arr;
}