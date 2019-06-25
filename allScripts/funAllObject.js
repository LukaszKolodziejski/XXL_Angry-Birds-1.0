function countPower(obj) {
    let x = obj.speedX;
    let y = obj.speedY;
    obj.power = Math.sqrt(x * x + y * y);
}

function behaviorBirdAfterColision(bird, obj) {
    const el = obj.kindOfObject;
    if (el === rock) {
        obj.song(Mp3Crash);
        bird.speedX = -3.5;
        return true;
    } else if (el === glass || el === wood) {
        obj.song(Mp3Wood);
        bird.speedX *= .7;
    } else if (el === pigKing || el === pigHelmet || el === pigSmall) {
        obj.song(Mp3Pig1);
        bird.speedX *= .5;
    }
    return false;

}

function conditionEndingGame() {
    let listPig = [];
    Wall.forEach((e) => {
        let obj = e.kindOfObject;
        if (obj === pigSmall || obj === pigKing || obj === pigHelmet)
            listPig.push(1);
    });
    if (listPig.length == 0) {
        Prost.forEach((e) => {
            if (e.showBonus) {
                e.showBonus = 0;
                addBonus(e);
            }
        });
    }
    if (!Prost.length || !listPig.length) {
        setTimeout(() => {
            ButtonNext.show = 1;
            ButtonRepeat.show = 1;
        }, 3000);
    } else {
        ButtonNext.show = 0;
        ButtonRepeat.show = 0;
    }
}
