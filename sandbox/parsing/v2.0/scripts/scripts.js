(function () {
  const FTX = {
    SOURCE: null,
    OUTPUT: null,
    break: function (string) {
      return string.replace(/\n/g, "<br/>");
    },
    check: function (array) {
      for (const member in array) {
        if (array[member].indexOf("{") !== -1) {
          return true;
        }
      }
    },
    detect: function () {
      const input = document.querySelector("#input");
      const tags = /<(.+?)\s?[^>]*>/;
      const braces = /\{.+?\}/;
      const breaks = /[\\n]/;
      let value = input.value;

      if (!value.length) {
        FTX.render("NO INPUT DETECTED\nPlease provide a parsable source");
      } else if (!value.match(tags) && !value.match(braces)) {
        FTX.render(value);
      }

      if (value.match(breaks)) {
        value = FTX.break(value);
      }

      if (value.match(braces)) {
        FTX.replace(value);
        FTX.transcode();
      }

      if (value.match(tags)) {
        FTX.parse(value);
      }

      FTX.SOURCE.output(FTX.OUTPUT, "detect");
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

      const explode = FTX.explode(spaced);

      if (explode && explode.length > 0) {
        for (let explosions in explode) {
          explode[explosions] = explode[explosions].replace(/\s$/, "");
        }
      } else {
        explode = [spaced];
      }

      FTX.OUTPUT = explode;
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

          if (shards[0].length) {
            fragments.push(shards[0].replace(/\s+/gi, " "));
          }

          fragments.push(explode[explosions]);

          if (shards[1].indexOf("{") !== -1) {
            remains = shards[1];
          } else {
            if (shards[1].length) {
              fragments.push(shards[1].replace(/\s+/gi, " "));
            }
          }
        }
      } else {
        fragments.push(string);
      }

      FTX.OUTPUT = fragments;
    },
    transcode: function () {
      const coded = [];

      const tag = {
        end: function (type) {
          return "</" + type + ">";
        },
        self: function (type, params) {
          return "<" + type + " " + params + "\" />";
        },
        start: function (type, params) {
          if (params) {
            return "<" + type + " " + params + "\">";
          } else {
            return "<" + type + ">";
          }
        }
      }

      for (const index in FTX.OUTPUT) {
        let line = FTX.OUTPUT[index];
        const split = line.split("}");
        let element = split[0];

        if (element.indexOf("{ICON|URL:") === 0) {
          const params = "src=\"" + element.substring(10);

          coded.push(tag.self("img", params));
        } else if (element.indexOf("{BOLD|TEXT:") === 0) {
          const content = element.substring(11);

          coded.push(tag.start("strong") + content + tag.end("strong"));
        } else {
          coded.push(line);
        }
      }

      FTX.OUTPUT = coded;
    },
    init: function (source) {
      // Wait for UI to initialize
      this.SOURCE = source;
    }
  };

  window.FTX = FTX;

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

      if (C5N.SNIPPET !== "clear") {
        document.querySelector("#input").value = snippets[C5N.SNIPPET];
      } else {
        document.querySelector("#input").value = "";
      }

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
      FTX.init(this);
      this.listen();
      this.search();
      this.populate();
    }
  };

  window.C5N = C5N;
  C5N.init();
}());
