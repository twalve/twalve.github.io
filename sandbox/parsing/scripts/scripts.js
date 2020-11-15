(function () {
  const C5N = {
    SNIPPET: null,
    clear: function (id) {
      const selector = id || "output";
      document.querySelector("#" + selector).value = "";
    },
    detect: function () {
      const input = document.querySelector("#input");
      const value = input.value;
      // const perl = /<(?'tag'.+?>).*<\/(\g{tag})/;
      const tags = /<(.+?>).+?<\/(\1)/;
      const braces = /\{.+?\}/;

      if (!value.length) {

      } else if (value.match(tags)) {
        C5N.parse(value);
      } else if (value.match(braces)) {
        C5N.replace(value);
      } else {
        C5N.render(value);
      }
    },
    parse: function (html) {
      const single = html.split(/\n/).join("");
      const spaced = single.replace(/\s+/gi, " ");
      let explode = spaced.match(/\<.*?\>[^<]*/gi);

      if (explode && explode.length > 0) {
        for (let explosions in explode) {
          explode[explosions] = explode[explosions].replace(/\s$/, "");
        }
      } else {
        explode = [spaced];
      }

      // console.log([html, single, spaced, explode])

      document.querySelector("#output").value = explode.join("\n");
    },
    populate: function () {
      document.querySelector("#input").value = snippets[C5N.SNIPPET];
    },
    render: function (string) {
      document.querySelector("#output").value = string;
    },
    replace: function (string) {
      const explode = string.match(/{.+?\}/gi);
      const fragments = [];

      if (explode && explode.length > 0) {
        let remains = string;
        
        for (let explosions in explode) {
          let shards = remains.split(explode[explosions]);

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

      document.querySelector("#output").value = fragments.join("\n");
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
      document.querySelector("#parse").addEventListener("click", C5N.detect);
      document.querySelectorAll("menu button").forEach((element) => {
        element.addEventListener("click", C5N.swap);
      });
    },
    init: function () {
      this.listen();
      this.search();
      this.populate();
    }
  };
  window.C5N = C5N;
  C5N.init();
}());
