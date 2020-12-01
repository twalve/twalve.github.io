(function () {
  const FTX = {
    SOURCE: null,
    check: function (array) {
      for (const member in array) {
        if (array[member].indexOf("{") !== -1) {
          console.log(["[FTX] Braces detected. Secondary replace recommended", array[member]])
        }
      }
    },
    detect: function () {
      const input = document.querySelector("#input");
      const value = input.value;
      const tags = /<(.+?)\s?[^>]*>/;
      const braces = /\{.+?\}/;

      if (!value.length) {
        // TODO Notify the need for a value to test
      } else if (value.match(tags)) {
        FTX.parse(value);
      } else if (value.match(braces)) {
        FTX.replace(value);
      } else {
        FTX.render(value);
      }
    },
    explode: function (string) {
      return string.match(/\<.*?\>[^<]*/gi);
    },
    parse: function (html) {
      const single = html.split(/\n/).join("");
      let spaced = single.replace(/\s+/gi, " ");

      if (spaced.charAt(0) !== "<") {
        spaced = "<ftx>" + spaced;
      }

      const explode = C5N.explode(spaced);

      if (explode && explode.length > 0) {
        for (let explosions in explode) {
          explode[explosions] = explode[explosions].replace(/\s$/, "");
        }
      } else {
        explode = [spaced];
      }

      FTX.EXPLODE = explode;

      FTX.SOURCE.output(explode, "parse");
    },
    render: function (string) {
      FTX.SOURCE.render(string);
    },
    replace: function (string) {
      const explode = string.match(/{.+?\}/gi);
      const fragments = [];

      if (explode && explode.length > 0) {
        let remains = string;
        
        for (let explosions in explode) {
          const shards = remains.split(explode[explosions]);

          fragments.push(shards[0].replace(/\s+/gi, " "));
          fragments.push(explode[explosions]);

          if (shards[1].indexOf("{") !== -1) {
            remains = shards[1];
          } else {
            fragments.push(shards[1].replace(/\s+/gi, " "));
          }
        }
      } else {
        fragments.push(string);
      }

      FTX.SOURCE.output(fragments, "replace");
    },
    source: function (source) {
      this.SOURCE = source;
    },
    init: function () {
      // Wait for UI to initialize
    }
  };

  window.FTX = FTX;
  FTX.init();

  const C5N = {
    EXPLODE: null,
    SNIPPET: null,
    active: function (event) {
      document.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });
      
      document.querySelector(event).classList.add("active");
    },
    clear: function (id) {
      const selector = id || "output";
      document.querySelector("#" + selector).value = "";
    },
    explode: function (string) {
      return string.match(/\<.*?\>[^<]*/gi);
    },
    output: function (output, source) {
      if (source === "parse") {
        FTX.check(output);
      }

      document.querySelector("#output").value = output.join("\n");
    },
    populate: function () {
      const fragment = "#" + C5N.SNIPPET

      document.querySelector("#input").value = snippets[C5N.SNIPPET];
      C5N.active(fragment);
    },
    render: function (string) {
      document.querySelector("#output").value = string;
    },
    search: function () {
      C5N.SNIPPET = window.location.hash.substring(1) || "simple";
    },
    swap: function (event) {
      const fragment = "#" + event.target.id;
      const url = window.location.toString().split("#")[0];

      window.location.assign(url + fragment);

      C5N.clear();
      C5N.search();
      C5N.populate();
    },
    listen: function () {
      document.querySelector("#parse").addEventListener("click", FTX.detect);
      document.querySelectorAll("menu button").forEach((element) => {
        element.addEventListener("click", C5N.swap);
      });
    },
    init: function () {
      FTX.source(this);
      this.listen();
      this.search();
      this.populate();
    }
  };

  window.C5N = C5N;
  C5N.init();
}());