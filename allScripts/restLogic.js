function deleteElement(time) {
    let a = Math.floor(Math.random() * 5 + 4);
    let b = Math.floor(Math.random() * 5 + 4);
    setTimeout(() => {
        if (Prost.length > 0 && (Prost[0].speedX < .3 && !Prost[0].disableThrow && Prost.length || Prost[0].x > 400 || Prost[0].x < 0)) {
            Prost.shift();
            if (Prost.length > 0) {
                Prost[0].color = `#${a}${b}2`;
                Prost.forEach((e) => e.speedX = 2.25);
                Prost[0].myGravity += 0;
            }
        }
    }, time);
}
