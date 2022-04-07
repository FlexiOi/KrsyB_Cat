  // local storage of player origin
    myStorage = localStorage;



    // set banned squares

    let banned_squares_right = [
        {
            x: 3, y: 3
        },
        {
            x: 7, y: 3
        } ,
        {
            x: 7, y: 2
        }
    ];
    let banned_squares_left = [
        {
            x: 4, y: 3
        } ,
        {
            x: 7, y: 3
        } ,
        {
            x: 7, y: 2
        }
    ];
    let banned_squares_down = [
        {
            x: 1, y: 3
        },
        {
            x: 2, y: 3
        }
        ,
        {
            x: 3, y: 3
        } ,
        {
            x: 7, y: 3
        }

    ];
    let banned_squares_up = [
        {
            x: 1, y: 3
        },
        {
            x: 2, y: 3
        }
        ,
        {
            x: 3, y: 3
        } ,
        {
            x: 7, y: 2
        }
    ];

    // get root
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    // inventory

    var inventory_fish = localStorage.getItem('fish');
    var inventory_carrot = localStorage.getItem('carrot');
    var inventory_coin = localStorage.getItem('coin');
    var inventory_mouse = localStorage.getItem('mouse');
    var inventory_ticket = localStorage.getItem('ticket');
    var inventory_note = localStorage.getItem('note');

    var grayscale_fish = localStorage.getItem('grayscale_fish');
    var grayscale_carrot = localStorage.getItem('grayscale_carrot');
    var grayscale_coin = localStorage.getItem('grayscale_coin');
    var grayscale_mouse = localStorage.getItem('grayscale_mouse');
    var grayscale_ticket = localStorage.getItem('grayscale_ticket');
    var grayscale_note = localStorage.getItem('grayscale_note');
    var portStatus = 0;
    var lastButtonClick = 0;

// port to island

async function checkPort()
{
    

    if ((portStatus == 5) && inventory_note != 2) {
        r.style.setProperty('--opacity_portal', 1);
        r.style.setProperty('--opacity_player', 0);
        await delay(1000);
        console.log("port durch");
        place_counter_x = 7;
        move_x = 15 + (62 * (place_counter_x - 1));
        r.style.setProperty('--move_x', move_x + "px");
        place_counter_y = 2;
        move_y = 10 + (62 * (place_counter_y - 1));
        r.style.setProperty('--move_y', move_y + "px");
        run_y = place_counter_y - 1;
        run_x = place_counter_x - 1;
        document.getElementById("player_img").src = "src/images/cat_right_standing_black.png";
        localStorage.setItem('grayscale_note', 1);
        r.style.setProperty('--grayscale_note', 1);
        localStorage.setItem('note', 2);
        r.style.setProperty('--notiz', inventory_note);
        cat_done = localStorage.getItem('cat_status');
        checkInventory();

        r.style.setProperty('--portal_left', 380 + "px");
        r.style.setProperty('--portal_top', 30 + "px");
        await delay(1000);
        r.style.setProperty('--opacity_portal', 0);
        r.style.setProperty('--opacity_player', 1);

    }
    else
    {
        console.log("port status erst "+ portStatus);
    }
}

