function deleteElement() {
    let a = Math.floor(Math.random() * 5 + 4);
    let b = Math.floor(Math.random() * 5 + 4);
    setTimeout(() => {
        if (Prost[0].speedX < .3 && !Prost[0].disableThrow && Prost.length) {
            Prost.shift();
            Prost[0].color = `#${a}${b}2`;
        }
    }, 3000);
}

/* testing git and gitHub. */
