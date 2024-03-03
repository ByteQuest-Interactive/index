// Initialising the matrix canvas
var matrixCanvas = document.getElementById('matrix-canvas');
var matrixCtx = matrixCanvas.getContext('2d');

// Setting the width and height of the canvas
matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

// Setting up the letters
var matrixLetters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
matrixLetters = matrixLetters.split('');

// Setting up the columns
var matrixFontSize = 10,
    matrixColumns = matrixCanvas.width / matrixFontSize;

// Setting up the drops
var matrixDrops = [];
for (var i = 0; i < matrixColumns; i++) {
  matrixDrops[i] = 1;
}

// Setting up the draw function
function drawMatrix() {
  matrixCtx.fillStyle = 'rgba(0, 0, 0, .1)';
  matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
  for (var i = 0; i < matrixDrops.length; i++) {
    var text = matrixLetters[Math.floor(Math.random() * matrixLetters.length)];
    matrixCtx.fillStyle = '#0f0';
    matrixCtx.fillText(text, i * matrixFontSize, matrixDrops[i] * matrixFontSize);
    matrixDrops[i]++;
    if (matrixDrops[i] * matrixFontSize > matrixCanvas.height && Math.random() > .95) {
      matrixDrops[i] = 0;
    }
  }
}

// Loop the matrix animation
setInterval(drawMatrix, 33);
