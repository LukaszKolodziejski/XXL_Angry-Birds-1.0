window.addEventListener('load', () => {
    const slingshot = document.getElementById('slingshot');
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
        //changes: zamiana prost na bird
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
});

//future: clasa niebo i podłoże
//future: rotacje po odbiciu od elementów
//future:muzyczka gry i przy zderzaniu
//future:zwiększenie canvas o co chodzi z margin i clientY
//future:responsywny canvas najlepsze efekty
//future:ustawienie tła za grą
//future:wczytywanie gry i powitanie;

//future:własna strona internetowa i domena a pliki na gitHubie
