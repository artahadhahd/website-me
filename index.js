var clicked = 0;
function theme() {
    const changeable = document.querySelectorAll(".change");
    ++clicked;
    if (clicked % 2 != 0)
    {
        document.getElementById("background-blue").style.backgroundColor = "#BF2904";
        document.getElementById("background-blue2").style.backgroundColor = "#BF2904";
        document.getElementById("themebtn").style.backgroundColor = "#BF2904";
        document.getElementById("themebtn").style.borderColor = "#BF2904";
        [...changeable].forEach((elem) => {
            elem.style.backgroundColor = "#BF2904";
        });
    }
    else 
    {
        document.getElementById("background-blue").style.backgroundColor = "#2388da";
        document.getElementById("background-blue2").style.backgroundColor = "#2388da";
        document.getElementById("themebtn").style.backgroundColor = "#2388da";
        document.getElementById("themebtn").style.borderColor = "#2388da";
        [...changeable].forEach((elem) => {
            elem.style.backgroundColor = "#2388da";
        });
    }
}