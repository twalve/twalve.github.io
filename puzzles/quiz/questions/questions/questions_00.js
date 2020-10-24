/*
//PLUS

*/

/*
//MINUS

*/

const questions = {
  q0: {
    author: "sdutoit",
    question: "How do you call a function named \"myFunction\"?",
    answers: [
      "call function myFunction()",
      "myFunction()",
      "call myFunction()",
      "hey myFunction!"
    ],
    answer: 2
  },
  q1: {
    author: "raonilima",
    question: "Which of the below options states the correct use of Media Queries for a responsive design?",
    answers: [
      "@media (max-width: 768px){} ",
      "@mediaquerie (max-width: 320px) {}",
      "@media screen and (max-width: 680px) {}",
      "@media (500px) {}",
      "Options A and C"
    ],
    answer: 5
  },
  q2: {
    author: "raonilima",
    question: "Using jQuery, how can you remove the current classes and add another to one specific element in the DOM?",
    answers: [
      "$(elementID).removeClass(); $(elementID).addNewClass(\"newClass\");",
      "$(#elementID).removeClass(); $(#elementID).addClass(\"newClass\");",
      "$(#elementID).removeAllClasses(); $(#elementID).addClass(.newClass);",
      "$(#elementID).remove(.oldClass); $(#elementID).addClass();",
      "None of the above"
    ],
    answer: 2
  },
  q3: {
    author: "raonilima",
    question: "How can you correctly import and load a new JavaScript file into the page?",
    answers: [
      "<script href=\"js/javascript.js\" />",
      "<link rel=\"javascript\" href=\"js/javascript.js\"></link>",
      "<script src=\"js/javascript.js\"></script>",
      "@import = \"js/javascript.js\";",
      "<load src=\"js/javascript.js\"></load>",
    ],
    answer: 3
  },
  q4: {
    author: "n.cooney94",
    question: "Which jQuery will remove the '.content' from the html",
    answers: [
      "$(\".content\").hide(\"slow\");",
      "$(\".content\").display(\"none\");",
      "$(\".content\").remove();",
      "All of the above"
    ],
    answer: 3
  },
  q5: {
    author: "n.cooney94",
    question: "Which jQuery will remove the class 'content' from a collection",
    answers: [
      "$(\".content\").hide('slow');",
      "$(\".content\").display('none');",
      "$(\".content\").removeClass();",
      "None of the above"
    ],
    answer: 3
  },
  q6: {
    author: "markgo",
    question: "How do you display hyperlinks without an underline?",
    answers: [
      "a {underline: none;}",
      "a {text-decoration: no-underline;}",
      "a {text-decoration: none;}",
      "a {decoration: no-underline;}"
    ],
    answer: 3
  },


  q7: {
    author: "jwong-au",
    question: "What is correct syntax for a calc in CSS?",
    answers: [
      "width: calc(50% - 3px);",
      "width: calc(2em - 5px);",
      "width: calc(100%/12*3);",
      "All of the above"
    ],
    answer: 4
  },
  q8: {
    author: "jwong-au",
    question: "What is the opening tag for an anchor?",
    answers: [
      "<d>",
      "<a>",
      "<l>",
      "<aie>"
    ],
    answer: 2
  },
  q9: {
    author: "jwong-au",
    question: "What is the alternate jQuery function '$' an alias for?",
    answers: [
      "jQuery",
      "jquery",
      "jQuery()",
      "None of the above"
    ],
    answer: 1
  },
  q10: {
    author: "harold",
    question: "For the best User Experience (UX), where in the HTML should you put your <script> link to your JavaScript file?",
    answers: [
      "At the start of <head>",
      "At the end of <head>",
      "At the start of <body>",
      "At the end of <body>",
      "All of the above"
    ],
    answer: 4
  },
  q11: {
    author: "clarec",
    question: "What is the correct CSS to highlight an unvisited link in blue?",
    answers: [
      "a:link {color: blue;}",
      "a:unvisited {color: blue;}",
      "a.visited {color: blue;}",
      "a:unlink {color: blue;}"
    ],
    answer: 1
  },
  q12: {
    author: "joannefores",
    question: "Which special characters can be used in JavaScript Variable or Function names?",
    answers: [
      "&",
      "$",
      "_",
      "@",
      "B and C"
    ],
    answer: 5
  },
  q13: {
    author: "nathdigital",
    question: "How do you log something to the console?",
    answers: [
      "console.log(\"test\")",
      "console.log.(\"test\");",
      "consolelog.('test')",
      "console.log{\"test\"}"
    ],
    answer: 1
  },
  q14: {
    author: "nathdigital",
    question: "How would you specify the character encoding on your website to be UTF-8?",
    answers: [
      "<meta charset-type=\"utf-8\" />",
      "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />",
      "<meta charset=\"utf-8\" />",
      "B and C"
    ],
    answer: 4
  },
  q15: {
    author: "nathdigital",
    question: "In the following CSS code, how big is the right margin? p { margin: 12px 8px 18px; }?",
    answers: [
      "12px",
      "18px",
      "8px",
      "It's not specified"
    ],
    answer: 3
  }
}
