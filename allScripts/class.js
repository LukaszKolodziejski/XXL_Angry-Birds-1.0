class Physics {
    constructor(speedX = 0, speedY = 0, gravity = .2, myGravity = 0, airResistance = .03, power = 0) {
        this.speedX = speedX;
        this.speedY = speedY;
        this.gravity = gravity;
        this.myGravity = myGravity;
        this.airResistance = airResistance;
        this.throwPower = [];
        this.power = power;

    }
    crash = (obj) => crashFlag(this, obj);
    bounce = () => bounce(this);
    airSlow = () => airSlow(this);
    throwEl = () => throwEl(this);
    countPower = () => countPower(this);
}

class RectClass extends Physics {
    constructor(x = 130, y = 0, color = "#22a", width = 20, height = 20, rotateZ = 0, speedX, speedY, gravity) {
        super(speedX, speedY, gravity);

        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.rotateZ = rotateZ;

        this.active = 0;
        this.disableThrow = 1;
    }
    draw = () => draw(this);
    newPos = () => newPos(this);
    clicked = (a, b) => clicked(this, a, b);
}


class AllObjects extends RectClass {
    constructor(x, y, color, width, height, kindOfObcject, show = 1, showBonus = 1) {
        super(x, y, color, width, height);
        this.kindOfObject = kindOfObcject;
        this.show = show;
        this.showBonus = showBonus;
    }
    song = (audio) => audio.play();
}
//changes: jak jest koniec gry i klikne nextButton to pojawiają się gwiazdki i zsumowanie wszystkich punktów
//changes: wczytanie gry za pierwszym razem i później już nie
