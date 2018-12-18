,
q30: {
  _question: `// Are both of the alert dialogs the same?

  function bar() {
    return foo;
    foo = 10;
    function foo() {}
    let foo = '11';
  }

  alert(typeof bar());
  alert(typeof bar);

  `,
  answers: [
    "Yes",
    "No",
    "Depends on the browser",
    "Depends on the order they execute",
  ],
  answer: ,
  author: "davidshariff",
  level: 3
}
},
q31: {
  _question: `// What is the result?

  "1" - - "1";

    `,
  answers: [
    "0",
    "2",
    "11",
    "\"11\"",
  ],
  answer: 1,
  author: "davidshariff",
  level: 5
}
},
q32: {
  _question: `// What is the order of values alerted?

    var x = 3;

    var foo = {
        x: 2,
        baz: {
            x: 1,
            bar: function() {
                return this.x;
            }
        }
    }

    var go = foo.baz.bar;

    alert(go());
    alert(foo.baz.bar());

    `,
  answers: [
    "3, 1",
    "3, 2",
    "2, 3",
    "1, 3",
  ],
  answer: 0,
  author: "davidshariff",
  level: 5
}
},
q33: {
  _question: `// What is alerted?

  console.log([] + [] + 'foo'.split(''));

  `,
  answers: [
    "\"f, o, o\"",
    "Nothing",
    "[\"f\", \"o\", \"o\"]",
    "[][][\"f\", \"o\", \"o\"]",
  ],
  answer: 1,
  author: "davidshariff",
  level: 1
}
},
q34: {
  _question: `// What is logged to the console?

  console.log([] + [] + 'foo'.split(''));

  `,
  answers: [
    "\"f, o, o\"",
    "Nothing",
    "[\"f\", \"o\", \"o\"]",
    "[][][\"f\", \"o\", \"o\"]",
  ],
  answer: 1,
  author: "davidshariff",
  level: 3
}
},
q35: {
  _question: `// What is logged to the console?

  console.log(new Array(5).toString(););

  `,
  answers: [
    "Uncaught SyntaxError: missing ) after argument list",
    "\",,,,\"",
    "[]",
    "\"[]\"",
  ],
  answer: 0,
  author: "davidshariff",
  level: 5
}
},
q36: {
  _question: `// What is printed in the console?

  const myArr = ['foo', 'bar', 'baz'];
  myArr.length = 0;
  myArr.push('bin');
  console.log(myArr);


  ['foo', 'bar', 'baz']
  ['foo', 'bar', 'baz', 'bin']
  ['bin', 'foo', 'bar', 'baz']
  ['bin']

    `,
  answers: [
    "['foo', 'bar', 'baz']",
    "['foo', 'bar', 'baz', 'bin']",
    "['bin', 'foo', 'bar', 'baz']",
    "['bin']",
  ],
  answer: 4,
  author: "davidshariff",
  level: 5
}
},
q37: {
  _question: `// What is printed in the console?

    const x = 0;
    function foo() {
        x++;
        this.x = x;
        return foo;
    }
    const bar = new new foo;
    console.log(bar.x);

    `,
  answers: [
    "0",
    "1",
    "undefined",
    "Type Error",
  ],
  answer: 2,
  author: "davidshariff",
  level: 5
}
},
q38: {
  _question: `// What is printed in the console?

    let bar = 1,
        foo = {};

    foo: {
        bar: 2;
        baz: ++bar;
    };

    console.log(foo.baz + foo.bar + bar);

  `,
  answers: [
    "5",
    "TypeError",
    "undefined",
    "NaN",
  ],
  answer: 3,
  author: "davidshariff",
  level: 5
}
},
q39: {
  _question: `// What value is alerted?

    function foo(a, b) {
        arguments[1] = 2;
        alert(b);
    }
    foo(1);

    `,
  answers: [
    "1",
    "2",
    "undefined",
    "ReferenceError",
  ],
  answer: 2,
  author: "davidshariff",
  level: 5
}
}