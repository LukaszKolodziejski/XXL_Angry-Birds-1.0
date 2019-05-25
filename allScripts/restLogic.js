function deleteElement(time) {
    //    let a = Math.floor(Math.random() * 5 + 4);
    //    let b = Math.floor(Math.random() * 5 + 4);
    setTimeout(() => {
        //changes:dokładniejsze zmiany przy usuwaniu: speedY..
        if (Prost.length > 0 && (Prost[0].speedX < .3 && !Prost[0].disableThrow && Prost.length || Prost[0].x > 400 || Prost[0].x < 0)) {
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

function handlingAudio() {}

function addBonus(obj) {
    if (obj.kindOfObject === pigSmall) {
        bonus.push(new AllObjects(obj.x, obj.y, 0, 50, 20, bonus5000));
        wynik += 5000;
        setTimeout(() => {
            bonus.shift();
        }, 300);
    }
}
