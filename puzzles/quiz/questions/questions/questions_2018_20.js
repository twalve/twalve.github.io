,
q10: {
  _question: `// What is altered when we run the following code?

  if (!("a" in window)) {
    var a = 1;
  }
  alert(a);`,
  answers: [
    "a",
    "1",
    "undefined",
    "window",
  ],
  answer: 2,
  author: "DmitryBaranovskiy",
  level: 5
}
},
q11: {
  _question: `// When we run this code, what will the browser alert?

  var a = 1,
  b = function a(x) {
    x && a(--x);
  };

  alert(a);
    `,
  answers: [
    "false",
    "1",
    "undefined",
    "0",
  ],
  answer: 1,
  author: "DmitryBaranovskiy",
  level: 1
}
},
q12: {
  _question: `// When run, this code what will alert what?

  function a(x) {
    return x * 2;
  }
  var a;
  alert(a);`,
  answers: [
    "2",
    "a",
    "undefined",
    "function a(x) { return x * 2; }",
  ],
  answer: 3,
  author: "DmitryBaranovskiy",
  level: 3
}
},
q13: {
  _question: `// What is altered when we run the following code?

  function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
  }
  b(1, 2, 3);
    `,
  answers: [
    "1",
    "2",
    "3",
    "10",
  ],
  answer: ,
  author: "DmitryBaranovskiy",
  level: 4
}
},
q14: {
  _question: `// When we run this code, what will the browser alert?

  function a() {
    alert(this);
  }
  a.call(null);

    `,
  answers: [
    "null",
    "undefined",
    "window",
    "[object Window]",
  ],
  answer: 4,
  author: "DmitryBaranovskiy",
  level: 4
}
},
q15: {
  _question: `// When we run this code, what will the browser alert?

  (function(){
    alert(typeof arguments)
  })();

    `,
  answers: [
    "array",
    "object",
    "undefined",
    "Uncaught SyntaxError",
  ],
  answer: 1,
  author: "kangax",
  level: 5
}
},
q16: {
  _question: `// When run, this code what will alert what?

  var f = function g(){
    return 23;
  };

  alert( typeof g() )

  `,
  answers: [
    "number",
    "undefined",
    "Uncaught ReferenceError: g is not defined",
    "function",
  ],
  answer: 1,
  author: "kangax",
  level: 5
}
},
q17: {
  _question: `// What is altered when we run the following code?

  const deleteThenReturn = function (x) {
    delete x;
    return x;
  }

  alert(deleteThenReturn(1));

  `,
  answers: [
    "1",
    "null",
    "undefined",
    "Error",
  ],
  answer: ,
  author: "kangax",
  level: 5
}
},
q18: {
  _question: `// When run, this code what will alert what?

  let y = 1, x = y = typeof x;

  alert(x);

  `,
  answers: [
    "1",
    "undefined",
    "number",
    "Uncaught ReferenceError: x is not defined",
  ],
  answer: 3,
  author: "kangax",
  level: 5
}
},
q19: {
  _question: `// When we run this code, what will the browser alert?

  (function f(f){
    alert(typeof f());
  })(function(){ return 1; });

    `,
  answers: [
    "1",
    "undefined",
    "number",
    "Uncaught ReferenceError: x is not defined",
  ],
  answer: 2,
  author: "kangax",
  level: 5
}
}