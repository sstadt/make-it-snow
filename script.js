
const INTERVAL = 10;

window.app = {
  speed: 300,
  variation: 150,
  current: 0,
  last: 0
};

function _getRandomNum(from, to) {
  return Math.random() * (to - from) + from;
}

class Snowflake {
  constructor () {
    const imageNum = _getRandomNum(1, 3);
    const image = `snowflake${imageNum}.jpg`;
    const layer = _getRandomNum(1, 3);

    this.layer = layer
    this.image = image
  }

  fly () {
    console.log('wheeeeeee!')
  }
}

setInterval(() => {
  const space = _getRandomNum(app.speed - app.variation, app.speed + app.variation);
  const next = window.app.last + space;

  if (next <= window.app.current) {
    let flake = new Snowflake();
    flake.fly();
    window.app.last = window.app.current;
  }

  window.app.current += INTERVAL
}, INTERVAL);


