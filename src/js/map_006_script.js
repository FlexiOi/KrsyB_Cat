  // local storage of player origin
  myStorage = localStorage;


  // set banned squares

  let banned_squares_right = [{
          x: 2,
          y: 1
      },
      {
          x: 2,
          y: 2
      },
      {
          x: 2,
          y: 3
      },
      {
          x: 9,
          y: 4
      },
      {
          x: 5,
          y: 5
      },
      {
          x: 6,
          y: 6
      },
      {
          x: 6,
          y: 7
      },
      {
          x: 6,
          y: 8
      },
      {
          x: 8,
          y: 9
      },
      {
          x: 8,
          y: 10
      },
      {
          x: 6,
          y: 9
      }
  ];
  let banned_squares_left = [{
          x: 2,
          y: 2
      },
      {
          x: 2,
          y: 3
      },
      {
          x: 2,
          y: 4
      },
      {
          x: 4,
          y: 5
      },
      {
          x: 4,
          y: 6
      },
      {
          x: 3,
          y: 7
      },
      {
          x: 3,
          y: 8
      },
      {
          x: 3,
          y: 9
      },
      {
          x: 5,
          y: 10
      },
      {
          x: 7,
          y: 5
      },
      {
          x: 7,
          y: 2
      },
      {
          x: 5,
          y: 3
      },
      {
          x: 8,
          y: 6
      }
  ];
  let banned_squares_down = [{
          x: 1,
          y: 1
      },
      {
          x: 2,
          y: 4
      },
      {
          x: 3,
          y: 4
      },
      {
          x: 3,
          y: 9
      },
      {
          x: 4,
          y: 9
      },
      {
          x: 5,
          y: 4
      },
      {
          x: 6,
          y: 4
      },
      {
          x: 7,
          y: 5
      },
      {
          x: 8,
          y: 6
      },
      {
          x: 9,
          y: 6
      },
      {
          x: 10,
          y: 6
      },
      {
          x: 10,
          y: 3
      },
      {
          x: 7,
          y: 2
      },
      {
          x: 9,
          y: 2
      },
      {
          x: 10,
          y: 2
      }
  ];
  let banned_squares_up = [{
          x: 3,
          y: 4
      },
      {
          x: 4,
          y: 4
      },
      {
          x: 5,
          y: 3
      },
      {
          x: 6,
          y: 3
      },
      {
          x: 7,
          y: 3
      },
      {
          x: 9,
          y: 3
      },
      {
          x: 10,
          y: 3
      },
      {
          x: 7,
          y: 2
      },
      {
          x: 8,
          y: 2
      },
      {
          x: 9,
          y: 2
      },
      {
          x: 10,
          y: 2
      },
      {
          x: 5,
          y: 5
      },
      {
          x: 6,
          y: 6
      },
      {
          x: 3,
          y: 7
      },
      {
          x: 7,
          y: 9
      },
      {
          x: 8,
          y: 10
      },
      {
          x: 10,
          y: 6
      },
      {
          x: 7,
          y: 10
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





  function checkInventory() {
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
              r.style.setProperty('--opacity_steine', 0);
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
      console.log("player origin: " + origin);
  }
  checkInventory();


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

  // move to the east

  function move_to_eastTop() {
      if ((place_counter_x === 10) && (place_counter_y === 2)) {
          console.log("raus aus dem Süden");
          window.location.href = "map_007.html";
          localStorage.setItem('player_origin', 7);
      }
  }

  function move_to_eastBottom() {
      if ((place_counter_x === 10) && (place_counter_y === 6)) {
          console.log("raus aus dem Süden");
          window.location.href = "map_007.html";
          localStorage.setItem('player_origin', 8);
      }
  }

  function move_into_cave() {
      var status_stones = rs.getPropertyValue('--opacity_steine');
      if ((place_counter_x === 8) && (place_counter_y === 10) && (status_stones == 0)) {
          console.log("ab in die Höhle");
          window.location.href = "map_010.html";
          localStorage.setItem('player_origin', 13);
      } else {
          console.log("Steine:" + status_stones);
      }
  }

  function move_to_page3() {
      if ((place_counter_x === 2) && (place_counter_y === 1)) {
          console.log("zurück zu page3");
          window.location.href = "map_003.html";
          localStorage.setItem('player_origin', 6);
      }

  }

  // place character depending on zone entry

  var origin = localStorage.getItem('player_origin');
  switch (origin) {
      case "6": // from the north
          console.log("Player origin is page 3");
          place_counter_x = 2;
          move_x = 15 + (62 * (place_counter_x - 1));
          r.style.setProperty('--move_x', move_x + "px");
          place_counter_y = 1;
          move_y = 10 + (62 * (place_counter_y - 1));
          r.style.setProperty('--move_y', move_y + "px");
          run_y = place_counter_y - 1;
          run_x = place_counter_x - 1;
          document.getElementById("player_img").src = "src/images/cat_front_standing_black.png";
          console.log("x:" + move_x + " y: " + move_y);
          console.log("position on x:" + place_counter_x + " position on x: " + place_counter_y);
          break;
      case "7": // from the east(top)
          console.log("Player origin is the east(top)");
          place_counter_x = 10;
          move_x = 15 + (62 * (place_counter_x - 1));
          r.style.setProperty('--move_x', move_x + "px");
          place_counter_y = 2;
          move_y = 10 + (62 * (place_counter_y - 1));
          r.style.setProperty('--move_y', move_y + "px");
          run_y = place_counter_y - 1;
          run_x = place_counter_x - 1;
          document.getElementById("player_img").src = "src/images/cat_left_standing_black.png";
          console.log("x:" + move_x + " y: " + move_y);
          console.log("position on x:" + place_counter_x + " position on x: " + place_counter_y);
          break;
      case "8": // from the east(bottom)
          console.log("Player origin is the east(bottom)");
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
      case "13": // from the cave
          console.log("Player origin is the cave");
          place_counter_x = 8;
          move_x = 15 + (62 * (place_counter_x - 1));
          r.style.setProperty('--move_x', move_x + "px");
          place_counter_y = 9;
          move_y = 10 + (62 * (place_counter_y - 1));
          r.style.setProperty('--move_y', move_y + "px");
          run_y = place_counter_y - 1;
          run_x = place_counter_x - 1;
          document.getElementById("player_img").src = "src/images/cat_front_standing_black.png";
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
          move_into_cave();
          move_to_page3();
          document.getElementById('player_img').src = "src/images/cat_back_standing_black.png";
          if ((place_counter_y > 1) && (place_counter_y <= number_of_squares)) {
              for (var i = 0; i < banned_squares_up.length; i++) {
                  if ((place_counter_x === banned_squares_up[i].x) && (place_counter_y === banned_squares_up[i].y)) {
                      console.log("out of bounds! (Arrow Down)");
                      counter_arrow_up = 0;
                      return;
                  } else {
                      counter_arrow_up = counter_arrow_up + 1;
                      console.log(counter_arrow_up);
                      move_up();
                  }
              }
          } else {
              console.log("oben raus");
          }
      } else if ((e.keyCode == '40') && (can_char_move === true)) { // down arrow
          prevent_move();
          document.getElementById('player_img').src = "src/images/cat_front_standing_black.png";
          if ((place_counter_y >= 1) && (place_counter_y < number_of_squares)) {
              for (var i = 0; i < banned_squares_down.length; i++) {
                  if ((place_counter_x === banned_squares_down[i].x) && (place_counter_y === banned_squares_down[i].y)) {
                      console.log("out of bounds! (Arrow Down)");
                      counter_arrow_down = 0;
                      return;
                  } else {
                      counter_arrow_down = counter_arrow_down + 1;
                      console.log(counter_arrow_down);
                      move_down();
                  }
              }
          } else {
              console.log("unten raus");
          }
      } else if ((e.keyCode == '37') && (can_char_move === true)) { // left arrow
          prevent_move();
          document.getElementById('player_img').src = "src/images/cat_left_standing_black.png";
          if ((place_counter_x > 1) && (place_counter_x <= number_of_squares)) {
              for (var i = 0; i < banned_squares_left.length; i++) {
                  if ((place_counter_x === banned_squares_left[i].x) && (place_counter_y === banned_squares_left[i].y)) {
                      console.log("out of bounds! (Arrow Left)");
                      counter_arrow_left = 0;
                      return;
                  } else {
                      counter_arrow_left = counter_arrow_left + 1;
                      console.log(counter_arrow_left);
                      move_left();
                  }
              }
          } else {
              console.log("links raus");
          }
      } else if ((e.keyCode == '39') && (can_char_move === true)) { // right arrow
          prevent_move();
          move_to_eastTop();
          move_to_eastBottom();
          document.getElementById('player_img').src = "src/images/cat_right_standing_black.png";
          if ((place_counter_x >= 1) && (place_counter_x < number_of_squares)) {
              for (var i = 0; i < banned_squares_right.length; i++) {
                  if ((place_counter_x === banned_squares_right[i].x) && (place_counter_y === banned_squares_right[i].y)) {
                      console.log("out of bounds! (Arrow Right)");
                      counter_arrow_right = 0;
                      return;
                  } else {
                      counter_arrow_right = counter_arrow_right + 1;
                      console.log(counter_arrow_right);
                      move_right();
                  }
              }
          } else {
              console.log("rechts raus");
          }
      }
  }