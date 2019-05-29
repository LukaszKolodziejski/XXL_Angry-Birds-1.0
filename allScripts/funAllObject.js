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
    //todo: jeśli tablica prost jest pusta albo nie ma pigs to wtedy buttony się pojawiają
    //todo: jak najade myszką na buttona to się powiększa
    //todo: ukryj buttony
}
