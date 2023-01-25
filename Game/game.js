head = document.getElementById("head");
apple = document.getElementById("apple");

function changePosition()
{
    var height_maximum = 200;
    var width_maximum = 1000;
    var LEFT = Math.floor(Math.random() * (width_maximum - 10 + 1) + 10);
    var TOP = Math.floor(Math.random() * (height_maximum - 10 + 1) + 10);
    // The following code is written to keep the coordinates correct
    // Rule: x,y mod 10 should be 0.
    LEFT -= LEFT % 10;
    TOP -= TOP % 10;
    console.log(LEFT, TOP);
    // -2 because for some reason the head cannot be aligned with the apple.
    apple.style.left = (LEFT-2).toString() + "px";
    apple.style.top = TOP.toString() + "px";
    return [LEFT, TOP];
}
document.addEventListener('keydown', function(keyboard) {
    previous_xpos = head.getBoundingClientRect().left;
    previous_ypos = head.getBoundingClientRect().top;
    switch (keyboard.key)
    {
        case "ArrowRight":
            head.style.left = (previous_xpos + 10).toString() + "px";
            break;
        case "ArrowLeft":
            head.style.left = (previous_xpos - 10).toString() + "px";
            break;
        case "ArrowUp":
            head.style.top = (previous_ypos - 10).toString() + "px";
            break;
        case "ArrowDown":
            head.style.top = (previous_ypos + 10).toString() + "px";
            break;
    }
});