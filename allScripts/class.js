class Physics {
    constructor(speedX = 0, speedY = 0, gravity = .2, myGravity = 0, airResistance = .03) {
        this.speedX = speedX;
        this.speedY = speedY;
        this.gravity = gravity;
        this.myGravity = myGravity;
        this.airResistance = airResistance;
        this.throwPower = [];
    }
    crash = (obj) => crashFlag(this, obj);
    bounce = () => bounce(this);
    airSlow = () => airSlow(this);
    throwEl = () => throwEl(this);
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
    constructor(x, y, color, width, height, kindOfObcject) {
        super(x, y, color, width, height);
        this.kindOfObject = kindOfObcject;
    }
}
//todo:gry bird spada pod obiektami to one go hamują
//todo:limit w naciąganiu procy {najlepiej jak by było to widać}
//todo:moc ptaka >> przyda się przy naliczaniu punktów i odbiciach
//changes:ptak oddaje energie na elementach
//changes:zachowanie się elementów po uderzeniu z ptakiem
//changes:animacja przy uderzaniu jakaś chmuraka
//note:zbudowanie super budowli
//future:budowa ma mieć kilka elementów (drewno,szkło i kamień)
//changes:naliczanie punktów za ściany
//changes:zachowanie się ścian po uderzeniach z ptakiem
//future:jak znikną wszystkie piggs to koniec gry
//future:wyświetlienie wyników i ranking obok i daje gwiazdki zwykłym div
