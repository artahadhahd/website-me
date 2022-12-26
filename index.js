function animation() {
    const doanimation = document.querySelectorAll(".animation");
    [...doanimation].forEach((elem) => {
        elem.style.rotate="30deg"
    });
    const showtext = document.querySelectorAll("#showtext");
    [...showtext].forEach((element) => {
        element.innerHTML = `
        <p class="text">The W#5454<br>&nbsp;&nbsp;&nbsp;&nbsp;
        age:&nbsp;14<br>&nbsp;&nbsp;&nbsp;
        sex:&nbsp;male</p>
        `;
    });
}