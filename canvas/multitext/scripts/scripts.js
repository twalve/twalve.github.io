(function () {
  const PLT = {
    default: "#575449",
    primary: "#009BE4",
    secondary: "#F10C69",
    grey: "#EEEEEE"
  };

  // const CNTNT = {
  //   0: {font: "60px 'Texta Medium'", color: PLT.default, text: "All your entertainment, "},
  //   1: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  //   2: {font: "60px 'Texta Medium'", color: PLT.default, text: "."}
  // };

  // const CNTNT = {
  //   0: {font: "60px 'Texta Medium'", color: PLT.primary, text: "✓   "},
  //   2: {font: "60px 'Texta Medium'", color: PLT.default, text: "Pause and rewind live TV, including Free-to-Air"}
  // };

  // const CNTNT = {
  //   0: {font: "60px 'Texta Medium'", color: PLT.default, text: "All "},
  //   1: {font: "bold 60px 'Texta Medium'", color: PLT.default, text: "your "},
  //   2: {font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, "},
  //   3: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  //   4: {font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false},

  //   5: {font: "60px 'Texta Medium'", color: PLT.default, text: "All "},
  //   6: {font: "60px 'Texta Medium'", color: PLT.default, text: "your "},
  //   7: {font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, "},
  //   8: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  //   9: {font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false},

  //   10: {font: "60px 'Texta Medium'", color: PLT.default, text: "All "},
  //   11: {font: "60px 'Texta Heavy'", color: PLT.default, text: "your "},
  //   12: {font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, "},
  //   13: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  //   14: {font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false},

  //   15: {font: "60px 'Texta Medium'", color: PLT.default, text: "All "},
  //   16: {font: "72px 'Texta Medium'", color: PLT.default, text: "your "},
  //   17: {font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, "},
  //   18: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  //   19: {font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false},

  //   20: {font: "60px 'Texta Medium'", color: PLT.default, text: "All "},
  //   21: {font: "48px 'Texta Medium'", color: PLT.default, text: "your "},
  //   22: {font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, "},
  //   23: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  //   24: {font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false},

  //   25: {font: "60px 'Texta Medium'", color: PLT.default, text: "All "},
  //   26: {font: "56px serif", color: PLT.default, text: "your "},
  //   27: {font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, "},
  //   28: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  //   29: {font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false},
  // };

  const CNTNT = {
    // 0: {src: "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC42NTUzIDAuOTY5NjdDMTQuOTQ4MiAxLjI2MjU2IDE0Ljk0ODIgMS43Mzc0NCAxNC42NTUzIDIuMDMwMzNMNi4wMzAzMyAxMC42NTUzQzUuNzM3NDQgMTAuOTQ4MiA1LjI2MjU2IDEwLjk0ODIgNC45Njk2NyAxMC42NTUzTDAuNDY5NjcgNi4xNTUzM0MwLjE3Njc3NyA1Ljg2MjQ0IDAuMTc2Nzc3IDUuMzg3NTYgMC40Njk2NyA1LjA5NDY3QzAuNzYyNTYzIDQuODAxNzggMS4yMzc0NCA0LjgwMTc4IDEuNTMwMzMgNS4wOTQ2N0w1LjUgOS4wNjQzNEwxMy41OTQ3IDAuOTY5NjdDMTMuODg3NiAwLjY3Njc3NyAxNC4zNjI0IDAuNjc2Nzc3IDE0LjY1NTMgMC45Njk2N1oiIGZpbGw9IiMwMDlCRTQiLz4KPC9zdmc+Cg==)", h: 15, w: 17},
    // 1: {font: "60px 'Texta Medium'", color: PLT.default, text: "Pause and rewind live TV, including Free-to-Air"},

    0: {src: "images/icons/tick@2x.png", h: 24, w: 24, ow: 60},
    1: {font: "48px 'Texta Medium'", color: PLT.default, text: "Pause and rewind live TV, including Free-to-Air"},

    // 2: {src: "images/icons/tick@1x.png", h: 24, w: 24},
    // 3: {font: "48px 'Texta Medium'", color: PLT.default, text: "Access to movies, shows, channels & more"},
  };

  const FTX = {
    CANVAS: null,
    COLORS: null,
    CONTENTS: null,
    CTX: null,
    _preload: async function () {
      const loadFont = (family, url) => {
        const fontFace = new FontFace(family, `url(${url})`, { display: "swap" });
        document.fonts.add(fontFace);
    
        return fontFace.load();
      }
    
      await Promise.all(fonts.map(({family, url}) => loadFont(family, url)));

      FTX._setup();
      FTX._resizeCanvas();
      FTX.init();
    },
    _resizeCanvas: () => {
      const ctx = FTX.CTX;
      const height = window.innerHeight;
      const width = window.innerWidth;

      ctx.canvas.setAttribute('height', `${Math.round(height * window.devicePixelRatio)}`);
      ctx.canvas.setAttribute('width', `${Math.round(width * window.devicePixelRatio)}`);
      // ctx.canvas.setAttribute('height', height);
      // ctx.canvas.setAttribute('width', width);

      ctx.canvas.style.height = `${height}px`;
      ctx.canvas.style.width = `${width}px`;
      ctx.imageSmoothingEnabled = true;
    },
    _setup: function () {
      FTX.CANVAS = document.querySelector("#canvas");
      FTX.CTX = FTX.CANVAS.getContext('2d');
      FTX.COLORS = PLT;
    },
    content: function (source) {
      FTX.CONTENT = source;
      FTX.render(this.CANVAS);
    },
    rectangle: function () {
      const ctx = FTX.CTX;

      let x = 16;
      let y = 28;
      let width = 720;
      let height = 480;

      FTX.CONTAINER = {
        h: height,
        w: width
      }

      ctx.fillStyle = FTX.COLORS.grey;
      ctx.fillRect(x, y, FTX.CONTAINER.w, FTX.CONTAINER.h);

    },
    render: async function () {
      const ctx = FTX.CTX;
      const contents = FTX.CONTENT;

      let x = 16;
      let y = 80;
      let a = x;
      let b = 0;

      for (const content in contents) {
        if (contents[content].text) {
          FTX.renderText(contents[content], x, y);

          x = x + ctx.measureText(contents[content].text).width;
        } else {
          FTX.renderImage(contents[content], x, y);

          x = x + contents[content].ow;
        }

        // NOTE Still need to gracefully handle the line-wrap
        let next = content * 1 + 1;
        if (contents[next]) {
          b = x + ctx.measureText(contents[next].text).width;
        }

        // NOTE Still need to gracefully handle the x positioning
        if (b > FTX.CONTAINER.w) {
          b = x = a;
          y += 60;
        }
      };
    },
    renderImage: function (content, x, y) {
      const ctx = FTX.CTX;
      const image = new Image();

      image.src = content.src;
      image.onload = function () {
        ctx.drawImage(image, x, y / 2);
      };
    },
    renderText: function (content, x, y) {
      const ctx = FTX.CTX;

      ctx.fillStyle = content.color;
      ctx.font = content.font;
      ctx.fillText(content.text, x, y);
    },
    init: function () {
      this.rectangle();
      this.content(CNTNT);
    }
  }

  window.FTX = FTX;

  FTX._preload();
}());
