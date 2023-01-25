/* RESERVED for future use
var UP = false;
var LEFT = false;
var RIGHT = false;
var DOWN = false;

function reset(){
    UP = false;
    LEFT = false;
    RIGHT = false;
    DOWN = false;
}
*/

head = document.getElementById("head");
apple = document.getElementById("apple");
function getxpos(){
    return previous_xpos = head.getBoundingClientRect().left;
}
function getypos(){
    return head.getBoundingClientRect().top;
}
/* Mobile support and essential move functions */
function up(){
    head.style.top = (getypos() - 10).toString() + "px";
    return head.style.top = (getypos() - 10);
}
function down(){
    head.style.top = (getypos() + 10).toString() + "px";
    return head.style.top = (getypos() + 10);
}
function left(){
    head.style.left = (getxpos() - 10).toString() + "px";
    return head.style.left = (getxpos() - 10);
}
function right(){
    head.style.left = (getxpos() + 10).toString() + "px";
    return head.style.left = (getxpos() + 10);
}

// This function changes the position of the apple to a random position.
function changePosition()
{
    var height_maximum = 200;
    var width_maximum = 1000;
    var LEFT = Math.floor(Math.random() * (width_maximum - 10 + 1) + 10);
    var TOP = Math.floor(Math.random() * (height_maximum - 10 + 1) + 10);
    // Rule: x,y mod 10 should be 0.
    LEFT -= LEFT % 10;
    TOP -= TOP % 10;
    // console.log(LEFT, TOP);
    apple.style.left = (LEFT-2).toString() + "px";
    apple.style.top = TOP.toString() + "px";
    return [LEFT, TOP];
}
setInterval(changePosition, 2000);
// Arrow key support (PC)
document.addEventListener('keydown', function(keyboard) {
    switch (keyboard.key)
    {
        case "ArrowRight":
            // reset()
            if (right() >= window.screen.availWidth){
                head.style.left = 0;
            }
            // RIGHT = true;
            break;
        case "ArrowLeft":
            // reset()
            if (left() <= -22){
                head.style.left = (window.screen.availWidth - 10).toString() + "px";
            }
            break;
        case "ArrowUp":
            // reset()
            if (up() < 0){
                head.style.top = (innerWidth).toString() + "px";
            }
            break;
        case "ArrowDown":
            // reset()
            if (down() >= innerWidth){
                head.style.top = "8px";
            }
            break;
    }
});
