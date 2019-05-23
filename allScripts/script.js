var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
let wynik = 0;
let i;
let Prost = [];
for (i = 0; i < 4; i++) {
    Prost.push(new RectClass(130 - i * 30));
}
//const Slingshot = new Catapult(100, 100, `#441`);

var Wall = [];
//for (i = 0; i < 6; i++) {
//    for (let j = 0; j < 10; j++) {
//        Wall.push(new RectClass(520 + i * 25, 240 - j * 20, `#8${i+j*.2}${1+i-j*.1}`, 20, 20));
//    }
//}

setInterval(upDateScene, 20);


function upDateScene() {
    ctx.clearRect(0, 0, 700, 300);
    logicGame();
    text();
    Wall.forEach((e) => e.draw());
    Prost.forEach((e) => e.draw());
    //    Slingshot.drawCatapult();
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
    Wall = Wall.filter(checkCollision);
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
    setPositionImages();

    ctx.translate(_this.x, _this.y);
    ctx.rotate(_this.rotateZ * Math.PI / 180);
    ctx.fillStyle = _this.color;
    ctx.fillRect(_this.width / -2, _this.height / -2, _this.width, _this.height);
    ctx.restore();
}

function newPos(_this) {
    if (!_this.active) {
        _this.myGravity += _this.gravity;
        _this.x += _this.speedX;
        _this.y += _this.speedY + _this.myGravity;
        if (_this.x > 700) deleteElement(500);
        else if (_this.x < 0) deleteElement(500);
        else if (_this.y + _this.height >= 260) {
            _this.y = 260 - _this.height;
            _this.bounce();
        }
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

/* ----------------------------catapult------------------------- */

function makeCatapult(e) {
    var sticks = e.body;
    if (sticks.length === 0) {
        sticks.push(new RectClass(130, 270, `#9a1`, 10, 30, 0));
        sticks.push(new RectClass(135, 250, `#9a1`, 5, 30, 30));
        sticks.push(new RectClass(125, 250, `#9a1`, 5, 30, -30));
    }

    sticks.forEach((el) => {
        el.gravity = 0;
        el.active = 1;
        el.draw()
    });

}








/*_*/
