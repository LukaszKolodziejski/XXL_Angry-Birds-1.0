window.addEventListener('load', () => {
    const slingshot = document.getElementById('slingshot');
    const redBird = document.getElementById('redBird');
    const blueBird = document.getElementById('blueBird');
    const yellowBird = document.getElementById('yellowBird');
    const pigSmall = document.getElementById('pigSmall');

    const eggs = document.getElementById('eggs');
    const pigKing = document.getElementById('pigKing');
    const pigHelmet = document.getElementById('pigHelmet');
    const bonus100 = document.getElementById('bonus100');
    const bonus10k_blue = document.getElementById('bonus10k_blue');
    const bonus10k_gold = document.getElementById('bonus10k_gold');
    const bonus10k_red = document.getElementById('bonus10k_red');
    const bonus5k = document.getElementById('bonus5k');

    const wood = document.getElementById('wood');
    const grass = document.getElementById('grass');
    const glass = document.getElementById('glass');
    const rock = document.getElementById('rock');
    const sky = document.getElementById('sky');
    const subsoil = document.getElementById('subsoil');

    const Mp3Crash = document.getElementById('Mp3Crash');
    const Mp3Flying = document.getElementById('Mp3Flying');
    const Mp3Wood = document.getElementById('Mp3Wood');
    const Mp3Pig1 = document.getElementById('Mp3Pig1');
    const Mp3Pig2 = document.getElementById('Mp3Pig2');
    const Mp3MainSong = document.getElementById('Mp3MainSong');

    const buttonRepeat = document.getElementById('buttonRepeat');
    const buttonNext = document.getElementById('buttonNext');

    beginPositioningObjects();
});

window.addEventListener("mousemove", () => {
    Mp3MainSong.volume = 0.08;
    Mp3MainSong.play();
});

canvas.addEventListener('mousedown', (e) => {
    let posX = e.clientX;
    const positionX = e.clientX - marginX;
    const positionY = e.clientY - marginY;

    if (Prost.length > 0 && Prost[0].disableThrow && Prost[0].clicked(positionX, positionY) && Prost[0].crash(Catapult[0])) {
        Prost[0].active = 1;
        Prost[0].disableThrow = 0;
        Prost[0].x = positionX;
        Prost[0].y = positionY;
        Prost[0].throwPower[0] = Prost[0].x;
        Prost[0].throwPower[2] = Prost[0].y;
    } else if (ButtonRepeat.clicked(positionX, positionY)) {
        location.reload(true);
    }
});

canvas.addEventListener('mouseup', () => {
    if (Prost.length > 0 && Prost[0].active) {
        Prost[0].throwEl();
        Prost[0].active = 0;
        Prost[0].throwPower = [0, 0, 0, 0];
        deleteElement(3000);
    }
});

canvas.addEventListener('mousemove', (e) => {
    const positionX = e.clientX - marginX;
    const positionY = e.clientY - marginY;

    if (Prost.length > 0 && Prost[0].active) {
        Prost[0].x = positionX;
        Prost[0].y = positionY;
        Prost[0].throwPower[1] = Prost[0].x;
        Prost[0].throwPower[3] = Prost[0].y;
        Prost[0].draw();
    }
    let moveOver = ButtonRepeat.clicked(positionX, positionY);
    let moveOverR = ButtonNext.clicked(positionX, positionY);
    if (ButtonRepeat.show && moveOver) {
        ButtonRepeat.width = 61;
        ButtonRepeat.height = 61;
        canvas.style.cursor = 'pointer';
    } else if (ButtonNext.show && moveOverR) {
        ButtonNext.width = 61;
        ButtonNext.height = 61;
        canvas.style.cursor = 'pointer';
    } else {
        ButtonRepeat.width = 60;
        ButtonRepeat.height = 60;
        ButtonNext.width = 60;
        ButtonNext.height = 60;
        canvas.style.cursor = 'default';
    }
});
