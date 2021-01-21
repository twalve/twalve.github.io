// Tagline, Object
// NOTE Safest not to use an Object, as there are some Array methods that are relied on, although "simple" Labels are okay-ish
/* * /
const CNTNT = {
  0: {font: "60px 'Texta Medium'", color: PLT.default, text: "All your entertainment, "},
  1: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  2: {font: "60px 'Texta Medium'", color: PLT.default, text: "."}
};
/**/

// Tagline, Array
/* * /
const CNTNT = [
  {font: "60px 'Texta Medium'", color: PLT.default, text: "All your entertainment, "},
  {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  {font: "60px 'Texta Medium'", color: PLT.default, text: "."}
];
/**/

// Entity ✓
/* * /
const CNTNT = [
  {font: "60px 'Texta Medium'", color: PLT.primary, text: "✓   "},
  {font: "60px 'Texta Medium'", color: PLT.default, text: "Pause and rewind live TV, including Free-to-Air"}
];
/**/

// Bold supplied in font information
/* * /
const CNTNT = {
  0: {font: "60px 'Texta Medium'", color: PLT.default, text: "All "},
  1: {font: "bold 60px 'Texta Medium'", color: PLT.default, text: "your "},
  2: {font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, "},
  3: {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  4: {font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false}
};
/**/

// Breaking at business-rule defined point
/* * /
const CNTNT = [
  {font: "60px 'Texta Medium'", color: PLT.default, text: "All "},
  {font: "bold 60px 'Texta Medium'", color: PLT.default, text: "your ", break: true},
  {font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, "},
  {font: "60px 'Texta Medium'", color: PLT.primary, text: "easy"},
  {font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false}
];
/**/

// Text broken into lines
/* * /
const CNTNT = [
  {font: "80px 'Texta Light'", color: PLT.grey9, text: "Details Item Title", line: 84, break: true},
  {font: "bold 48px 'Texta Medium'", color: PLT.grey6, text: "Light Entertainment, 2020", line: 66, break: true},
  {font: "bold 48px 'Texta Medium'", color: PLT.grey6, text: "2 Seasons, 84 Episodes", line: 66, break: true},
  {font: "48px 'Texta Medium'", color: PLT.grey7, text: "In West Philadelphia born and raised on the playground was", line: 60},
  {font: "48px 'Texta Medium'", color: PLT.grey7, text: "where I spent most of my days. Chillin' out, maxin', relaxin', all", line: 60},
  {font: "48px 'Texta Medium'", color: PLT.grey7, text: "cool and all shootin' some b-ball outside of the school.", line: 60},
  {font: "48px 'Texta Medium'", color: PLT.grey7, text: "When a couple of guys who were up to no good, started", line: 60},
  {font: "48px 'Texta Medium'", color: PLT.grey7, text: "...", line: 60, orphan: false},
];
/**/

// Long text block
/* * /
const CNTNT = [
  {text: "Details Item Title", line: 84, break: true, font: "80px 'Texta Light'", color: PLT.grey9},
  {text: "Light Entertainment, 2020", line: 66, break: true, font: "bold 48px 'Texta Medium'", color: PLT.grey6},
  {text: "2 Seasons, 84 Episodes", line: 66, break: true, ont: "bold 48px 'Texta Medium'", color: PLT.grey6},
  {text: "In West Philadelphia born and raised on the playground was where I spent most of my days. Chillin' out, maxin', relaxin', all cool and all shootin' some b-ball outside of the school. When a couple of guys who were up to no good, started", line: 60, font: "48px 'Texta Medium'", color: PLT.grey7},
  {text: "...", line: 60, orphan: false, font: "48px 'Texta Medium'", color: PLT.grey7}
];
/**/

// Long text blocks
/* * /
const CNTNT = [
  {text: "Details Item Title", line: 84, break: true, font: "80px 'Texta Light'", color: PLT.grey9},
  {text: "Light Entertainment, 2020", line: 66, break: true, font: "bold 48px 'Texta Medium'", color: PLT.grey6},
  {text: "2 Seasons, 84 Episodes", line: 66, break: true, ont: "bold 48px 'Texta Medium'", color: PLT.grey6},
  {text: "In West Philadelphia born and raised on the playground was where I spent most of my days. Chillin' out, maxin', relaxin', all cool and all shootin' some b-ball outside of the school. When a couple of guys who were up to no good, started", line: 60, font: "48px 'Texta Medium'", color: PLT.grey7},
  {text: "making trouble in my neighborhood. I got in one little fight and my mom got scared. She said \"You're movin' with your aunty and uncle in Bel Air\".", line: 60, font: "48px 'Texta Medium'", color: PLT.grey7},
  // {text: "...", line: 60, orphan: false, font: "48px 'Texta Medium'", color: PLT.grey7}
];
/**/