function checkFirstLetter()
{
if (lastButtonClick === "i") {
    portStatus = 1;
    checkPort();
    console.log("i klappt;");
}
else
{
    console.log("i falsch;");
    portStatus = 0;
    lastButtonClick = "";
}
}
function checkSecondLetter()
{
if (lastButtonClick === "d") {
    portStatus = 2;
    checkPort();
    console.log("erstes d klappt;");
}
else
{
    console.log("erstes d falsch;");
    portStatus = 0;
    lastButtonClick = "";
}
}
function checkThirdLetter()
{
if (lastButtonClick === "d") {
    portStatus = 3;
    checkPort();
    console.log("zweites d klappt;");
}
else
{
    console.log("zweites d falsch;");
    portStatus = 0;
    lastButtonClick = "";
}
}
function checkFourthLetter()
{
if (lastButtonClick === "q") {
    portStatus = 4;
    checkPort();
    console.log("q klappt;");
}
else
{
    console.log("q falsch;");
    portStatus = 0;
    lastButtonClick = "";
}
}
function checkFifthLetter()
{
if (lastButtonClick === "d") {
    portStatus = 5;
    checkPort();
    console.log("drittes d klappt;");
}
else
{
    console.log("drittes d falsch;");
    portStatus = 0;
    lastButtonClick = "";
}
}

 // check inventory

 function checkInventory()
 { 
    switch (inventory_fish) {
        case "0":
            console.log("Kein Fisch!");
            break;
        case "1": 
            r.style.setProperty('--fisch', inventory_fish);
        case "2": 
            r.style.setProperty('--fisch', inventory_fish);
            r.style.setProperty('--grayscale_fish', grayscale_fish);
    }

    switch (inventory_carrot) {
        case "0":
            console.log("Keine Karotte!");
            break;
        case "1": 
            r.style.setProperty('--karotte', inventory_carrot);
            break;
        case "2": 
            r.style.setProperty('--karotte', inventory_carrot);
            r.style.setProperty('--grayscale_carrot', grayscale_carrot);
            break;
    }

    switch (inventory_coin) {
        case "0":
            console.log("Keine Geld!");
            break;
        case "1": 
            r.style.setProperty('--geld', inventory_coin);
           break;
        case "2": 
            r.style.setProperty('--geld', inventory_coin);
            r.style.setProperty('--grayscale_coin', grayscale_coin);
            break;
    }

    switch (inventory_note) {
        case "0":
            console.log("Keine Notiz!");
            break;
        case "1": 
            r.style.setProperty('--notiz', inventory_note);
            break;
        case "2": 
            r.style.setProperty('--notiz', inventory_note);
            r.style.setProperty('--grayscale_note', grayscale_note);
            break;
    }

    switch (inventory_mouse) {
        case "0":
            console.log("Keine Maus!");
            break;
        case "1": 
            r.style.setProperty('--maus', inventory_mouse);
            break;
    case "2": 
            r.style.setProperty('--maus', inventory_mouse);
            r.style.setProperty('--grayscale_mouse', grayscale_mouse);
            break;
    }

    switch (inventory_ticket) {
        case "0":
            console.log("Kein Ticket!");
            break;
        case "1": 
            r.style.setProperty('--ticket', inventory_ticket);
            break;
        case "2": 
            r.style.setProperty('--ticket', inventory_ticket);
            r.style.setProperty('--grayscale_ticket', grayscale_ticket);
            break;
    }
    console.log("Inventar neugeladen.");
}
checkInventory();

//popup for the cat

let cat_timeout = false;
var popup = document.getElementById("popup_catIsland");
let cat_done = localStorage.getItem('cat_status');


