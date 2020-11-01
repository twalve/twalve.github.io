(function () {
  const C5N = {
    SNIPPET: null,
    clear: function (id) {
      const selector = id || "output";
      document.querySelector("#" + selector).value = "";
    },
    parse: function () {
      const input = document.querySelector("#input");
      const html = input.value;
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

      document.querySelector("#output").value = explode.join('\n');
    },
    populate: function () {
      document.querySelector("#input").value = snippets[C5N.SNIPPET];
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
      document.querySelector("#parse").addEventListener("click", C5N.parse);
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