// Different font weight, font family, font size (smaller and larger), font style, font default, and non-English characters
/* */
const CNTNT = {
  0: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  1: { font: "60px 'Texta Medium'", color: PLT.default, text: "your " },
  2: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  3: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  4: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  5: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  6: { font: "bold 60px 'Texta Medium'", color: PLT.default, text: "your " },
  7: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  8: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  9: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  10: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  11: { font: "60px 'Texta Heavy'", color: PLT.default, text: "your " },
  12: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  13: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  14: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  15: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  16: { font: "72px 'Texta Medium'", color: PLT.default, text: "your " },
  17: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  18: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  19: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  20: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  21: { font: "48px 'Texta Medium'", color: PLT.default, text: "your " },
  22: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  23: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  24: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  25: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  26: { font: "italic 60px 'Texta Medium'", color: PLT.default, text: "your " },
  27: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  28: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  29: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  30: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  31: { font: "56px serif", color: PLT.default, text: "your " },
  32: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  33: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  34: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  35: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  36: { font: "48px 'Texta Medium'", color: PLT.default, text: "君の " },
  37: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  38: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  39: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  40: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  41: { font: "48px 'Texta Medium'", color: PLT.default, text: "الخاص بك " },
  42: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  43: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  44: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  45: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  46: { font: "48px 'Texta Medium'", color: PLT.default, text: "您的 " },
  47: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  48: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  49: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  50: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  51: { font: "48px 'Texta Light'", color: PLT.default, text: "your " },
  52: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  53: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  54: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true },

  55: { font: "60px 'Texta Medium'", color: PLT.default, text: "All " },
  56: { font: "48px 'Texta Thin'", color: PLT.default, text: "your " },
  57: { font: "60px 'Texta Medium'", color: PLT.default, text: "entertainment, " },
  58: { font: "60px 'Texta Medium'", color: PLT.primary, text: "easy" },
  59: { font: "60px 'Texta Medium'", color: PLT.default, text: ".", orphan: false, break: true }
};
/**/

// Icon as Bullet for Item
/* * /
const CNTNT = {
  0: {src: "images/icons/tick@2x.png", h: 24, w: 24, ow: 60},
  1: {font: "48px 'Texta Medium'", color: PLT.default, text: "Pause and rewind live TV, including Free-to-Air"},
};
/**/

// Inline Icons
// TODO Verify implementation
/* * /
const CNTNT = {
  0: {font: "48px 'Texta Medium'", color: PLT.default, text: "Access to movies" },
  1: {src: "images/icons/tick@2x.png", h: 24, w: 24, ow: 60},
  2: {font: "48px 'Texta Medium'", color: PLT.default, text: "Access to movies, shows, channels & more"},
  3: {src: "images/icons/tick@2x.png", h: 24, w: 24, ow: 60}
};
/**/

// Items with non-English characters
/* */
const LNGG = [
  { font: "60px 'Texta Medium'", color: PLT.grey9, text: "This sentence has the Arabic characters — " },
  { font: "48px 'Texta Medium'", color: PLT.grey9, text: "الخاص بك " },
  { font: "60px 'Texta Medium'", color: PLT.grey9, text: "— for \"your\".", orphan: false, break: true },

  { font: "60px 'Texta Medium'", color: PLT.grey9, text: "This sentence has the Chinese characters — " },
  { font: "48px 'Texta Medium'", color: PLT.grey9, text: "您的" },
  { font: "60px 'Texta Medium'", color: PLT.grey9, text: "— for \"your\".", orphan: false, break: true },

  { font: "60px 'Texta Medium'", color: PLT.grey9, text: "This sentence has the Japanese characters — " },
  { font: "48px 'Texta Medium'", color: PLT.grey9, text: "君の" },
  { font: "60px 'Texta Medium'", color: PLT.grey9, text: "— for \"your\".", orphan: false, break: true}
];
/**/