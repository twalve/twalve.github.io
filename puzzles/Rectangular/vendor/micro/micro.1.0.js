/********************************************************
 * NodeList.forEach
 ********************************************************/
NodeList.prototype.forEach = Array.prototype.forEach;

/********************************************************
 * Array.isArray
 ********************************************************/
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

/********************************************************
 * Object.assign
 ********************************************************/
if (!('assign' in Object)) {
  Object.assign = function(has) {
    'use strict';
    return assign;

    function assign(target, source) {
      for (let i = 1; i < arguments.length; i += 1) {
        copy(target, arguments[i]);
      }
      return target;
    }

    function copy(target, source) {
      for (const key in source) {
        if (has.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }({}.hasOwnProperty);
}

/********************************************************
 * Array.map
 ********************************************************/
if (!Array.prototype.map) {
  Array.prototype.map = function(callback /*, thisArg*/ ) {
    let T;
    let A;
    let k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    const O = Object(this);
    const len = O.length >>> 0;

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
      T = arguments[1];
    }

    A = new Array(len);
    k = 0;

    while (k < len) {
      let kValue;
      let mappedValue;

      if (k in O) {
        kValue = O[k];
        mappedValue = callback.call(T, kValue, k, O);
        A[k] = mappedValue;
      }

      k++;
    }

    return A;
  };
}

/********************************************************
 * classList
 ********************************************************/

$classList = {
  add: function(className, add) {
    className += " " + add;

    return $classList.trim(className);
  },
  remove: function(className, remove) {
    const regex = new RegExp(remove, "g");
    className = className.replace(regex, "");

    return $classList.trim(className);
  },
  trim: function(className) {
    return className.replace(/^\s|\s\s|\s$/gi, "");
  }
}
