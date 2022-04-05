// start game by pressing Enter
myStorage = localStorage;
localStorage.clear();
location.reload();
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '13') { // up arrow

        window.location.href = "kreischcraft1.html";

    }
}

