(function() {
  const FTX = {
    CANVAS: null,
    COLORS: null,
    CONTAINER: {
      h: null,
      w: null
    },
    CONTENTS: null,
    CONTEXT: {
      color: null,
      font: null,
      lh: null,
      x: null,
      y: null
    },
    CTX: null,
    CURRENT: {
      a: null,
      b: null
    },
    _preload: async function() {
      const loadFont = (family, url) => {
        const fontFace = new FontFace(family, `url(${url})`, {
          display: "swap"
        });
        document.fonts.add(fontFace);

        return fontFace.load();
      }

      await Promise.all(fonts.map(({
        family,
        url
      }) => loadFont(family, url)));

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
    _setup: function() {
      FTX.CANVAS = document.querySelector("#canvas");
      FTX.CTX = FTX.CANVAS.getContext('2d');
      FTX.COLORS = PLT;
    },
    content: function(source) {
      FTX.CONTENT = source;
      FTX.render(this.CANVAS);
    },
    lightbox: function() {
      const ctx = FTX.CTX;

      let height = 720;
      let width = 1856;

      let x = 0;
      let y = 0;

      FTX.CONTAINER = {
        h: height,
        w: width
      }

      ctx.fillStyle = FTX.COLORS.dark; // FTX.COLORS.primary;
      ctx.fillRect(x, y, FTX.CONTAINER.w, FTX.CONTAINER.h);

      let a = x + width;
      let b = height;

      // FTX.renderLine({x: x + width, y}, {a, b}, 2, FTX.COLORS.white);
    },
    parseIcon: function(element) {
      return FTX.parseImage(element);
    },
    parseImage: function(element) {
      const parts = element.split(" ");
      const source = {};
      const buffer = 0; // 2 x 16

      for (const part in parts) {
        if (parts[part].indexOf("src=") === 0) {
          source["src"] = parts[part].split("\"")[1];
        } else if (parts[part].indexOf("height=") === 0) {
          source["h"] = parts[part].split("\"")[1];
        } else if (parts[part].indexOf("width=") === 0) {
          source["w"] = parts[part].split("\"")[1];
        }
      }

      source["ow"] = source["w"] * 1 + buffer;

      return source;
    },
    render: async function() {
      const ctx = FTX.CTX;
      const context = FTX.CONTEXT;
      const reducer = 0.5;

      context.color = "#B0AEAC"; //"#B0AEAC";#009BE4
      context.font = "54px 'Texta Medium'";
      context.lh = 60;
      context.x = 0;
      context.y = 80;

      let a = context.x;
      let b = 0;

      // NOTE source can have :: bold / bolder/ gauge / icon / image / linebreak / multi / newline / paragraph / play / tenplay
      const source = arrays["tenplay"];

      FTX.CONTENTED = FTX.renderSource(source, context);

      // NOTE Uncomment below to switch from using contents.js when commented, to arrays.js
      FTX.CONTENT = FTX.CONTENTED

      FTX.renderContent();

      const contents = FTX.CONTENT;

      for (const content in contents) {
        let next = content * 1 + 1;
        if (contents[next]) {
          if (context.x + ctx.measureText(contents[content].text).width > FTX.CONTAINER.w) {
            b = context.x + ctx.measureText(contents[content].text).width;
          } else if (contents[next].orphan === false) {
            if (context.x + ctx.measureText(contents[content].text).width + ctx.measureText(contents[next].text).width > FTX.CONTAINER.w) {
              b = context.x + FTX.CONTAINER.w;
            }
          }
        } else {
          b = context.x + ctx.measureText(contents[content].text).width;
        }

        // NOTE Still need to gracefully handle the x positioning
        if (b > FTX.CONTAINER.w) {
          b = context.x = a;
          context.y += contents[content].line || context.lh;
        }

        if (contents[content].text) {
          if (contents[content - 1] && contents[content - 1].src) {
            contents[content].text = contents[content].text.substring(1);
          }

          FTX.renderText(contents[content], context.x, context.y);

          context.x = context.x + ctx.measureText(contents[content].text).width;
        } else if (contents[content].src) {
          FTX.renderImage(contents[content], context.x, context.y);

          context.x = context.x + contents[content].ow;
        }

        if (contents[content].text === "") {
          b = context.x = a;
          context.y += (contents[content].line || context.lh) * reducer;
        } else if (contents[content].break) {
          b = context.x = a;
          context.y += contents[content].line || context.lh;
        }
      };
    },
    renderContent: function() {
      const ctx = FTX.CTX;
      const contents = FTX.CONTENT;
      const context = FTX.CONTEXT;

      const lines = {};
      const members = {};

      // NOTE isShorter.js has the attempts to DRY calculating if the line is shorter than the container, but while the long calculation is effective, if not efficient, the method made more Functional fails: `context.x + ctx.measureText(partial.join(" ")).width < FTX.CONTAINER.w`

      // NOTE Manipulate the lines of `text`
      for (const content in contents) {
        ctx.font = contents[content].font;

        if (context.x + ctx.measureText(contents[content].text).width > FTX.CONTAINER.w) {
          const next = content * 1 + 1;
          const words = contents[content].text.split(" ");
          const partial = [];
          let index = content * 1 - 1;
          let finished = false;

          while (words.length > 0) {
            partial.push(words.shift());

            index += 1;

            while (context.x + ctx.measureText(partial.join(" ")).width < FTX.CONTAINER.w) {
              let word = words.shift();

              if (context.x + ctx.measureText([partial.join(" "), word].join(" ")).width < FTX.CONTAINER.w) {
                partial.push(word);
              } else {
                words.unshift(word);
                break;
              }

              if (words.length === 0) {
                finished = true;
                break;
              }
            }

            if (finished && (contents[next] && contents[next].font === contents[content].font)) {
              contents[next].text = [partial.join(" "), contents[next].text].join(" ");
            } else {
              lines[content + "_" + index] = partial.join(" ");
            }

            partial.length = 0;
          }
        }
      }

      // NOTE Then wrap each line of `text` as it's parent
      for (const line in lines) {
        const split = line.split("_");
        const source = contents[split[0]];

        source.text = lines[line];

        let current = JSON.stringify(source);
        current = JSON.parse(current);

        if (!members[split[0]]) {
          members[split[0]] = [];
        }

        members[split[0]].push(current);
      }

      // NOTE We reverse the Array so the replacements occur on Indexes before they get moved. I.E We replace Index 4 and it causes changes only to Members after it in the Array. Then we replace Index 3 and even if we inject a half dozen Members, we're not relying on anything's position in the Array.
      const keys = Object.keys(members).reverse();

      // NOTE Then insert a block of lines to replace it's parent
      for (const key in keys) {
        contents.splice(keys[key], 1, ...members[keys[key]]);
      }
    },
    renderImage: function(content, x, y) {
      const ctx = FTX.CTX;
      const image = new Image();

      image.src = content.src;
      image.onload = function() {
        // ctx.drawImage(image, x, y / 2);
        ctx.drawImage(image, x, y / 2, content.w, content.h);

        // TODO Investigate Image y position placement;
        // console.log(image);
        // ctx.drawImage(image, x, y - (content.h * .66));
      };
    },
    renderLine: function(start, end, width, style) {
      const ctx = FTX.CTX;

      ctx.beginPath();
      ctx.lineWidth = width || 8;
      ctx.strokeStyle = style || "black";
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.a, end.b);
      ctx.stroke();
    },
    renderSource: function(members, palette) {
      const rendering = [];
      const rendered = {};

      for (const member in members) {
        if (members.hasOwnProperty(member)) {
          let phrase = members[member];

          if (phrase.indexOf("</") === 0) {
            // Do nothing
          } else if (phrase.indexOf("<ftx>") === 0) {
            rendering.push({
              color: palette.color,
              font: palette.font,
              text: phrase.substring(5)
            });
          } else if (phrase.indexOf("<icon") === 0) {
            // NOTE Extend instances of this to cover any predefined assets as required
            var icon = FTX.parseIcon(phrase);
            rendering.push({
              src: icon.src,
              h: 16,
              w: 16,
              ow: 48
            });
          } else if (phrase.indexOf("<img") === 0) {
            var image = FTX.parseImage(phrase);
            rendering.push({
              src: image.src,
              h: image.h,
              w: image.w,
              ow: image.ow
            });
          } else if (phrase.indexOf("<strong") === 0) {
            rendering.push({
              // color: palette.color,
              color: PLT.white,
              // font: palette.font.replace(/px '/, "px bold '"),
              font: "bold " + palette.font,
              text: phrase.replace(/<strong>/, " ")
            });
          } else if (phrase.indexOf("<br />") === 0) {
            const previous = rendering.length - 1;
            if (rendering[previous]) {
              const temp = rendering[previous];

              temp["orphan"] = false;
              temp["break"] = true;

              rendering[previous] = temp;
            }

            rendering.push({
              color: palette.color,
              font: palette.font,
              text: phrase.substring(6)
            });
          } else {
            rendering.push({
              color: palette.color,
              font: palette.font,
              text: phrase
            });
          }
        }
      }

      for (const obj in rendering) {
        rendered[obj] = rendering[obj]
      }

      // return rendered;
      return rendering;
    },
    renderText: function(content, x, y) {
      const ctx = FTX.CTX;

      ctx.fillStyle = content.color;
      ctx.font = content.font;
      ctx.fillText(content.text, x, y);

      // NOTE Retain for logging
      // console.log(ctx)
      // console.log(ctx.measureText(content.text))
    },
    objectify: function(array) {

    },
    init: function() {
      this.lightbox();
      this.content(CNTNT);
    }
  }

  window.FTX = FTX;

  FTX._preload();
}());