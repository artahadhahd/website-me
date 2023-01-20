var i = 0;

function background() {
    i++;
    root = document.querySelectorAll("#background");
    topnav = document.querySelectorAll("#taskbar");
    buttons = document.querySelectorAll(".button");
    banner = document.querySelectorAll(".banner");
    if (i % 2 != 0)
    {
        // might be redundant and terrible but it works lol...
        [...root].forEach((elem) => {
            elem.style.backgroundColor = "#DAFFED";
        });
        [...topnav].forEach((elem) => {
            elem.style.backgroundColor = "#6CA6C1";
        });
        [...buttons].forEach((elem) => {
            elem.style.backgroundColor = "#6CA6C1";
        });
        [...banner].forEach((elem) => {
            elem.style.backgroundColor = "#6CBFFF";
        });
    }
    if (i % 2 == 0){
        // so darn redundant lmao
        // i know other ways to do this but this works really well here idk why
        // forgive me for my sins!
        [...root].forEach((elem) => {
            elem.style.backgroundColor = "#051923";
        });
        [...topnav].forEach((elem) => {
            elem.style.backgroundColor = "#003554";
        });
        [...buttons].forEach((elem) => {
            elem.style.backgroundColor = "#003554";
        });
        [...banner].forEach((elem) => {
            elem.style.backgroundColor = "#123456";
        });
    }
}