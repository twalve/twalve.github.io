NodeList.prototype.forEach = Array.prototype.forEach;
EventTarget.prototype.on = EventTarget.prototype.addEventListener;
Element.prototype.attr = Element.prototype.setAttribute;

const $ = function(selector) {
  if (selector.charAt(0) != "#" || selector.indexOf(" ") != -1) {
    return document.querySelectorAll(selector);
  } else {
    return document.querySelector(selector);
  }
};