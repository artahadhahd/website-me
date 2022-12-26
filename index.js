var count = 1;
function animation() {
    const doanimation = document.querySelectorAll(".animation");
    const showtext = document.querySelectorAll("#showtext");
    count++;
    if (count % 5 == 0){
        [...doanimation].forEach((elem) => {
            elem.style.rotate="-360deg";
        });
    }
    else if (count % 2 == 0) {
        [...doanimation].forEach((elem) => {
            elem.style.rotate="-20deg";
        });
    }
    else {
        [...doanimation].forEach((elem) => {
            elem.style.rotate="10deg";
        });
    }
    [...showtext].forEach((element) => {
        element.innerHTML = `
        <p class="text">The W#5454<br>&nbsp;&nbsp;&nbsp;&nbsp;
        age:&nbsp;14<br>&nbsp;&nbsp;&nbsp;
        sex:&nbsp;male</p>
        `;
    });
    console.log(count);
}