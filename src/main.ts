
import Konva from 'konva';

// Create the stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// Create the layer
const layer = new Konva.Layer();
stage.add(layer);

// Create the lemon shape
const lemon = new Konva.Line({
  x: stage.width() / 2,
  y: stage.height() / 2,
  points: [
    -100, 0,
    -85, -15,
    -65, -45,
    -30, -55,
    30, -55,
    65, -45,
    85, -15,
    100, 0,
    85, 15,
    65, 45,
    30, 55,
    -30, 55,
    -65, 45,
    -85, 15
  ],
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
  closed: true,
  tension: 0.4,
  draggable: true
});

// Add lemon to layer
layer.add(lemon);

// Draw the layer
layer.draw();

// changes the mouse to a hand when it hovers over
lemon.on('mouseover', () => {
  stage.container().style.cursor = 'pointer';
});

lemon.on('mouseout', () => {
  stage.container().style.cursor = 'default';
});


// makes the lemon bigger

lemon.on('mousedown', () => {
  lemon.to({
    scaleX: 1.5,
    scaleY: 1.5,
    duration: 0.2
  });
});

lemon.on('mouseup', () => {
  lemon.to({
    scaleX: 1,
    scaleY: 1,
    duration: 0.2
  });
});


