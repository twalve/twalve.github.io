const STT = {
  answers: [],
  keys: [],
  par: [],
  questions: 0,
  question: 0,
  source: null,
  tally: 0
};

const QSTNS = {};

const NGN = {
  base: {
    coerce: function(data, type = "number") {
      if (type = "number") {
        return Number(data);
      } else {
        return data.toString();
      }
    },
    encode: function(question) {
      question = question.replace(/\</gi, "&lt;");
      question = question.replace(/\>/gi, "&gt;");

      return question;
    },
    listen: function() {
      $("#question-resolve button")[0].on("click", function() {
        window.location.reload();
      });
    },
    zero: function(index) {
      return index - 1;
    }
  },
  behave: {
    back: function() {
      NGN.behave.clear("section");
      STT.question -= 1;
      NGN.behave.current("section");
    },
    clear: function(selector) {
      let sections = document.querySelectorAll(selector);
      sections.forEach(function(section) {
        section.classList.remove("current");
      })
    },
    current: function(selector) {
      if (selector == "section") {
        document.querySelectorAll("section")[STT.question].classList.add("current");
      } else {
        let checked = NGN.base.zero(STT.answers[STT.question]);
        document.querySelectorAll("#" + selector + " li")[checked].classList.add("current");
      }
    },
    next: function() {
      NGN.behave.clear("section");
      STT.question += 1;
      NGN.behave.current("section");
    },
    register: function(selector) {
      NGN.behave.clear("#" + selector + " li");
      NGN.behave.current(selector);
    }
  },
  build: {
    construct: function(q) {
      let id = STT.keys[q];
      let question = QSTNS[id];
      let ordered = document.createElement("ol");
      let selector = "#question-" + id;
      let target = document.querySelector(selector);

      target.setAttribute("data-answer", question["answer"]);

      target.querySelector("h1").innerHTML = NGN.base.encode(question["question"]);
      target.querySelector("h2 i").innerHTML = q + 1;
      target.querySelector("h2 b").innerHTML = STT.questions;

      for (let i = 0; i < question["answers"].length; i += 1) {
        let item = document.createElement("li");
        let label = document.createElement("label");
        let span = document.createElement("span");
        let radio = document.createElement("input");

        radio.setAttribute("type", "radio");
        radio.setAttribute("name", id);
        radio.setAttribute("value", (i + 1));

        span.innerHTML = NGN.base.encode(question["answers"][i]);

        label.appendChild(span);
        label.appendChild(radio);
        item.appendChild(label);
        ordered.appendChild(item);
      }

      target.querySelector("ol").innerHTML = ordered.innerHTML;
      STT.par.push(question["answer"]);
    },
    enable: function(q) {
      let $section = $("section")[q];
      let back = "footer button:first-child";
      let next = "footer button:last-child";

      if (q == 0) {
        $section.querySelector(back).attr("disabled", "disabled");
        $section.querySelector(next).on("click", NGN.behave.next);
      } else {
        $section.querySelector(back).on("click", NGN.behave.back);
        $section.querySelector(next).on("click", NGN.behave.next);
      }
    },
    generate: function() {
      this.list();
      // this.construct(arguments[0]);
    },
    list: function() {
      for (let q = 0; q < STT.questions; q += 1) {
        if (q > 0) {
          this.template(q);
        }

        this.construct(q);
        this.enable(q);
      }
    },
    template: function(q) {
      let parent = document.querySelector("#questions");
      let template = document.querySelector("#questions section:first-child").cloneNode(true);
      let resolve = document.querySelector("#questions section:last-child")

      template.classList.remove("current");
      template.id = "question-q" + q;
      template.querySelector("footer button:first-child").removeAttribute("disabled");

      parent.insertBefore(template, resolve);
    }
  },
  process: {
    record: function() {
      let answer = document.querySelectorAll("[type=radio]");
      answer.forEach(function(radio) {
        radio.addEventListener("click", NGN.process.register);
      });
    },
    register: function() {
      let checked = arguments[0].srcElement;
      let parent = NGN.query.parent(checked, "section");

      // do something to stop answered questions adding to tally
      STT.answers[STT.question] = checked.value;
      NGN.behave.register(parent.id);
      NGN.process.resolve(parent.id);
    },
    resolve: function(question) {
      let $scorecard = $("#question-resolve ul")[0];
      question = question.split("-q")[1];

      if (NGN.base.coerce(STT.answers[question]) === STT.par[question]) {
        STT.tally += 1;
      }

      console.log(("STT.answers[" + question + "]: "), STT.answers[question]);
      console.log(("STT.par[" + question + "]: "), STT.par[question]);
      console.log("STT.tally: " + STT.tally);
      console.log("\n");

      $scorecard.querySelector("li:first-child").innerHTML = STT.tally;
      $scorecard.querySelector("li:last-child").innerHTML = STT.questions;
    }
  },
  questions: {
    gather: function() {
      let course = STT.source;
      let keys = [];

      for (let question in course) {
        QSTNS[question] = course[question];
        keys.push(question);
      }

      STT["keys"] = keys;
      STT.questions = keys.length;
    },
    pick: function() {
      // check for a query string
      // or other options
    },
    randomise: function() {
      // show x of y, where x contains different questions
    }
  },
  query: {
    parent: function(selector, target) {
      let element = selector;

      while (element.parentNode.nodeName.toUpperCase() != target.toUpperCase()) {
        element = element.parentNode;
      }

      element = element.parentNode; // this feels wrong!

      return element;
    }
  },
  search: {
    // do query string things in here
  },
  init: function() {
    this.questions.gather();
    this.questions.pick();
    this.build.generate();
    this.process.record();
    this.base.listen();
  }
};