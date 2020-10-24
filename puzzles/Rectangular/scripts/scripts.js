(function () {
  const PZZL = {
    clear: function (selector) {
      selector = typeof selector === "string" ? selector : ".active";

      document.querySelectorAll(selector).forEach((element) => {
        element.classList.remove("active");
      });

      PZZL.count();
    },
    click: function (event) {
      const source = event.target;
      const w = source.id.substr(1,1);
      const h = source.id.substr(3);
      const selector = ".w" + w + ".h" + h;

      PZZL.toggle(source);

      if (document.querySelector(selector).classList.contains("active")) {
        PZZL.clear(selector);
      } else {
        document.querySelectorAll(selector).forEach((element) => {
          element.classList.add("active");
        });
      }

      PZZL.count();
    },
    coat: function () {
      document.querySelectorAll("rect").forEach((element) => {
        element.classList.add("active");
      });

      document.querySelectorAll("button").forEach((element) => {
        element.classList.add("active");
      });

      PZZL.count();
    },
    count: function () {
      const active = document.querySelectorAll("rect.active");
      const hidden = document.querySelectorAll("rect[hidden].active");

      let count = active.length ? active.length - hidden.length : 0;

      document.querySelector("#count").innerHTML = count;
    },
    switch: function (event) {
      const selector = event.target;

      if (selector.classList.contains("switch")) {
        selector.classList.remove("switch");
      } else {
        selector.classList.add("switch");
      }
    },
    toggle: function (selector) {
      if (selector.classList.contains("active")) {
        selector.classList.remove("active");
      } else {
        selector.classList.add("active");
      }
    },
    listen: function () {
      document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", PZZL.click);
      });

      document.querySelector("#clear").addEventListener("click", PZZL.clear);

      document.querySelector("#all").addEventListener("click", PZZL.coat);

      document.querySelector("#count").addEventListener("click", PZZL.switch);
    },
    start: function () {
      this.coat();
    },
    init: function () {
      this.listen();
      this.start();
    }
  }

  window.PZZL = PZZL;
  PZZL.init();
}())