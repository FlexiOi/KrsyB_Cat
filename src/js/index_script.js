// start game by pressing Enter
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '13') { // up arrow

        window.location.href = "map_001.html";

    }
}

