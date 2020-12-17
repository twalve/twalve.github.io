Array.prototype.serialJoin = function(conjunction) {
  conjunction = conjunction || "&";
  const conjuncted = ", " + conjunction + " ";
  let arr = this.slice(); // Make a copy so we don't mess with the original
  const lastItem = arr.splice(-1); // Strip out the last element
  arr = arr.length ? [arr.join(", ")] : []; // Make an array with the non-last elements joined with ', ', or make an empty array
  arr.push(lastItem); // Add last item back so we should have ["some, string, with, first, stuff, split, by, ', '", last item]; or we'll just have [lastItem] if there was only one item, or we'll have [] if there was nothing in the original array
  return arr.join(conjuncted); // Now we join the array with 'conjuncted'
}