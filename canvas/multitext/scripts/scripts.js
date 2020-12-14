(function () {
  const FTX = {
    CANVAS: null,
    COLORS: null,
    CONTAINER: {
      h: null,
      w: null
    },
    CONTENTS: null,
    CONTEXT: {
      lh: null,
      x: null,
      y: null
    },
    CTX: null,
    CURRENT: {
      a: null,
      b: null
    },
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
      let width = 1160;
      let height = 480;

      FTX.CONTAINER = {
        h: height,
        w: width
      }

      ctx.fillStyle = FTX.COLORS.slate;
      ctx.fillRect(x, y, FTX.CONTAINER.w, FTX.CONTAINER.h);
    },
    render: async function () {
      const ctx = FTX.CTX;
      const contents = FTX.CONTENT;
      const context = FTX.CONTEXT;

      context.lh =  null;
      context.x = 16;
      context.y = 80;

      let a = context.x;
      let b = 0;

      for (const content in contents) {
        let next = content * 1 + 1;

        // NOTE Still need to gracefully handle when ctx.measureText(contents[content].text).width is longer than FTX.CONTAINER.w
        if (contents[next]) {
          if (contents[next].orphan === false) {
            if (context.x + ctx.measureText(contents[content].text).width + ctx.measureText(contents[next].text).width > FTX.CONTAINER.w) {
              b = context.x + FTX.CONTAINER.w;
            }
          } else if (context.x + ctx.measureText(contents[content].text).width > FTX.CONTAINER.w) {

          // TODO Consider: 
          // Halve the string, check
          // If over, halve halve[0], check, repeat
          // If under, split[" "], pop() split[0] check, repeat

            b = context.x + ctx.measureText(contents[content].text).width;
          } else {
            b = context.x + ctx.measureText(contents[next].text).width;
          }
        } else {
          // NOTE Still need to gracefully handle  when ctx.measureText(contents[content].text).width is longer than FTX.CONTAINER.w, as above
          b = context.x + ctx.measureText(contents[content].text).width;
        }

        // NOTE Still need to gracefully handle the x positioning
        if (b > FTX.CONTAINER.w) {
          b = context.x = a;
          context.y += contents[content].line;
        }

        // NOTE Still need to `x` calculation to render functions and have them set FTX.OFFSET
        if (contents[content].text) {
          FTX.renderText(contents[content], context.x, context.y);

          context.x = context.x + ctx.measureText(contents[content].text).width;
        } else {
          FTX.renderImage(contents[content], context.x, context.y);

          context.x = context.x + contents[content].ow;
        }

        if (contents[content].break) {
          b = context.x = a;
          context.y += contents[content].line;
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
