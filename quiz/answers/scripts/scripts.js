(function() {
  const NSWRS = {
    ANIMATING: null,
    autoplay: function() {
      if (NSWRS.ANIMATING) window.clearTimeout(NSWRS.ANIMATING);

      const checked = document.querySelector("input[type='radio']:checked")
      const radios = document.querySelectorAll("input[type='radio']")
      const index = Array.prototype.slice.call(radios).indexOf(checked)
      const next = (index < (radios.length - 1)) ? index + 1 : 0;

      radios[next].checked = true;
      NSWRS.ANIMATING = setTimeout(NSWRS.autoplay, 10000)
    },
    back: function() {
      const checked = document.querySelector("input[type='radio']:checked")
      const radios = document.querySelectorAll("input[type='radio']")
      const index = Array.prototype.slice.call(radios).indexOf(checked)
      const back = (index > 0) ? index - 1 : 0;

      radios[back].checked = true;
    },
    keyed: function(event) {
      if (event.keyCode === 37) {
        NSWRS.back(event.keyCode)
      }
    },
    listen: function() {
      document.querySelector("body").on("keydown", NSWRS.keyed);
    },
    setup: function() {
      this.autoplay();
    },
    init: function() {
      this.setup();
      this.listen();
    }
  };

  window.NSWRS = NSWRS;
  NSWRS.init();

}());