function countPower(obj) {
    let x = obj.speedX;
    let y = obj.speedY;
    obj.power = Math.sqrt(x * x + y * y);
}
