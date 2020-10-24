,
q20: {
  _question: `// What is altered when we run the following code?

  var foo = {
    bar: function() { return this.baz; },
    baz: 1
  };

  (function(){
    alert( typeof arguments[0]());
  })(foo.bar);

  `,
  answers: [
    "undefined",
    "object",
    "number",
    "function",
  ],
  answer: 0,
  author: "kangax",
  level: 5
}
},
q21: {
  _question: `// When we run this code, what will the browser alert?

  const foo = {
    bar: function(){ return this.baz; },
    baz: 1
  }

  alert(typeof (f = foo.bar)());

    `,
  answers: [
    "undefined",
    "object",
    "number",
    "function",
  ],
  answer: 0,
  author: "kangax",
  level: 5
}
},
q22: {
  _question: `// When run, this code what will alert what?

  const f = (function f(){ return "1"; }, function g(){ return 2; })();

  alert(typeof f);

  // How much do you love alert statements?
  `,
  answers: [
    "string",
    "number",
    "function",
    "undefined",
  ],
  answer: 1,
  author: "kangax",
  level: 5
}
},
q23: {
  _question: `// What is altered when we run the following code?


  let x = 1;

  if (function f(){}) {
    x += typeof f;
  }

  alert(x);

  `,
  answers: [
    "1",
    "1function",
    "1undefined",
    "NaN",
  ],
  answer: 1,
  author: "kangax",
  level: 5
}
},
q24: {
  _question: `// When we run this code, what will the browser alert?

  var x = [typeof x, typeof y][1];

  alert(typeof typeof x);

  `,
  answers: [
    "number",
    "string",
    "undefined",
    "object",
  ],
  answer: 1,
  author: "kangax",
  level: 5
}
},
q25: {
  _question: `

  Which operator is used in JavaScript to insert special characters?

  `,
  answers: [
    "&",
    "\\",
    "-",
    "%",
  ],
  answer: ,
  author: "wscube",
  level: 5
}
},
q26: {
  _question: `

  How does JavaScript store dates in Objects of Date type?

  `,
  answers: [
    "The number of days since January 1st, 1900",
    "The number of seconds since January 1st, 1970",
    "The number of milliseconds since January 1st, 1970",
    "The number of milliseconds since May 1st, 1995",
  ],
  answer: 2,
  author: "wscube",
  level: 5
}
},
q27: {
  _question: `

  C-style block-level scoping is not supported in JavaScript

    `,
  answers: [
    "False",
    "True",
    "// False",
    "/* True */",
  ],
  answer: 1,
  author: "",
  level: 5
}
},
q28: {
  _question: `

  Which of the following is not a valid JavaScript variable name?

  `,
  answers: [
    "2javascript",
    "_java_and_script",
    "javaandscript",
    "None of the above",
  ],
  answer: 4,
  author: "",
  level: 5
}
},
q29: {
  _question: `

  Java Script entities start with a/an ____________ and end with a/an ______________

  `,
  answers: [
    "Semicolon, colon",
    "Semicolon, ampersand",
    "Ampersand, colon",
    "Ampersand, semicolon",
  ],
  answer: ,
  author: "",
  level: 5
}
}