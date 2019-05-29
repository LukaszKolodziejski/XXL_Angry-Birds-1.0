function deleteElement(time) {
    setTimeout(() => {
        if (Prost.length > 0 && (Prost[0].energy < .2 && !Prost[0].disableThrow && Prost.length || Prost[0].x > 210 || Prost[0].x < 0)) {
            Prost.shift();
            if (Prost.length > 0) {
                jumpOnSlingshot();
            }
        }
    }, time);
}

function jumpOnSlingshot() {
    Prost[0].throwPower = [15, 0, 35, 0];
    throwEl(Prost[0]);
    let id = setInterval(() => {
        if (Prost[0].crash(Catapult[0])) {
            birdCrashWithCatapult();
            Prost.forEach((e) => e.speedX = 1.35);
            clearInterval(id);
        }
    }, 10);

}

function birdCrashWithCatapult() {
    let id = setInterval(() => {
            if (!Prost[0].active) {
                Prost[0].myGravity = -.2;
            } else {
                clearInterval(id);
            }
        },
        20);
}

function handlingAudio() {
    if (Prost.length) {
        if (Prost[0].speedX > 3) {
            Mp3Flying.play();
        } else {
            Mp3Flying.pause();
            Mp3Flying.currentTime = 0;
        }
    }
}

function addBonus(obj) {
    if (obj.kindOfObject === pigSmall) {
        kindOfBonus(obj, bonus5k, 5000);
    } else if (obj.kindOfObject === pigKing) {
        kindOfBonus(obj, bonus10k_red, 10000);
    } else if (obj.kindOfObject === pigHelmet) {
        kindOfBonus(obj, bonus10k_blue, 10000);
    } else if (obj.kindOfObject === eggs) {
        kindOfBonus(obj, bonus10k_gold, 10000, 60, 24);
    }
}

function kindOfBonus(obj, bon, value, w = 50, h = 20) {
    bonus.push(new AllObjects(obj.x, obj.y, 0, w, h, bon));
    wynik += value;
    setTimeout(() => {
        bonus.shift();
    }, 300);
}
