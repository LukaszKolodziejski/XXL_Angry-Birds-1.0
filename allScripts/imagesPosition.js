function setPositionImages(obj, x, y, width, height) {
    ctx.save();
    if (obj) {
        ctx.drawImage(obj, x, y, width, height);
    } else {
        ctx.fillRect(width / -2, height / -2, width, height);
    }
    ctx.restore();

}
const El = [590, 25, 90, 20, 0, 20, 20];
/* EL to vector ustawiania elementów w pętli na podstawie funkcji elementPosition():
(1)> x (2)> przesunięcie x (3)> y (4)> przesunięcie y
(5)> kolor (6)> szerokość (7)> wysokość */

function beginPositioningObjects() {
    const kindOfBirds = [redBird, redBird, blueBird, yellowBird, yellowBird];
    for (i = 0; i < 5; i++) {
        Prost.push(new AllObjects(125 - i * 30, 0, 0, 25, 25, kindOfBirds[i]));

        Grasses.push(new AllObjects(50 + i * 310, 0, 0, 310, 60, grass));

        Subsoil.push(new AllObjects(50 + i * 310, 0, 0, 310, 150, subsoil));
    }

    Catapult.push(new AllObjects(160, 0, 0, 20, 58, slingshot));

    /* ------setting elements position using texture------ */

    for (j = 10; j >= 0; j--) {
        for (i = 0; i < 12; i++) {
            switch (elementPosition[i + j * 12]) {
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
                case 'K':
                    setPositionUsingVectorEl(pigKing);
                    break;
                case 'H':
                    setPositionUsingVectorEl(pigHelmet);
                    break;
                case 'E':
                    setPositionUsingVectorEl(eggs);
                    break;
            }
        }
    }
    setTimeout(jumpOnSlingshot, 4000);

}

function setPositionUsingVectorEl(obj) {
    Wall.push(new AllObjects(El[0] + i * El[1], El[2] + j * El[3], El[4], El[5], El[6], obj));
}

function specialObjectToSetPosition(obj) {
    if (obj.kindOfObject === grass) {
        obj.y = 350 - obj.height / 2;
    } else if (obj.kindOfObject === slingshot) {
        obj.y = 300 - obj.height / 2;
    } else if (obj.kindOfObject === sky) {
        obj.y = 310 - obj.height / 2;
    } else if (obj.kindOfObject === buttonRepeat) {
        obj.y = 200 - obj.height / 2;
    } else if (obj.kindOfObject === buttonNext) {
        obj.y = 200 - obj.height / 2;
    } else if (obj.kindOfObject === subsoil) {
        obj.y = 500 - obj.height / 2;
    }

}

function settingPositionSky(obj) {
    const speedSky = -0.125;
    if (obj.x <= 235) {
        obj.showBonus = 0;
    } else if (obj.x >= 700) {
        obj.showBonus = 1;
    }

    if (obj.showBonus) {
        obj.speedX = speedSky;
    } else {
        obj.speedX = Math.abs(speedSky);
    }
}
