const obj = document.getElementById('object');
const lamp = document.getElementsByClassName('lamp');
obj.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function light(){
    return ''
}
lamp[0].addEventListener('mousedown', (movelight) => {
    obj.style.top = movelight.target.value + 'px';
}, false);

var Yoffset = 25;
var Xoffset = 25;

// These are the sliders which change <div id="object">'s size, via the DOM.
const sliderV = document.getElementById('object-sizev').addEventListener('input', (e) => {
    obj.style.width = e.target.value + 'px';
    Xoffset = Math.round(e.target.value / 2)
});
const sliderH = document.getElementById('object-sizeh').addEventListener('input', (e) => {
    obj.style.height = e.target.value + 'px';
    Yoffset = Math.round(e.target.value / 2);
});
const sliderR = document.getElementById('object-rotation').addEventListener('input', (e) => {
    obj.style.rotate = e.target.value + 'deg';
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
