window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37) Prost.speedX -= 5;
    if (e.keyCode == 39) Prost.speedX += 5;
    if (e.keyCode == 38) Prost.myGravity -= 5;
    if (e.keyCode == 40) Prost.myGravity += 5;
});

canvas.addEventListener('mousedown', (e) => {
    if (Prost.clicked(e.clientX, e.clientY)) {
        Prost.active = 1;
        Prost.x = e.clientX;
        Prost.y = e.clientY;
        Prost.throwPower[0] = Prost.x;
        Prost.throwPower[2] = Prost.y;
        canvas.onmouseup = () => {
            Prost.throwEl();
            Prost.active = 0;
        }
    }
    console.log(`${e.clientX} i ${Prost.x}`);
});

canvas.addEventListener('mousemove', (e) => {
    if (Prost.active) {
        Prost.x = e.clientX;
        Prost.y = e.clientY;
        Prost.throwPower[1] = Prost.x;
        Prost.throwPower[3] = Prost.y;
        Prost.draw();
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
