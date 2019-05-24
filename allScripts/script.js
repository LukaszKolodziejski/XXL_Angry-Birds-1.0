const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let i, wynik = 0;
const Prost = [];
let Wall = [];
let Grasses = [];

setInterval(upDateScene, 20);


function upDateScene() {
    ctx.clearRect(0, 0, 700, 300);
    logicGame();
    Grasses.forEach((e) => e.draw());
    Wall.forEach((e) => e.draw());
    Prost.forEach((e) => e.draw());
    //    slingshot.draw();
    text();
}

function logicGame() {
    let len = Wall.length;
    for (i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (Wall[i].crash(Wall[j])) {
                Wall[j].myGravity = -.3;
                Wall[j].speedY = 0;
            }
        }
    }
    if (Prost.length) {
        Wall = Wall.filter(checkCollision);
    }
}

function text() {
    let text = `Score: ${Math.round(wynik)}`;
    ctx.font = "20px Arial";
    ctx.fillStyle = "#a22";
    ctx.fillText(text, 330, 30);
}

/* -------------------------RectClass------------------------- */

function draw(_this) {
    ctx.save();
    _this.newPos();
    //    setPositionImages(slingshot, 123, 235, 20, 58);
    ctx.translate(_this.x, _this.y);
    ctx.rotate(_this.rotateZ * Math.PI / 180);
    ctx.fillStyle = _this.color;

    setPositionImages(_this.kindOfObject, _this.width / -2, _this.height / -2, _this.width, _this.height);
    ctx.restore();
}

function newPos(_this) {
    if (!_this.active) {
        _this.myGravity += _this.gravity;
        _this.x += _this.speedX;
        _this.y += _this.speedY + _this.myGravity;
        if (_this.x > 700) deleteElement(500);
        else if (_this.x < 0) deleteElement(500);
        else if (_this.y + _this.height >= 252) {
            _this.y = 252 - _this.height / 2;
            _this.bounce();
        }
    }
    if (_this.kindOfObject === grass) {
        _this.y = 300 - _this.height / 2;
        //fixme:wstawić tem if do nie zależnej funkcji tak samo jak dla slingshot'a
    }
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