async function cat_interface() {
        if ((place_counter_x === 7) && (place_counter_y === 2))  {
            if (cat_timeout === false && inventory_carrot == 2) {
                prevent_move_for_x()
                console.log("popup einschalten");
                popup.classList.toggle("fadeIn");
                cat_timeout = true;
               

                r.style.setProperty('--opacity_sprechblase13', 1);
                await delay(3000);
                r.style.setProperty('--opacity_sprechblase13', 0);
                await delay(300);
                r.style.setProperty('--opacity_sprechblase14', 1);
                await delay(3000);
                r.style.setProperty('--opacity_sprechblase14', 0);
                await delay(300);
                r.style.setProperty('--opacity_sprechblase15', 1);
                await delay(3000);
                r.style.setProperty('--opacity_sprechblase15', 0);
                await delay(300);
                r.style.setProperty('--opacity_sprechblase16', 1);
                await delay(3000);
                r.style.setProperty('--opacity_sprechblase16', 0);
                await delay(300);
                r.style.setProperty('--opacity_sprechblase17', 1);
                await delay(3000);
                r.style.setProperty('--opacity_sprechblase17', 0);
                
                place_counter_x = 3;
                move_x = 15 + (62 * (place_counter_x - 1));
                r.style.setProperty('--move_x', move_x + "px");
                place_counter_y = 3;
                move_y = 10 + (62 * (place_counter_y - 1));
                r.style.setProperty('--move_y', move_y + "px");
                run_y = place_counter_y - 1;
                run_x = place_counter_x - 1;
                document.getElementById("player_img").src = "src/images/cat_left_standing_black.png";
                localStorage.setItem('grayscale_note', 1);
                r.style.setProperty('--grayscale_note', 1);
                localStorage.setItem('note', 1);
                cat_done = localStorage.getItem('cat_status');
                

                await delay(300);
                r.style.setProperty('--ticket', 1);
                localStorage.setItem('ticket', 1);
                checkInventory();
                cancelCatIslandWindow();

                await delay(100);
                r.style.setProperty('--opacity_sprechblase18', 1);
                await delay(1500);
                r.style.setProperty('--opacity_sprechblase18', 0);
            }       
        }
    }
       
async function resetCatIslandWindow()
    {
        await delay(500);
        popup.classList.toggle("fadeIn");
        popup.classList.toggle("fadeOut");
        console.log("reset");
    }
