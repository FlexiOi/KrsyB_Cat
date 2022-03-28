  // local storage of player origin
    myStorage = localStorage;

    // set banned squares

    let banned_squares_right = [
        
        {
            x: 9, y: 5
        },
        {
            x: 8, y: 7
        },
        {
            x: 8, y: 8
        },
        {
            x: 8, y: 9
        },
        {
            x: 5, y: 5
        },
        {
            x: 5, y: 3
        },
        {
            x: 9, y: 2
        },
        {
            x: 3, y: 4
        },
        {
            x: 3, y: 7
        },
        {
            x: 3, y: 8
        },
        {
            x: 6, y: 4
        }
    ];
    let banned_squares_left = [
        {
            x: 9, y: 5
        },
        {
            x: 8, y: 7
        },
        {
            x: 7, y: 8
        },
        {
            x: 5, y: 9
        },
        {
            x: 5, y: 4
        },
        {
            x: 5, y: 3
        },
        {
            x: 5, y: 2
        },
        {
            x: 3, y: 4
        },
        {
            x: 3, y: 5
        },
        {
            x: 3, y: 6
        },
        {
            x: 3, y: 7
        },
        {
            x: 2, y: 8
        }
    ];
    let banned_squares_down = [
        {
            x: 10, y: 6
        },
        {
            x: 9, y: 6
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
            x: 7, y: 6
        },
        {
            x: 6, y: 6
        },
        {
            x: 5, y: 6
        },
        {
            x: 4, y: 6
        },
        {
            x: 3, y: 8
        },
        {
            x: 2, y: 8
        },
        {
            x: 4, y: 5
        },
        {
            x: 6, y: 4
        },
        {
            x: 6, y: 2
        },
        {
            x: 7, y: 2
        },
        {
            x: 8, y: 2
        },
        {
            x: 9, y: 2
        }
    ];
    let banned_squares_up = [
        {
            x: 10, y: 6
        },
        {
            x: 9, y: 5
        },
        {
            x: 8, y: 6
        },
        {
            x: 7, y: 6
        },
        {
            x: 6, y: 6
        },
        {
            x: 6, y: 4
        },
        {
            x: 4, y: 5
        },
        {
            x: 3, y: 4
        },
        {
            x: 2, y: 8
        },
        {
            x: 4, y: 6
        },
        {
            x: 5, y: 2
        },
        {
            x: 6, y: 2
        },
        {
            x: 7, y: 2
        },
        {
            x: 8, y: 2
        },
        {
            x: 9, y: 2
        },
        {
            x: 7, y: 8
        },
        {
            x: 6, y: 9
        },
        {
            x: 5, y: 9
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

 function checkInventory()
 { 
    switch (inventory_fish) {
        case "0":
            console.log("Kein Fisch!");
            break;
        case "1": 
            r.style.setProperty('--fisch', inventory_fish);
    }

    switch (inventory_carrot) {
        case "0":
            console.log("Keine Karotte!");
            break;
        case "1": 
            r.style.setProperty('--karotte', inventory_carrot);
            break;
    }

    switch (inventory_coin) {
        case "0":
            console.log("Keine Geld!");
            break;
        case "1": 
        r.style.setProperty('--geld', inventory_coin);
        break;
    }

    switch (inventory_note) {
        case "0":
            console.log("Keine Notiz!");
            break;
        case "1": 
        r.style.setProperty('--geld', inventory_note);
        break;
    }

    switch (inventory_mouse) {
        case "0":
            console.log("Keine Maus!");
            break;
        case "1": 
        r.style.setProperty('--geld', inventory_mouse);
        break;
    }

    switch (inventory_ticket) {
        case "0":
            console.log("Kein Ticket!");
            break;
        case "1": 
        r.style.setProperty('--geld', inventory_ticket);
        break;
    }
    console.log("Inventar neugeladen.");
}
checkInventory();

    // get move_x
    let move_x = rs.getPropertyValue('--move_x');
    let run_x = 0;
    move_x = move_x.replace("px", "");
    let move_x_int = parseInt(move_x);

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

    // move back to page 3

    function move_to_page3() {
        if ((place_counter_x === 10) && (place_counter_y === 6)) {
            window.location.href = "kreischcraft3.html";
            localStorage.setItem('player_origin', 11);
        }
    }

    //  Shell game



    // pop up
    let meow_timeout = false;
    var popup = document.getElementById("popup_cat");
    function ShellGame() {
        if ((place_counter_x === 7) && (place_counter_y === 6)) {
            if (meow_timeout === false) {
                console.log("popup einschalten");
                popup.classList.toggle("fadeIn");
                meow_timeout = true;
                click_arrow.addEventListener("click", cancelShellGame);
            }
            else{
;
            }
           
        }
    }
       
    async function resetShellgame()
    {
        await delay(500);
        popup.classList.toggle("fadeIn");
        popup.classList.toggle("fadeOut");
        console.log("reset");
    }
function cancelShellGame()
{
    console.log("popup ausschalten");
    popup.classList.toggle("fadeOut");
    meow_timeout = false;
    resetShellgame();
    click_arrow.removeEventListener("click", cancelShellGame);

}
    // get coords of cups
    
    let distance_between_cups = 133;

        //cup1
    let cup1_x = rs.getPropertyValue('--cup1_x');
    cup1_x = cup1_x.replace("px", "");
    let cup1_x_int = parseInt(cup1_x);

    let cup1_y = rs.getPropertyValue('--cup1_y');
    cup1_y = cup1_y.replace("px", "");
    let cup1_y_int = parseInt(cup1_y);

        //cup2
    let cup2_x = rs.getPropertyValue('--cup2_x');
    cup2_x = cup2_x.replace("px", "");
    let cup2_x_int = parseInt(cup2_x);

    let cup2_y = rs.getPropertyValue('--cup2_y');
    cup2_y = cup2_y.replace("px", "");
    let cup2_y_int = parseInt(cup2_y);
    
        //cup3
    let cup3_x = rs.getPropertyValue('--cup3_x');
    cup3_x = cup3_x.replace("px", "");
    let cup3_x_int = parseInt(cup3_x);

    let cup3_y = rs.getPropertyValue('--cup3_y');
    cup3_y = cup3_y.replace("px", "");
    let cup3_y_int = parseInt(cup3_y);
    
    let nut_counter = 0;
    let alternate_nut_counter1 = 0;
    let alternate_nut_counter2 = 1;

    // shuffle

    async function shuffle()
{
    set_cup_click();
    r.style.setProperty('--opacity_sprechblase2', 0);    
    r.style.setProperty('--opacity_sprechblase1', 0);

        for (let i = 0; i < 11; i++) {
        let randomShuffle = Math.random();
        if (randomShuffle >= 0.5) {
            shuffle1_2();
            
            if (alternate_nut_counter2 == 0) {
                console.log("Nuss hat sich nicht bewegt."); 
            }
            else
            {
            if (alternate_nut_counter1 == 0) {
                alternate_nut_counter1 = 1;
                nut_counter = 2;
                console.log("Nuss auf: "+ nut_counter);
            }
            else
            {
                alternate_nut_counter1 = 0;
                nut_counter = 1;
                console.log("Nuss auf: "+ nut_counter);
                        }
                    }
                    await delay(300);
        }
        else{
            shuffle2_3();
            if (alternate_nut_counter1 == 0) {
             console.log("Nuss hat sich nicht bewegt.");   
            }
            else
            {
            if (alternate_nut_counter2 == 0) {
                alternate_nut_counter2 = 1;
                nut_counter = 2;
                console.log("Nuss auf: "+ nut_counter);
                        }
            else
            {
                alternate_nut_counter2 = 0;
                nut_counter = 3;
                console.log("Nuss auf: "+ nut_counter);
                        } 
                    }
                    await delay(300);
        }
        
    }
    }

    async function shuffle1_2()
    {

        r.style.setProperty('--cup2_x', cup2_x_int + "px");
        r.style.setProperty('--cup3_x', cup3_x_int + "px");

        r.style.setProperty('--cup2_y', cup2_y_int + "px");
        r.style.setProperty('--cup3_y', cup3_y_int + "px"); 
        

        cup1_x = (cup1_x_int+((distance_between_cups/4)*1));
        cup2_x = (cup2_x_int-((distance_between_cups/4)*1));

        cup1_y = cup1_y_int+50;
        cup2_y = cup2_y_int-50;

        r.style.setProperty('--cup1_x', cup1_x + "px");
        r.style.setProperty('--cup2_x', cup2_x + "px");

        r.style.setProperty('--cup2_y', cup2_y + "px");
        r.style.setProperty('--cup1_y', cup1_y + "px");
        
        await delay(50);


        cup1_x = (cup1_x_int+((distance_between_cups/4)*2));
        cup2_x = (cup2_x_int-((distance_between_cups/4)*2));
        
        r.style.setProperty('--cup1_x', cup1_x + "px");
        r.style.setProperty('--cup2_x', cup2_x + "px");
    
        await delay(50);

        cup1_x = (cup1_x_int+((distance_between_cups/4)*3));
        cup2_x = (cup2_x_int-((distance_between_cups/4)*3));
        
        r.style.setProperty('--cup1_x', cup1_x + "px");
        r.style.setProperty('--cup2_x', cup2_x + "px");
    
        await delay(50);

        cup1_x = (cup1_x_int+((distance_between_cups/4)*4));
        cup2_x = (cup2_x_int-((distance_between_cups/4)*4));

        cup1_y = cup1_y_int;
        cup2_y = cup2_y_int;

        r.style.setProperty('--cup1_x', cup1_x_int + "px");
        r.style.setProperty('--cup2_x', cup2_x_int + "px");

        r.style.setProperty('--cup2_y', cup2_y_int + "px");
        r.style.setProperty('--cup1_y', cup1_y_int + "px");  

        
        
    }

    async function shuffle2_3()
    {

        r.style.setProperty('--cup1_x', cup1_x_int + "px");
        r.style.setProperty('--cup2_x', cup2_x_int + "px");

        r.style.setProperty('--cup2_y', cup2_y_int + "px");
        r.style.setProperty('--cup1_y', cup1_y_int + "px"); 

        cup2_x = (cup2_x_int+((distance_between_cups/4)*1));
        cup3_x = (cup3_x_int-((distance_between_cups/4)*1));

        cup2_y = cup2_y_int+50;
        cup3_y = cup3_y_int-50;

        r.style.setProperty('--cup2_x', cup2_x + "px");
        r.style.setProperty('--cup3_x', cup3_x + "px");

        r.style.setProperty('--cup2_y', cup2_y + "px");
        r.style.setProperty('--cup3_y', cup3_y + "px");
        
        await delay(50);


        cup2_x = (cup2_x_int+((distance_between_cups/4)*2));
        cup3_x = (cup3_x_int-((distance_between_cups/4)*2));
        
        r.style.setProperty('--cup2_x', cup2_x + "px");
        r.style.setProperty('--cup3_x', cup3_x + "px");
    
        await delay(50);

        cup2_x = (cup2_x_int+((distance_between_cups/4)*3));
        cup3_x = (cup3_x_int-((distance_between_cups/4)*3));
        
        r.style.setProperty('--cup2_x', cup2_x + "px");
        r.style.setProperty('--cup3_x', cup3_x + "px");
    
        await delay(50);

        cup2_x = (cup2_x_int+((distance_between_cups/4)*4));
        cup3_x = (cup3_x_int-((distance_between_cups/4)*4));

        cup2_y = cup2_y_int;
        cup3_y = cup3_y_int;

        r.style.setProperty('--cup2_x', cup2_x_int + "px");
        r.style.setProperty('--cup3_x', cup3_x_int + "px");

        r.style.setProperty('--cup2_y', cup2_y_int + "px");
        r.style.setProperty('--cup3_y', cup3_y_int + "px"); 
        
    }

    // click the right cup

    let click_cup1 = document.querySelector("#cup1");
    let click_cup2 = document.querySelector("#cup2");
    let click_cup3 = document.querySelector("#cup3");
    let click_arrow = document.querySelector("#backArrow");

    async function set_cup_click()
    {
        r.style.setProperty('--opacity_sprechblase3', 0);
        await delay(3500);
        click_cup1.addEventListener("click", checkCup1);
        click_cup2.addEventListener("click", checkCup2);
        click_cup3.addEventListener("click", checkCup3);
        
        r.style.setProperty('--opacity_sprechblase2', 1);
        
    } 

    async function checkCup1()
    {
        r.style.setProperty('--opacity_sprechblase2', 0);
        if (nut_counter == 1) {
 
            click_cup1.removeEventListener("click", checkCup1);
            click_cup2.removeEventListener("click", checkCup2);
            click_cup3.removeEventListener("click", checkCup3);
            r.style.setProperty('--opacity_sprechblase4', 1);
            localStorage.setItem('coin',"visible");
            r.style.setProperty('--geld', inventory_coin);
            await delay(500);
            cancelShellGame();
        }
        else
        {

            click_cup1.removeEventListener("click", checkCup1);
            click_cup2.removeEventListener("click", checkCup2);
            click_cup3.removeEventListener("click", checkCup3);
            r.style.setProperty('--opacity_sprechblase3', 1);
        }
    }
    async function checkCup2()
    {
        if (nut_counter == 2) {

            click_cup1.removeEventListener("click", checkCup1);
            click_cup2.removeEventListener("click", checkCup2);
            click_cup3.removeEventListener("click", checkCup3);
            r.style.setProperty('--opacity_sprechblase4', 1);
            localStorage.setItem('coin', "visible");
            r.style.setProperty('--geld', inventory_coin);
            await delay(500);
            cancelShellGame();
        }
        else
        {

            click_cup1.removeEventListener("click", checkCup1);
            click_cup2.removeEventListener("click", checkCup2);
            click_cup3.removeEventListener("click", checkCup3);
            r.style.setProperty('--opacity_sprechblase3', 1);
            
        }
    }
    async function checkCup3()
    {
        if (nut_counter == 3) {

            click_cup1.removeEventListener("click", checkCup1);
            click_cup2.removeEventListener("click", checkCup2);
            click_cup3.removeEventListener("click", checkCup3);
            r.style.setProperty('--opacity_sprechblase4', 1);
            localStorage.setItem('coin', "visible");
            r.style.setProperty('--geld', inventory_coin);
            await delay(500);
            cancelShellGame();
        }
        else
        {

            click_cup1.removeEventListener("click", checkCup1);
            click_cup2.removeEventListener("click", checkCup2);
            click_cup3.removeEventListener("click", checkCup3);
            r.style.setProperty('--opacity_sprechblase3', 1);
        }
    }

    // place character depending on zone entry

    var origin = localStorage.getItem('player_origin');
    switch (origin) {
        case "10": // from  page 6(top)
            console.log("Player origin is page 6(top)");
            place_counter_x = 10;
            move_x = 15 + (62 * (place_counter_x - 1));
            r.style.setProperty('--move_x', move_x + "px");
            place_counter_y = 6;
            move_y = 10 + (62 * (place_counter_y - 1));
            r.style.setProperty('--move_y', move_y + "px");
            run_y = place_counter_y - 1;
            run_x = place_counter_x - 1;
            document.getElementById("player_img").src = "src/images/cat_left_standing_black.png";
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
            ShellGame();
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
            move_to_page3();
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