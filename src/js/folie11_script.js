  // local storage of player origin
    myStorage = localStorage;

    // set banned squares

    let banned_squares_right = [
        
        {
            x: 3, y: 2
        },
        {
            x: 6, y: 2
        },
        {
            x: 8, y: 2
        },
        {
            x: 9, y: 4
        },
        {
            x: 9, y: 7
        },
        {
            x: 9, y: 8
        },
        {
            x: 9, y: 9
        },
        {
            x: 4, y: 8
        },
        {
            x: 4, y: 7
        },
        {
            x: 4, y: 6
        },
        {
            x: 4, y: 5
        },
        {
            x: 4, y: 4
        },
        {
            x: 1, y: 5
        },
        {
            x: 7, y: 8
        },
        {
            x: 9, y: 5
        }
    ];
    let banned_squares_left = [
        {
            x: 3, y: 4
        },
        {
            x: 3, y: 3
        },
        {
            x: 4, y: 5
        },
        {
            x: 4, y: 9
        },
        {
            x: 7, y: 8
        },
        {
            x: 9, y: 8
        },
        {
            x: 9, y: 7
        },
        {
            x: 7, y: 6
        },
        {
            x: 9, y: 5
        },
        {
            x: 9, y: 4
        },
        {
            x: 8, y: 2
        },
        {
            x: 6, y: 2
        },
        {
            x: 3, y: 2
        }
    ];
    let banned_squares_down = [
        {
            x: 3, y: 4
        },
        {
            x: 5, y: 3
        },
        {
            x: 6, y: 3
        },
        {
            x: 7, y: 3
        },
        {
            x: 8, y: 3
        },
        {
            x: 10, y: 3
        },
        {
            x: 10, y: 6
        },
        {
            x: 9, y: 9
        },
        {
            x: 8, y: 9
        },
        {
            x: 7, y: 9
        },
        {
            x: 6, y: 9
        },
        {
            x: 5, y: 9
        },
        {
            x: 4, y: 9
        },
        {
            x: 3, y: 8
        },
        {
            x: 2, y: 8
        },
        {
            x: 1, y: 8
        },
        {
            x: 8, y: 6
        },
        {
            x: 7, y: 6
        }
    ];
    let banned_squares_up = [
        {
            x: 4, y: 3
        },
        {
            x: 5, y: 3
        },
        {
            x: 7, y: 3
        },
        {
            x: 9, y: 3
        },
        {
            x: 10, y: 3
        },
        {
            x: 8, y: 6
        },
        {
            x: 7, y: 6
        },
        {
            x: 7, y: 8
        },
        {
            x: 10, y: 6
        },
        {
            x: 8, y: 9
        },
        {
            x: 6, y: 9
        },
        {
            x: 5, y: 9
        },
        {
            x: 2, y: 6
        },
        {
            x: 3, y: 6
        },
        {
            x: 1, y: 5
        }
    ];

    // get root
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r);

    // Square-Counter (Wo ist die Figur)
    let place_counter_x = 5
    let place_counter_y = 1

    // get move_x
    let move_x = rs.getPropertyValue('--move_x');
    let run_x = 0;
    move_x = move_x.replace("px", "");
    let move_x_int = parseInt(move_x);
    
    

    // get move_y
    let move_y = rs.getPropertyValue('--move_y');
    let run_y = 0;
    move_y = move_y.replace("px", "");
    move_y_int = parseInt(move_y);



    // inventory

    function reset_player_origin() {
        localStorage.clear();
        location.reload();
    }

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

    // set map values
    size_map = 620;
    number_of_squares = 10;
    let move_value = size_map / number_of_squares;

    // cat patrol

    let patrol_cat_x = 196;
    let patrol_cat_y = 134;
    let patrol_cat_max = 8;
    let patrol_cat_start_x = 3;
    let patrol_cat_start_y = 2;
    r.style.setProperty('--cat_patrol_x', ((patrol_cat_start_x  *move_value)+15) + "px");
    r.style.setProperty('--cat_patrol_y', ((patrol_cat_start_y  *move_value)+10) + "px");
    let loopLength = 4;

    async function patrolCatTop()
    {
        document.getElementById("patrol_cat").src = "src/images/patrolCat_right_standing.png";
        for (let i = 0; i  <= loopLength; i++) 
        {
            if ((Math.abs(move_x - patrol_cat_x) <= 20) && (Math.abs(move_y - patrol_cat_y) <= 20))
            {
                console.log("kollision auf Top!");
                console.log("Spieler: "+ (move_x_int) +" / "+(move_y_int)  +" Katze: "+patrol_cat_x+" / "+patrol_cat_y);
                window.location.href = "kreischcraft2.html";
                break;
            }
            else
            {
                console.log("durchlauf: " + i +" x: "+ patrol_cat_x+" y: "+ patrol_cat_y);
                patrol_cat_x = 15+ ((patrol_cat_start_x+(i)) * (move_value) + (move_value / 3 * 1));
                r.style.setProperty('--cat_patrol_x', patrol_cat_x + "px");
                await delay(75);
                document.getElementById("patrol_cat").src = "src/images/patrolCat_right_moving.png";
                patrol_cat_x = 15+ ((patrol_cat_start_x+(i)) * (move_value) + (move_value / 3 * 2));
                r.style.setProperty('--cat_patrol_x', patrol_cat_x + "px");
                await delay(75);
                document.getElementById("patrol_cat").src = "src/images/patrolCat_right_standing.png";
                patrol_cat_x = 15+ ((patrol_cat_start_x+(i)) * (move_value) + (move_value / 3 * 3));
                r.style.setProperty('--cat_patrol_x', patrol_cat_x + "px");
    
                if (i == (loopLength)) 
                    {
                    console.log("letzter Durchlauf auf Top");
                    patrolCatRight();
                    }

            }      
        }
    }

    async function patrolCatRight()
    {
        document.getElementById("patrol_cat").src = "src/images/patrolCat_front_standing.png";
        for (let i = 0; i  <= (loopLength+1); i++) 
        {
            if ((Math.abs(move_x - patrol_cat_x) <= 20) && (Math.abs(move_y - patrol_cat_y) <= 20))
            {
                console.log("kollision auf rechts!");
                console.log("Spieler: "+ (move_x-move_value) +" / "+(move_y-move_value)  +" Katze: "+patrol_cat_x+" / "+patrol_cat_y);
                window.location.href = "kreischcraft2.html";
                break;
            }
            else
            {
                console.log("durchlauf: " + i +" x: "+ patrol_cat_x+" y: "+ patrol_cat_y);
                patrol_cat_y = 10+ ((patrol_cat_start_y+(i)) * (move_value) + (move_value / 3 * 1));
                r.style.setProperty('--cat_patrol_y', patrol_cat_y + "px");
                await delay(75);
                document.getElementById("patrol_cat").src = "src/images/patrolCat_front_moving.png";
                patrol_cat_y = 10+ ((patrol_cat_start_y+(i)) * (move_value) + (move_value / 3 * 2));
                r.style.setProperty('--cat_patrol_y', patrol_cat_y + "px");
                await delay(75);
                document.getElementById("patrol_cat").src = "src/images/patrolCat_front_standing.png";
                patrol_cat_y = 10+ ((patrol_cat_start_y+(i)) * (move_value) + (move_value / 3 * 3));
                r.style.setProperty('--cat_patrol_y', patrol_cat_y + "px");
    
                if (i == (loopLength+1)) 
                    {
                    console.log("durchlauf: " + i +" x: "+ patrol_cat_x+" y: "+ patrol_cat_y);
                    console.log("letzter Durchlauf rechts");
                    patrolCatBottom();
                    }

            }                
        }
    }

    async function patrolCatBottom()
    {
        document.getElementById("patrol_cat").src = "src/images/patrolCat_left_standing.png";
        for (let i = 0; i  <= loopLength; i++) 
        {
            if ((Math.abs(move_x - patrol_cat_x) <= 20) && (Math.abs(move_y - patrol_cat_y) <= 20))
            {
                console.log("kollision auf Bottom!");
                console.log("Spieler: "+ (move_x-move_value) +" / "+(move_y-move_value)  +" Katze: "+patrol_cat_x+" / "+patrol_cat_y);
                window.location.href = "kreischcraft2.html";
                break;
            }
            else
            {
                console.log("durchlauf: " + i +" x: "+ patrol_cat_x+" y: "+ patrol_cat_y);
                patrol_cat_x = 10+ ((patrol_cat_start_x+(5-i)) * (move_value) - (move_value / 3 * 1));
                r.style.setProperty('--cat_patrol_x', patrol_cat_x + "px");
                await delay(75);
                document.getElementById("patrol_cat").src = "src/images/patrolCat_left_moving.png";
                patrol_cat_x = 10+ ((patrol_cat_start_x+(5-i)) * (move_value) - (move_value / 3 * 2));
                r.style.setProperty('--cat_patrol_x', patrol_cat_x + "px");
                await delay(75);
                document.getElementById("patrol_cat").src = "src/images/patrolCat_left_standing.png";
                patrol_cat_x = 10+ ((patrol_cat_start_x+(5-i)) * (move_value) - (move_value / 3 * 3));
                r.style.setProperty('--cat_patrol_x', patrol_cat_x + "px");
    
                if (i == (loopLength)) 
                    {
                    console.log("durchlauf: " + i +" x: "+ patrol_cat_x+" y: "+ patrol_cat_y);
                    console.log("letzter Durchlauf auf Bottom");
                    patrolCatLeft();
                    }

            }          
        }
    }

    async function patrolCatLeft()
    {
        document.getElementById("patrol_cat").src = "src/images/patrolCat_back_standing.png";
        for (let i = 0; i  <= (loopLength+1); i++) 
        {
            if ((Math.abs(move_x - patrol_cat_x) <= 20) && (Math.abs(move_y - patrol_cat_y) <= 20))
            {
                console.log("kollision auf Links!");
                console.log("Spieler: "+ (move_x-move_value) +" / "+(move_y-move_value)  +" Katze: "+patrol_cat_x+" / "+patrol_cat_y);
                window.location.href = "kreischcraft2.html";
                break;
            }
            else
            {
                console.log("durchlauf: " + i +" x: "+ patrol_cat_x+" y: "+ patrol_cat_y);
                patrol_cat_y = 10+ ((patrol_cat_start_y+(6-i)) * (move_value) - (move_value / 3 * 1));
                r.style.setProperty('--cat_patrol_y', patrol_cat_y + "px");
                
                await delay(75);
                document.getElementById("patrol_cat").src = "src/images/patrolCat_back_moving.png";
                patrol_cat_y = 10+ ((patrol_cat_start_y+(6-i)) * (move_value) - (move_value / 3 * 2));
                r.style.setProperty('--cat_patrol_y', patrol_cat_y + "px");
                await delay(75);
                document.getElementById("patrol_cat").src = "src/images/patrolCat_back_standing.png";
                patrol_cat_y = 10+ ((patrol_cat_start_y+(6-i)) * (move_value) - (move_value / 3 * 3));
                r.style.setProperty('--cat_patrol_y', patrol_cat_y + "px");
                if (i == (loopLength+1)) 
                    {
                    console.log("durchlauf: " + i +" x: "+ patrol_cat_x+" y: "+ patrol_cat_y);
                    console.log("letzter Durchlauf Links");
                    patrolCatTop();
                    }  

            }        
        }
        
    }

    // patrolCatTop(); 

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


