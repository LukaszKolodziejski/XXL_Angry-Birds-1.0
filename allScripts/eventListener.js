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

    const wood = document.getElementById('wood');
    const grass = document.getElementById('grass');
    const glass = document.getElementById('glass');
    const rock = document.getElementById('rock');
    const sky = document.getElementById('sky');
    const bonus5k = document.getElementById('bonus5k');
    const Mp3Crash = document.getElementById('Mp3Crash');
    const Mp3Flying = document.getElementById('Mp3Flying');
    const Mp3Wood = document.getElementById('Mp3Wood');
    const Mp3Pig1 = document.getElementById('Mp3Pig1');
    const Mp3Pig2 = document.getElementById('Mp3Pig2');
    const buttonRepeat = document.getElementById('buttonRepeat');
    const buttonNext = document.getElementById('buttonNext');


    beginPositioningObjects();
});

window.addEventListener('keydown', (e) => {
    Prost.forEach((el) => {
        if (e.keyCode == 37) el.speedX -= 5;
        if (e.keyCode == 39) el.speedX += 5;
        if (e.keyCode == 38) el.myGravity -= 5;
        if (e.keyCode == 40) el.myGravity += 5;
    });
});


canvas.addEventListener('mousedown', (e) => {
    if (Prost.length > 0 && Prost[0].disableThrow && Prost[0].clicked(e.clientX, e.clientY)) {
        Prost[0].active = 1;
        Prost[0].disableThrow = 0;
        Prost[0].x = e.clientX;
        Prost[0].y = e.clientY;
        Prost[0].throwPower[0] = Prost[0].x;
        Prost[0].throwPower[2] = Prost[0].y;
    } else if (ButtonRepeat.clicked(e.clientX, e.clientY)) {
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
    if (Prost.length > 0 && Prost[0].active) {
        Prost[0].x = e.clientX;
        Prost[0].y = e.clientY;
        Prost[0].throwPower[1] = Prost[0].x;
        Prost[0].throwPower[3] = Prost[0].y;
        Prost[0].draw();
    }
    let moveOver = ButtonRepeat.clicked(e.clientX, e.clientY);
    if (ButtonRepeat.show && moveOver) {
        ButtonRepeat.width = 61;
        ButtonRepeat.height = 61;
    } else {
        ButtonRepeat.width = 60;
        ButtonRepeat.height = 60;
    }
});

//change:muzyczka gry
//change:zwiększenie canvas o co chodzi z margin i clientY
//future:ustawienie tła za grą
//future:wczytywanie gry i powitanie;

//future:własna strona internetowa i domena
