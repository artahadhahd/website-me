var count = 1;

function funny() {
    const find = document.querySelectorAll(".funny");
    for (var i = 0; i <= count; i++){
        [...find].forEach((element) => {
            element.style.rotate = "360deg";
        });
    }
}

function animation() {
    const doanimation = document.querySelectorAll(".animation");
    count++;
    if (count % 2 == 0){
        [...doanimation].forEach((elem) => {
            elem.innerHTML = `
            <img src="./wave.png" style="height: 5cm; width: 5cm; position: absolute; margin-top: 7vw; margin-left: 10vw;"> 
            <p style="color: white; position: absolute; margin-left: 37vw; margin-top: 20vw; font-size: 1cm; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">How are you?</p>
            `;
            [...doanimation].forEach((elem) => {
                elem.style.rotate="-1deg";
            });
        });
    }
    else {
        [...doanimation].forEach((elem) => {
            elem.style.rotate="15deg";
        });
        funny();
    }
}
