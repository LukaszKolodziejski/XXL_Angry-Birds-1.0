function setPositionImages() {
    ctx.drawImage(slingshot, 123, 235, 20, 58);
}

/* setting elements position using texture */

for (j = 9; j >= 0; j--) {
    for (i = 0; i < 6; i++) {
        switch (elementPosition[i + j * 6]) {
            case 'p':
                Wall.push(new RectClass(520 + i * 25, 40 + j * 20, `#${j}${i+1}2`, 20, 20));
                break;
            case '-':
                break;

        }
    }
}
