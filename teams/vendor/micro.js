NodeList.prototype.forEach = Array.prototype.forEach;
EventTarget.prototype.on = EventTarget.prototype.addEventListener;
Element.prototype.attr = Element.prototype.setAttribute;

NodeList.prototype.indexOf = Array.prototype.indexOf.call(NodeList, document.body);