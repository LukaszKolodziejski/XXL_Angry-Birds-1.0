function setPositionImages(obj, x, y, width, height) {
    ctx.save();
    if (obj) {
        ctx.drawImage(obj, x, y, width, height);
    } else {
        ctx.fillRect(width / -2, height / -2, width, height);
    }
    ctx.restore();

}
//let Sky;
const El = [620, 25, 40, 20, 0, 20, 20];
/* EL to vector ustawiania elementów w pętli na podstawie funkcji elementPosition():
(1)> x (2)> przesunięcie x (3)> y (4)> przesunięcie y
(5)> kolor (6)> szerokość (7)> wysokość */

function beginPositioningObjects() {
    const kindOfBirds = [redBird, redBird, blueBird, yellowBird];
    const S = [25, 25, 25, 25]
    for (i = 0; i < 4; i++) {
        Prost.push(new AllObjects(125 - i * 30, 0, 0, S[i], S[i], kindOfBirds[i]));
    }

    Catapult.push(new AllObjects(160, 135, 0, 20, 58, slingshot));

    for (i = 0; i < 3; i++) {
        Grasses.push(new AllObjects(50 + i * 310, 300, 0, 310, 60, grass));
    }

    //    Sky = new AllObjects(0, 0, 0, 820, 300, sky);
    /* ------setting elements position using texture------ */
    for (j = 9; j >= 0; j--) {
        for (i = 0; i < 6; i++) {
            switch (elementPosition[i + j * 6]) {
                case 'p':
                    Wall.push(new AllObjects(El[0] + i * El[1], El[2] + j * El[3], `#${j}${i+1}2`, El[5], El[6]));
                    break;
                case 'Q':
                    setPositionUsingVectorEl(pigSmall);
                    break;
                case 'w':
                    setPositionUsingVectorEl(wood);
                    break;
                case 'g':
                    setPositionUsingVectorEl(glass);
                    break;
                case 'r':
                    setPositionUsingVectorEl(rock);
                    break;
            }
        }
    }
    setTimeout(jumpOnSlingshot, 4000);
}

function setPositionUsingVectorEl(obj) {
    Wall.push(new AllObjects(El[0] + i * El[1], El[2] + j * El[3], El[4], El[5], El[6], obj));
}
