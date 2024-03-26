var pos = 0;
const pacArray = [
  ['./PacMan1.png', './PacMan2.png'],
  ['./PacMan3.png', './PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './PacMan1.png';
  newimg.width = 100;
  newimg.height = 100;

  // Move any added pac-man below button area if too high
  y_float = parseFloat(position.y);
  if (y_float < 50) {
     y_float = y_float + 50.0;
     position.y = y_float + "px"; 
   }

  // TODO: set position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  // TODO add new Child image to game
  game.appendChild(newimg);

  // Booleans for direction right & left and for mouth open & close 
  let mouth_open = true;
  let direction_right = true;
  // initialize mouth timer and set mouth frequency to random number within a range so mouths are not all in sync
  let mouth_timer = 0;
  let mouth_freq = Math.random() * (425 - 100) + 100; 

  // return details in an object
  return {
    position,
    velocity,
    newimg,
    mouth_open,
    mouth_timer,
    mouth_freq,
    direction_right
  };
}


function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;

    // check and increment mouth timer to toggle
    if (item.mouth_timer < item.mouth_freq) {
      // increment mouth timer by 20ms
      item.mouth_timer = item.mouth_timer + 20;
    } else {
      // toggle mouth boolean and re-set mouth timer
      item.mouth_open = !item.mouth_open; 
      item.mouth_timer = 0;
    }

    // set image by direction and mouth state
    if (item.direction_right && item.mouth_open) item.newimg.src = pacArray[0][0];
    else if (item.direction_right && !item.mouth_open) item.newimg.src = pacArray[0][1];
    else if (!item.direction_right && item.mouth_open) item.newimg.src = pacArray[1][0];
    else if (!item.direction_right && !item.mouth_open) item.newimg.src = pacArray[1][1];
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
      item.position.x + item.velocity.x < 0) {
        item.velocity.x = -item.velocity.x;
        item.direction_right = !item.direction_right; // toggle direction boolean in x-axis when direction flips
      }
  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
      item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}
//don't change this line
// module.exports = { checkCollisions, update, pacMen };