// pop up

let bottle_timeout = false;
let bottle_done = localStorage.getItem('bottle_status');


function bottle_interface() {
    if ((place_counter_x === 9) && (place_counter_y === 8))  {
        if ((bottle_timeout === false) && (bottle_done != true)) {
            r.style.setProperty('--maus', 1);
            localStorage.setItem('mouse', 1);
            inventory_mouse = localStorage.getItem('mouse');
            localStorage.setItem('bottle_status', true);
            show_bubble10();
            checkInventory();
        }
    }
}
   
// show info

async function show_bubble10()
{
    r.style.setProperty('--opacity_sprechblase20', 1);
    await delay(2000);
    r.style.setProperty('--opacity_sprechblase20', 0);
}

    // set counters for Arrow Keys
    let counter_arrow_up = 0;
    let counter_arrow_down = 0;
    let counter_arrow_left = 0;
    let counter_arrow_right = 0;



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

    // move out of the cave

    function move_out_of_page11() {
        if ((place_counter_x === 3) && (place_counter_y === 4))
        {
            console.log("raus auf dem 1.OG");
            window.location.href = "kreischcraft2.html";
        }
        else
        {
            console.log("klappt leider nicht.");
        }
    }


   // place character depending on zone entry

   var origin = localStorage.getItem('player_origin');
   switch (origin) {
       case "16": // from  page 7
           console.log("Player origin is page 6");
           place_counter_x = 3;
           move_x = 15 + (62 * (place_counter_x - 1));
           r.style.setProperty('--move_x', move_x + "px");
           place_counter_y = 4;
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
            move_out_of_page11();
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
            bottle_interface();
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
    }