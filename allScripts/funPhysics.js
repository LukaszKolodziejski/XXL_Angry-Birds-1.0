function bounce(_this) {
    _this.myGravity = -_this.myGravity * .6;
}

function airSlow(_this) {
    const ground = 260 - _this.height;
    if (_this.speedX > 0) {
        if (ground === _this.y) {
            _this.speedX -= 3 * _this.airResistance;
        } else {
            _this.speedX -= _this.airResistance;
        }
    } else if (_this.speedX < 0) {
        if (ground === _this.y) {
            _this.speedX += 3 * _this.airResistance;
        } else {
            _this.speedX += _this.airResistance;
        }
    }
}

function crashFlag(_this, obj) {
    let txl = _this.x;
    let txr = _this.x + _this.width;
    let tyt = _this.y;
    let tyb = _this.y + _this.height;
    let oxl = obj.x;
    let oxr = obj.x + obj.width;
    let oyt = obj.y;
    let oyb = obj.y + obj.height;

    let crash;
    if (txr <= oxl || txl >= oxr ||
        tyb <= oyt || tyt >= oyb) crash = false;
    else crash = true;

    return crash;
}

function throwEl(e) {
    const [x0, x1, y0, y1] = e.throwPower;
    const powerX = x0 - x1;
    const powerY = y0 - y1;
    e.speedX += powerX * .15;
    e.myGravity += powerY * .5;

}

function checkCollision(myWall) {
    if (myWall.crash(Prost) && Prost.speedX > 5) {
        myWall.speedX += .1;
        Prost.speedX *= .7;
        wynik += 50;
        return true;
    } // else if (wynik && .1 > (Prost.speedX + Prost.speedY)) {
    //        setTimeout(() => {
    //            Prost.color = `#2a2`;
    //        }, 5000);
    //    }
    else {
        //        Prost.speedX *= .9;
        return !myWall.crash(Prost);
    }
}
