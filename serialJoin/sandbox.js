Array.prototype.serialJoin = function(conjunction) {
  conjunction = conjunction || "&";
  var conjuncted = ", " + conjunction + " ";
  var arr = this.slice(); // Make a copy so we don't mess with the original
  var lastItem = arr.splice(-1); // Strip out the last element
  arr = arr.length ? [arr.join(", ")] : []; // Make an array with the non-last elements joined with ', ', or make an empty array
  arr.push(lastItem); // Add last item back so we should have ["some, string, with, first, stuff, split, by, ', '", last item]; or we'll just have [lastItem] if there was only one item, or we'll have [] if there was nothing in the original array
  return arr.join(conjuncted); // Now we join the array with 'conjuncted'
}

/*
> [1,2,3,4].serialJoin();
>> "1, 2, 3, and 4"

> [1,2,3,4].serialJoin("or");
>> "1, 2, 3, or 4"

*/

// https://stackoverflow.com/questions/15069587/is-there-a-way-to-join-the-elements-in-an-js-array-but-let-the-last-separator-b