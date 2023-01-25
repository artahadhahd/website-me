head = document.getElementById("head");
apple = document.getElementById("apple");
function getxpos(){
    return previous_xpos = head.getBoundingClientRect().left;
}
function getypos(){
    return head.getBoundingClientRect().top;
}

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
    switch (keyboard.key)
    {
        case "ArrowRight":
            head.style.left = (getxpos() + 10).toString() + "px";
            break;
        case "ArrowLeft":
            head.style.left = (getxpos() - 10).toString() + "px";
            break;
        case "ArrowUp":
            head.style.top = (getypos() - 10).toString() + "px";
            break;
        case "ArrowDown":
            head.style.top = (getypos() + 10).toString() + "px";
            break;
    }
});

function up(){
    head.style.top = (getypos() - 10).toString() + "px";
}
function down(){
    head.style.top = (getypos() + 10).toString() + "px";
}
function left(){
    head.style.left = (getxpos() - 10).toString() + "px";
}
function right(){
    head.style.left = (getxpos() + 10).toString() + "px";
}