function cancelCatIslandWindow()
{
    console.log("popup ausschalten");
    popup.classList.toggle("fadeOut");
    cat_timeout = false;
    resetCatIslandWindow();

}
    // get move_x
    let move_x = rs.getPropertyValue('--move_x');
    let run_x = 0;
    move_x = move_x.replace("px", "");
    move_x_int = parseInt(move_x);

    // set map values
    size_map = 620;
    number_of_squares = 10;
    move_value = size_map / number_of_squares;

    // get move_y
    let move_y = rs.getPropertyValue('--move_y');
    let run_y = 0;
    move_y = move_y.replace("px", "");
    move_y_int = parseInt(move_y);

    // set counters for Arrow Keys
    let counter_arrow_up = 0;
    let counter_arrow_down = 0;
    let counter_arrow_left = 0;
    let counter_arrow_right = 0;

    // Square-Counter (Wo ist die Figur)
    let place_counter_x = 5
    let place_counter_y = 1

    // delay for set time for movement animation
    let delay_duration = 50;
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    // delay for set time for preventing movement
    function delay_movement(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    // delay for movement functions
    let can_char_move = true;
    async function prevent_move() {
        can_char_move = false;
        await delay_movement(101);
        can_char_move = true;
    }

    async function prevent_move_for_x() {
        can_char_move = false;
        await delay_movement(16200);
        can_char_move = true;
    }

    // move out of the house

    function move_to_west() {
        if ((place_counter_x === 1) && (place_counter_y === 3)) {
            console.log("back to page 3");
            window.location.href = "kreischcraft3.html";
        }
    }

    //port to island


    // place character depending on zone entry

    var origin = localStorage.getItem('player_origin');
    switch (origin) {
        case "5": // from the north
            console.log("Player origin is page 3");
            place_counter_x = 1;
            move_x = 15 + (62 * (place_counter_x - 1));
            r.style.setProperty('--move_x', move_x + "px");
            place_counter_y = 3;
            move_y = 10 + (62 * (place_counter_y - 1));
            r.style.setProperty('--move_y', move_y + "px");
            run_y = place_counter_y - 1;
            run_x = place_counter_x - 1;
            document.getElementById("player_img").src = "src/images/cat_right_standing_black.png";
            console.log("x:" + move_x + " y: " + move_y);
            console.log("position on x:" + place_counter_x + " position on x: " + place_counter_y);
            break;
    }

    // move up
    async function move_up() {
        if (counter_arrow_up === banned_squares_up.length) {
            counter_arrow_up = 0;
            place_counter_y = place_counter_y - 1;
            run_y = run_y - 1;
            move_y = move_y_int + (move_value * run_y);
            console.log("x: " + place_counter_x + " y: " + place_counter_y);
            r.style.setProperty('--move_y', (move_y + (move_value / 3 * 2)) + "px");
            await delay(delay_duration);
            document.getElementById("player_img").src = "src/images/cat_back_moving_black.png";
            r.style.setProperty('--move_y', (move_y + (move_value / 3 * 1)) + "px");
            await delay(delay_duration);
            document.getElementById("player_img").src = "src/images/cat_back_standing_black.png";
            r.style.setProperty('--move_y', move_y + "px");
        }
    }
    // move down
    async function move_down() {
        if (counter_arrow_down === banned_squares_down.length) {
            counter_arrow_down = 0;
            place_counter_y = place_counter_y + 1;
            run_y = run_y + 1;
            move_y = move_y_int + (move_value * run_y);
            console.log("x: " + place_counter_x + " y: " + place_counter_y);
            r.style.setProperty('--move_y', (move_y - (move_value / 3 * 2)) + "px");
            await delay(delay_duration);
            document.getElementById("player_img").src = "src/images/cat_front_moving_black.png";
            r.style.setProperty('--move_y', (move_y - (move_value / 3 * 1)) + "px");
            await delay(delay_duration);
            document.getElementById("player_img").src = "src/images/cat_front_standing_black.png";
            r.style.setProperty('--move_y', move_y + "px");
        }
    }
    // move right
    async function move_right() {
        if (counter_arrow_right === banned_squares_right.length) {
            counter_arrow_right = 0;
            place_counter_x = place_counter_x + 1;
            run_x = run_x + 1;
            move_x = move_x_int + (move_value * run_x);
            console.log("x: " + place_counter_x + " y: " + place_counter_y);
            r.style.setProperty('--move_x', (move_x - (move_value / 3 * 2)) + "px");
            await delay(delay_duration);
            document.getElementById("player_img").src = "src/images/cat_right_moving_black.png";
            r.style.setProperty('--move_x', (move_x - (move_value / 3 * 1)) + "px");
            await delay(delay_duration);
            document.getElementById("player_img").src = "src/images/cat_right_standing_black.png";
            r.style.setProperty('--move_x', move_x + "px");
            console.log("position on x:" + place_counter_x + " position on x: " + place_counter_y);
            console.log("x:" + move_x + " y: " + move_y);
        }
    }
    // move left
    async function move_left() {
        if (counter_arrow_left === banned_squares_left.length) {
            counter_arrow_left = 0;
            place_counter_x = place_counter_x - 1;
            run_x = run_x - 1;
            move_x = move_x_int + (move_value * run_x);
            console.log("x: " + place_counter_x + " y: " + place_counter_y);
            r.style.setProperty('--move_x', (move_x + (move_value / 3 * 2)) + "px");
            await delay(delay_duration);
            document.getElementById("player_img").src = "src/images/cat_left_moving_black.png";
            r.style.setProperty('--move_x', (move_x + (move_value / 3 * 1)) + "px");
            await delay(delay_duration);
            document.getElementById("player_img").src = "src/images/cat_left_standing_black.png";
            r.style.setProperty('--move_x', move_x + "px");
        }
    }



    // determine function for arrow keys

    document.onkeydown = checkKey;
    function checkKey(e) {

        e = e || window.event;

        if ((e.keyCode == '38') && (can_char_move === true)) { // up arrow
            prevent_move();
            document.getElementById('player_img').src = "src/images/cat_back_standing_black.png";
            if ((place_counter_y > 1) && (place_counter_y <= number_of_squares)) {
                for (var i = 0; i < banned_squares_up.length; i++) {
                    if ((place_counter_x === banned_squares_up[i].x) && (place_counter_y === banned_squares_up[i].y)) {
                        console.log("out of bounds! (Arrow Down)");
                        counter_arrow_up = 0;
                        return;
                    }
                    else {
                        counter_arrow_up = counter_arrow_up + 1;
                        console.log(counter_arrow_up);
                        move_up();
                    }
                }
            }
            else {
                console.log("oben raus");
            }
        }
        else if ((e.keyCode == '40') && (can_char_move === true)) { // down arrow
            prevent_move();
            document.getElementById('player_img').src = "src/images/cat_front_standing_black.png";
            if ((place_counter_y >= 1) && (place_counter_y < number_of_squares)) {
                for (var i = 0; i < banned_squares_down.length; i++) {
                    if ((place_counter_x === banned_squares_down[i].x) && (place_counter_y === banned_squares_down[i].y)) {
                        console.log("out of bounds! (Arrow Down)");
                        counter_arrow_down = 0;
                        return;
                    }
                    else {
                        counter_arrow_down = counter_arrow_down + 1;
                        console.log(counter_arrow_down);
                        move_down();
                    }
                }
            }

            else {
                console.log("unten raus");
            }
        }
        else if ((e.keyCode == '37') && (can_char_move === true)) { // left arrow
            prevent_move();
            move_to_west();
            document.getElementById('player_img').src = "src/images/cat_left_standing_black.png";
            if ((place_counter_x > 1) && (place_counter_x <= number_of_squares)) {
                for (var i = 0; i < banned_squares_left.length; i++) {
                    if ((place_counter_x === banned_squares_left[i].x) && (place_counter_y === banned_squares_left[i].y)) {
                        console.log("out of bounds! (Arrow Left)");
                        counter_arrow_left = 0;
                        return;
                    }
                    else {
                        counter_arrow_left = counter_arrow_left + 1;
                        console.log(counter_arrow_left);
                        move_left();
                    }
                }
            }
            else {
                console.log("links raus");
            }
        }
        else if ((e.keyCode == '39') && (can_char_move === true)) { // right arrow
            prevent_move();
            cat_interface();
            document.getElementById('player_img').src = "src/images/cat_right_standing_black.png";
            if ((place_counter_x >= 1) && (place_counter_x < number_of_squares)) {
                for (var i = 0; i < banned_squares_right.length; i++) {
                    if ((place_counter_x === banned_squares_right[i].x) && (place_counter_y === banned_squares_right[i].y)) {
                        console.log("out of bounds! (Arrow Right)");
                        counter_arrow_right = 0;
                        return;
                    }
                    else {
                        counter_arrow_right = counter_arrow_right + 1;
                        console.log(counter_arrow_right);
                        move_right();
                    }
                }
            }
            else {
                console.log("rechts raus");
            }
        }
        else if (((e.keyCode == '73') && (inventory_note == 1)) &&  (place_counter_x === 3) && (place_counter_y === 3))
         { // up arrow
            lastButtonClick = "i";
            checkFirstLetter();
        }
        else if (((e.keyCode == '68') && (portStatus == 1)) &&  (place_counter_x === 3) && (place_counter_y === 3))
         { // up arrow
            lastButtonClick = "d";
            checkSecondLetter();
        }
        else if (((e.keyCode == '68') && (portStatus == 2)) &&  (place_counter_x === 3) && (place_counter_y === 3))
         { // up arrow
            lastButtonClick = "d";
            checkThirdLetter();
        }
        else if (((e.keyCode == '81') && (portStatus == 3)) &&  (place_counter_x === 3) && (place_counter_y === 3))
        { // up arrow
            lastButtonClick = "q";
            checkFourthLetter();

       }
       else if (((e.keyCode == '68') && (portStatus == 4)) &&  (place_counter_x === 3) && (place_counter_y === 3))
       { // up arrow
            lastButtonClick = "d";
            checkFifthLetter();
      }
    }