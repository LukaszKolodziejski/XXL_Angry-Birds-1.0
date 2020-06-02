const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let i,
  wynik = 0;
let Prost = [];
let Wall = [];
let Grasses = [];
let Subsoil = [];
let Catapult = [];
let Sky = new AllObjects(700, 0, 0, 1400, 320, sky);
let ButtonRepeat = new AllObjects(410, 150, 0, 60, 60, buttonRepeat);
let ButtonNext = new AllObjects(500, 150, 0, 60, 60, buttonNext);
let bonus = [];
const marginX = 320;
const marginY = 70;
const gameInterval = setInterval(upDateScene, 20);

function upDateScene() {
  ctx.clearRect(0, 0, 920, 500);
  logicGame();
  Sky.draw();
  Subsoil.forEach((e) => e.draw());
  Grasses.forEach((e) => e.draw());
  Wall.forEach((e) => e.draw());
  Catapult.forEach((e) => e.draw());
  Prost.forEach((e) => e.draw());
  bonus.forEach((e) => e.draw());
  Mp3MainSong.volume = 0.08;
  Mp3MainSong.play();

  ButtonRepeat.draw();
  ButtonNext.draw();
  text();
}

function logicGame() {
  let len = Wall.length;
  for (i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Wall[i].crash(Wall[j])) {
        Wall[j].myGravity = -0.3;
        Wall[j].speedY = 0;
      }
    }
  }
  Prost.forEach((e) => e.countPower());
  Wall.forEach((e) => e.countPower());
  if (Prost.length) {
    Wall = Wall.filter(checkCollision);
  }
  settingPositionSky(Sky);
  handlingAudio();
  conditionEndingGame();
  Prost.forEach((e) => {
    if (e.x > 920) {
      deleteElement(500);
    } else if (e.x < 0) {
      deleteElement(500);
    }
  });
}

function text() {
  let text = `Score: ${Math.round(wynik)}`;
  ctx.font = "25px Arial";
  ctx.fillStyle = "#a22";
  ctx.fillText(text, 410, 40);
}

/* -------------------------RectClass------------------------- */

function draw(_this) {
  ctx.save();
  if (_this.show) {
    _this.newPos();

    ctx.translate(_this.x, _this.y);
    ctx.rotate((_this.rotateZ * Math.PI) / 180);
    ctx.fillStyle = _this.color;

    setPositionImages(
      _this.kindOfObject,
      _this.width / -2,
      _this.height / -2,
      _this.width,
      _this.height
    );
  }
  ctx.restore();
}

function newPos(_this) {
  if (!_this.active) {
    _this.myGravity += _this.gravity;
    _this.x += _this.speedX;
    _this.y += _this.speedY + _this.myGravity;
    if (_this.y + _this.height >= 313) {
      _this.y = 313 - _this.height;
      _this.bounce();
    }
  }

  specialObjectToSetPosition(_this);
  _this.airSlow();
}

function clicked(_this, a, b) {
  let xl = _this.x - _this.width / 2;
  let xr = _this.x + _this.width / 2;
  let yt = _this.y - _this.height / 2;
  let yb = _this.y + _this.height / 2;
  if (a > xl && a < xr && b > yt && b < yb) {
    return true;
  } else false;
}
