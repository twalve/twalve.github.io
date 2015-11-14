(function(){
  var MNSWPR = {
    CLEARED: {
      clearing: null,
      set: []
    },
    FLAG: false,
    MINES: {
      count: 10,
      difficulty: "easy",
      set: []
    },
    GRID: {
      cells: 20,
      columns: 9,
      count: null,
      rows: 9
    },
    RINGED: [
      [-1,-1], [-1,0], [-1,1],
      [0,-1],/*[x],*/[0,1],
      [1,-1], [1,0], [1,1]
    ],
    game: {
      clear: function(cell) {
        if (!cell.getAttribute("data-ring") > 0 && !cell.getAttribute("data-clear") > 0) {
          cell.setAttribute("data-clear", true);
          cell.classList.add("cleared");

          MNSWPR.CLEARED.set.push(cell.getAttribute("data-grid"));
        }

        MNSWPR.game.clearer();
      },
      clearer: function() {
        MNSWPR.CLEARED.clearing = MNSWPR.CLEARED.set;
        MNSWPR.CLEARED.set = [];

        var length = MNSWPR.CLEARED.clearing.length;

        for (var i = 0; i < length; i += 1) {
          MNSWPR.game.ringer(MNSWPR.CLEARED.clearing[i].split("_"), 'data-clear');
        }

        if (!!MNSWPR.CLEARED.set.length) {
          MNSWPR.CLEARED.set = _.uniq(MNSWPR.CLEARED.set);
          MNSWPR.CLEARED.set.sort();

          MNSWPR.game.click(MNSWPR.CLEARED.set[0])
        } else {
          var uncleared = 0;
          var tiles = document.querySelectorAll("section > div li");
          length = tiles.length;
          
          for (i = 0; i < length; i += 1) {
            var tile = tiles[i];
            var background = window.getComputedStyle(
              tile, ':after'
            ).getPropertyValue('background-image');

            if (background === "none") {
              uncleared += 1;
            }
          }

          if (MNSWPR.game.tally(uncleared)) {
            document.documentElement.classList.add("gamewon");
          }
        }
      },
      click: function(target) {
        document.querySelector(MNSWPR.game.selector(target)).click();
      },
      clicked: function(target) {
        target.classList.add("clicked");

        if (target.classList.contains("mined")) {
          target.classList.add("boom");
          MNSWPR.game.over();
        } else {
          MNSWPR.game.clear(target);
        }
      },
      flag: function() {
        MNSWPR.FLAG = (MNSWPR.FLAG) ? false : true;
        document.querySelector("header fieldset:last-child label").classList.toggle("flagged");
      },
      flagged:  function(target) {
        var selected = document.querySelector(MNSWPR.game.selector(target));
        selected.classList.toggle("flagged");
      },
      mine: function() {
        var unplaced = MNSWPR.MINES.count - MNSWPR.MINES.set.length;

        for (var i = 0; i < unplaced; i += 1) {
          var row = MNSWPR.core.random(0, MNSWPR.GRID.rows - 1);
          var column = MNSWPR.core.random(MNSWPR.GRID.columns + 1);// min optional, then max not inclusive
          var target = [row, column].join("_");
          var selected = document.querySelector(MNSWPR.game.selector(target));

          if (!selected.classList.contains("mined")) {
            MNSWPR.MINES.set.push(target);
            selected.classList.add("mined");
          }
        }

        if (MNSWPR.MINES.set.length !== MNSWPR.MINES.count) {
          MNSWPR.game.mine();
        } else {
          MNSWPR.game.sweeper();
        }
      },
      over: function() {
        document.documentElement.classList.add("gameover");
      },
      restart: function() {
        document.location.reload(false);
      },
      ringer: function(rowcol, attribute) {
        for (var i = 0; i < MNSWPR.RINGED.length; i += 1) {

          var row = MNSWPR.core.add(rowcol[0], MNSWPR.RINGED[i][0]);
          var col = MNSWPR.core.add(rowcol[1], MNSWPR.RINGED[i][1]);

          if (row > -1 && row < MNSWPR.GRID.rows) {
            if (col > -1 && col < MNSWPR.GRID.columns) {
              var grid = [row, col].join("_");
              var ringer = document.querySelector(MNSWPR.game.selector(grid));
              var count = parseInt(ringer.getAttribute(attribute), 10) || 0;

              ringer.setAttribute(attribute, count + 1);

              if (attribute === "data-clear") {
                if (!ringer.getAttribute("data-ring") && !ringer.classList.contains("clicked")) {
                  MNSWPR.CLEARED.set.push(grid);
                }
              }
            }
          }
        }
      },
      sweeper: function() {
        MNSWPR.MINES.set.sort();

        for (var i = 0; i < MNSWPR.MINES.set.length; i += 1) {
          MNSWPR.game.ringer(MNSWPR.MINES.set[i].split("_"), 'data-ring');          
        }
      },
      selector: function(target, attribute) {
        return ["[",(attribute || "data-grid"),"='", target,"']"].join("");
      },
      tally: function(uncleared) {
        return uncleared === MNSWPR.GRID.columns * MNSWPR.GRID.rows - MNSWPR.MINES.count;
      },
      setup: function() {
        this.mine();
      }
    },
    player: {
      turn: function(cell) {
        if (MNSWPR.FLAG) {
          MNSWPR.game.flagged(cell.dataset.grid);
        } else {
          MNSWPR.game.clicked(cell);
        }
      }
    },
    build: function() {
      var list = document.createElement("UL");

      for (var i = 0; i < MNSWPR.GRID.rows; i += 1) {
        for (var j = 0; j < MNSWPR.GRID.columns; j += 1) {
          var item = document.createElement("LI");
          item.dataset.grid = [i, j].join("_");
          list.appendChild(item);

          MNSWPR.GRID.count += 1;
        }
      }

      document.querySelector("section ol").innerHTML = list.innerHTML;
    },
    core: {
      add: function(a, b) {
        return (parseInt(a, 10) + parseInt(b, 10));
      },
      leading: function(chars) {
        return (chars.toString().length > 1) ? chars : "0" + chars;
      },
      random: function(min, max) {
        return (max) ?
          Math.floor(Math.random() * (max - min + 1)) + min
        :
          Math.floor(Math.random() * (min - 1))
        ;
      }
    },
    listen: function() {
      document.querySelector("ol").addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === "li") {
          MNSWPR.player.turn(event.target);
        }
      }, false);

      document.querySelector("header [type='checkbox']").addEventListener("change", function(event){
        MNSWPR.game.flag();
      }, false);

      document.querySelector("header img").addEventListener("click", function(event){
        MNSWPR.game.restart();
      }, false);
    },
    search: function() {
      // check for a query string to set the game level
    },
    style: function() {
      var list = document.createElement("STYLE");
      var rules = [
        "li {",
          "height: ", MNSWPR.GRID.cells, "px;",
          "width: ", MNSWPR.GRID.cells, "px;",
        "}"
      ].join("");
      var style = document.createTextNode(rules);

      list.appendChild(style);
      document.querySelector("head").appendChild(list);      
    },
    init: function() {
      this.build();
      this.game.setup();
      this.listen();
    }
  };

  window.MNSWPR = MNSWPR;
  MNSWPR.style();
  MNSWPR.init();
}());
