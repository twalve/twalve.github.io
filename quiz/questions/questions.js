const questions = {
  q0: {
    _question: "What object do you use to interact with the DOM from JavaScript?",
    answers: [
      "$",
      "page",
      "body",
      "document"
    ],
    answer: 4,
    author: "aaronpowell",
    level: 1
  },
  q1: {
    _question: "What are the possible states of a Promise?",
    answers: [
      "pending, fulfilled, rejected",
      "waiting, finished",
      "pending, complete, error",
      "pending, fulfilled"
    ],
    answer: 1,
    author: "aaronpowell",
    level: 2
  },
  q2: {
    _question: "What property is used to extend the String prototype for all instances of String?",
    answers: [
      "prototype",
      "__proto__",
      "func",
      "extend",
    ],
    answer: 1,
    author: "aaronpowell",
    level: 3
  },
  q3: {
    _question: `What will be the result of running the following?

let behaviors = {
  getFullName: function() { return this.firstName + ' ' + this.lastName }
}
let p1 = {
  firstName: 'Pat',
  lastName: 'Jones'
}
Object.setPrototypeOf(p1, behaviors)
console.log(p1.getFullName())`,
    answers: [
      "The console will log out 'Pat Jones'",
      "There will be a runtime error because getFullName doesn't exist for the p1 instance",
      "There will be a runtime error because this will be undefined in getFullName",
      "The console will log out undefined",
    ],
    answer: 1,
    author: "aaronpowell",
    level: 4
  },
  q4: {
    _question: `The following native JavaScript import is failing on the myApp() line (myApp is undefined):

import myApp, { MY_CONSTANT } from './my-app.js'
myApp()

What is likely wrong with the import?`,
    answers: [
      "my-app.js doesn't have a default function",
      "my-app.js is missing a myApp function",
      "The myApp function in my-app.js isn't being exported",
      "The default function is marked as an async function",
    ],
    answer: 1,
    author: "aaronpowell",
    level: 5
  },
  q5: {
    _question: "Which method do we use to execute a function after a certain amount of time?",
    answers: [
      "setTimeout",
      "setTimer",
      "setClock",
      "startClock"
    ],
    answer: 1,
    author: "Raathigesh",
    level: 1
  },
  q6: {
    _question: "What is the name of the commitee which works on upcoming JavaScript features?",
    answers: [
      "AC78",
      "TC39",
      "ThePanelOfUndefined",
      "NextGenJS"
    ],
    answer: 2,
    author: "Raathigesh",
    level: 2
  },
  q7: {
    _question: `What does gets printed to the console?
Promise.resolve(5)
  .then(() => {throw "something went wrong"})
  .catch(() => console.log('opps'))
  .then(() => console.log("hi"))`,
    answers: [
      "opps",
      "hi",
      "opps and hi",
      "none",
    ],
    answer: 3,
    author: "Raathigesh",
    level: 3
  },
  q8: {
    _question: `I have two event handlers attached to an element's click event.
When the first handler is called, I want to prevent the second handler from executing.
Which method should I call on the event?`,
    answers: [
      "stopPropagation",
      "stopImmediatePropagation",
      "stopSibilingPropagation",
      "stopPriorityPropagation",
    ],
    answer: 2,
    author: "Raathigesh",
    level: 4
  },
  q9: {
    _question: `What gets logged to the console?

function* generateMeStuff(input) {
  const a = yield input * 2;
  const b = a + 4;
  yield b;
}

const generator = generateMeStuff(10);
console.log(generator.next(5).value)
console.log(generator.next(50).value)`,
    answers: [
      "20 and 54",
      "10 and 14",
      "10 and 24",
      "F**k generators!",
    ],
    answer: 1,
    author: "Raathigesh",
    level: 5
  }
}