function setPositionImages(obj, x, y, width, height) {
    ctx.save();
    if (obj) {
        ctx.drawImage(obj, x, y, width, height);
    } else {
        ctx.fillRect(width / -2, height / -2, width, height);
    }
    ctx.restore();

}

function beginPositioningObjects() {
    const kindOfBirds = [redBird, redBird, blueBird, yellowBird];
    const S = [25, 25, 20, 25]
    for (i = 0; i < 4; i++) {
        Prost.push(new AllObjects(130 - i * 30, 0, 0, S[i], S[i], kindOfBirds[i]));
    }

    //    setPositionImages(grass, 0, 240, 154, 40);

    //fixme:naprawić slingshot by też miały grawitacje i ustawiały się wz. 300 taki jak wszystkie elementy

    for (i = 0; i < 3; i++) {
        Grasses.push(new AllObjects(50 + i * 310, 300, 0, 310, 60, grass));
    }
    /* setting elements position using texture */

    for (j = 9; j >= 0; j--) {
        for (i = 0; i < 6; i++) {
            switch (elementPosition[i + j * 6]) {
                case 'p':
                    Wall.push(new AllObjects(520 + i * 25, 40 + j * 20, `#${j}${i+1}2`, 20, 20));
                    break;
                case 'Q':
                    Wall.push(new AllObjects(520 + i * 25, 40 + j * 20, 0, 20, 20, pigSmall));
                    break;
                case 'w':
                    Wall.push(new AllObjects(520 + i * 25, 40 + j * 20, 0, 20, 20, wood));
                    break;
            }
        }
    }
}
