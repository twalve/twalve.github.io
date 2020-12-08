function drawShape() {
         
  // get the canvas element using the DOM
  var canvas = document.getElementById('canvas');
  
  // Make sure we don't execute when canvas isn't supported
  if (canvas.getContext) {
  
     // use getContext to use the canvas for drawing
     var ctx = canvas.getContext('2d');
     
     ctx.fillStyle = '#00F';
     ctx.font = 'Italic 30px Sans-Serif';
     
     ctx.textBaseline = 'Top';
     ctx.fillText('Hello world!', 40, 100);
     
     ctx.font = 'Bold 30px Sans-Serif';
     ctx.fillText('Hello world!', 40, 50);
  } else {
     alert('You need Safari or Firefox 1.5+ to see this demo.');
  }
}
