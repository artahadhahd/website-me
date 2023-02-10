const obj = document.getElementById('object');
obj.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

var Yoffset = 25;
var Xoffset = 25;

// These are the sliders which change <div class="object">'s size, via the DOM.
const sliderV = document.getElementById('object-sizev').addEventListener('input', (e) => {
    obj.style.width = e.target.value + 'px';
    Xoffset = Math.round(e.target.value / 2)
});
const sliderH = document.getElementById('object-sizeh').addEventListener('input', (e) => {
    obj.style.height = e.target.value + 'px';
    Yoffset = Math.round(e.target.value / 2);
});

// These two functions define that the div should move only while left click is held.
function mouseUp() {
    window.removeEventListener('mousemove', move, true);
}
function mouseDown() {
    window.addEventListener('mousemove', move, true);
}

// The following function centers the div on user's mouse.
// Offset is calculated like this: x -> width/2 and y -> height/2 (rounded)
function move(e) {
    obj.style.top = e.clientY - Yoffset + 'px';
    obj.style.left = e.clientX - Xoffset + 'px';
}
