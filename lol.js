state = false
function s(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
d = document.getElementById("america")
d.addEventListener('mouseenter', async () => {
    await s(1000);
    if (state) {
        d.innerText = "I FUCKING HATE AMERICA";
    }
});
d.addEventListener('mouseleave', () => {
    d.innerText = "I FUCKING LOVE AMERICA";
    state = true;
});